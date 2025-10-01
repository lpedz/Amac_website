// --- RENDER FUNCTIONS ---

function renderChapters() {
  const regions = {
    NA: document.getElementById("chapters-na"),
    AP: document.getElementById("chapters-ap"),
    MEU: document.getElementById("chapters-meu")
  };
  if (!regions.NA || !regions.AP || !regions.MEU) return;

  Object.values(regions).forEach(el => el.innerHTML = '');

  chapters.forEach((chapter, idx) => {
    const container = regions[chapter.region];
    if (!container) return;
    
    const chapterCardHtml = `
      <div class="card reveal-up" data-chapter-id="${chapter.id}" data-reveal-delay="${idx * 50}">
        <img class="card-media" src="${chapter.imageUrl}" alt="${chapter.name}">
        <div class="p-6">
          <h4 class="text-lg">${chapter.name}</h4>
          <p class="mt-1 text-base">${chapter.location}</p>
        </div>
      </div>
    `;
    
    container.innerHTML += chapterCardHtml;
  });
}

function renderExcom() {
    const grid = document.getElementById("excom-grid");
    if (!grid) return;

    grid.innerHTML = excomMembers.map((member, idx) => `
        <div class="glass-card reveal-up flex items-center p-4" data-reveal-delay="${idx * 50}">
            <img class="h-16 w-16 rounded-full object-cover flex-shrink-0" src="${member.imageUrl}" alt="Photo of ${member.name}">
            <div class="ml-4 text-left">
                <h3 class="text-base font-semibold leading-tight text-white">${member.name}</h3>
                <p class="text-sm text-blue-400">${member.position}</p>
            </div>
        </div>
    `).join('');
}

// NEW SCROLL HIJACK LOGIC
function setupScrollHijack() {
    const section = document.getElementById('excom');
    const scrollContainer = document.getElementById('excom-scroll-wrapper');
    if (!section || !scrollContainer) return;

    let isHijacked = false;

    const handleWheel = (e) => {
        if (!isHijacked) return;

        const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
        const isAtTop = scrollTop === 0;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        // If scrolling up at the top OR scrolling down at the bottom, release the hijack
        if ((e.deltaY < 0 && isAtTop) || (e.deltaY > 0 && isAtBottom)) {
            isHijacked = false;
            document.body.classList.remove('scroll-locked');
            return;
        }

        // Otherwise, hijack the scroll
        e.preventDefault();
        scrollContainer.scrollTop += e.deltaY;
    };

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                // When section is in view, enable hijacking
                isHijacked = true;
                document.body.classList.add('scroll-locked');
            } else {
                // When section is out of view, disable hijacking and ensure normal scroll
                isHijacked = false;
                document.body.classList.remove('scroll-locked');
            }
        },
        { threshold: 1.0 } // Trigger when the entire section is in view
    );

    window.addEventListener('wheel', handleWheel, { passive: false });
    observer.observe(section);
}

async function renderAnnouncements() {
    const list = document.getElementById("announcementsList");
    if (!list) return;
    list.innerHTML = `<p class="text-gray-500">Loading announcements...</p>`;
    const API_URL = "https://script.google.com/macros/s/AKfycbwYzR_HsPaS78iRPy1VCAM8W2j6zdwk2fbGdAA57ptyJ9cgh3PAT60TUNJWI3T7pe30qQ/exec"; 
    try {
      const response = await fetch(API_URL);
      if (!response.ok) { throw new Error('Network response'); }
      const announcements = await response.json();
      if (announcements.length === 0) {
        list.innerHTML = `<p class="text-gray-500">No new announcements.</p>`;
        return;
      }
      list.innerHTML = announcements.slice(0, 3).map((a, idx) => `
        <li class="card p-6 reveal-up" data-reveal-delay="${idx * 50}">
          <div class="flex items-center justify-between gap-x-4">
            <h4 class="text-lg">${a.title}</h4>
            <time class="text-xs text-gray-500">${new Date(a.createdAt).toLocaleDateString('en-IN', { dateStyle: 'medium' })}</time>
          </div>
          <p class="mt-1 text-sm text-gray-500">By ${a.author}</p>
          <p class="mt-4 text-base leading-7">${a.body}</p>
        </li>
      `).join("");
      triggerReveal();
    } catch (error) {
      console.error("Failed to fetch announcements:", error);
      list.innerHTML = `<p class="text-red-500">Could not load announcements.</p>`;
    }
}

// --- MODAL & LIGHTBOX LOGIC ---
let currentChapter = null;

function setupModal() {
    const modalContainer = document.getElementById('leadership-modal');
    const modalContent = modalContainer.querySelector('.modal-content');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    const chapterCards = document.querySelectorAll('.card[data-chapter-id]');
    
    const lightbox = document.getElementById('lightbox');
    const lightboxImageEl = document.getElementById('lightbox-image');
    const lightboxVideoContainer = document.getElementById('lightbox-video-container');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const lightboxBackBtn = document.getElementById('lightbox-back-btn');
    
    let lastClickedCard = null;

    function openModal(card) {
        lastClickedCard = card;
        const cardRect = card.getBoundingClientRect();
        const chapterId = card.dataset.chapterId;
        currentChapter = chapters.find(c => c.id === chapterId);
        if (!currentChapter || !currentChapter.details) return;

        // 1. Populate content
        modalTitle.textContent = currentChapter.name;
        modalBody.innerHTML = '';
        
        const leftColumn = document.createElement('div');
        const rightColumn = document.createElement('div');
        if (currentChapter.details.history) {
            leftColumn.innerHTML += `<div class="modal-section"><h2>Our History</h2><p>${currentChapter.details.history}</p></div>`;
        }
        if (currentChapter.details.gallery && currentChapter.details.gallery.length > 0) {
            const galleryHtml = currentChapter.details.gallery.map((item, index) => {
                const isVideo = item.type === 'video';
                let thumbnailUrl = item.src;
                if (isVideo) {
                     try {
                        const videoId = new URL(item.src).pathname.split('/').pop();
                        thumbnailUrl = `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;
                    } catch(e) { /* fallback to a default image if needed */ }
                }
                
                return `
                    <div class="gallery-item-wrapper" 
                         data-index="${index}" 
                         data-type="${item.type || 'image'}"
                         data-src="${item.src}"
                         data-caption="${item.caption || ''}">
                        <img class="gallery-image" src="${thumbnailUrl}" alt="${item.caption || 'Gallery item'}">
                        ${isVideo ? `<div class="video-play-icon"><svg style="width:3rem;height:3rem;color:rgba(255,255,255,0.8)" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg></div>` : ''}
                    </div>
                `;
            }).join('');
            rightColumn.innerHTML += `<div class="modal-section"><h2>Gallery</h2><div class="modal-gallery">${galleryHtml}</div></div>`;
        }
        const chapterLeaders = presidents.filter(p => p.chapter === currentChapter.name);
        if (chapterLeaders.length > 0) {
            const leadersHtml = chapterLeaders.map(leader => `<div class="modal-leader-card"><img src="${leader.imageUrl}" alt="${leader.name}"><div class="modal-leader-info"><p class="name">${leader.name}</p><p class="position">${leader.position}</p><div class="contact"><a href="mailto:${leader.contact}" class="contact-link">${leader.contact}</a>${leader.phone ? `<a href="tel:${leader.phone}" class="contact-link">${leader.phone}</a>` : ''}</div></div></div>`).join('');
            rightColumn.innerHTML += `<div class="modal-section"><h2>Leadership</h2><div class="modal-leadership-grid">${leadersHtml}</div></div>`;
        }
        modalBody.appendChild(leftColumn);
        modalBody.appendChild(rightColumn);

        document.body.classList.add('modal-open');
        modalContainer.classList.add('is-open');
    }

    function closeModal() {
        modalContainer.classList.remove('is-open');
        document.body.classList.remove('modal-open');
    }
    
    function openLightbox(type, src, caption) {
        lightboxImageEl.classList.add('hidden');
        lightboxVideoContainer.classList.add('hidden');
        
        if (type === 'video') {
            lightboxVideoContainer.innerHTML = `<iframe src="${src}?autoplay=1&modestbranding=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
            lightboxVideoContainer.classList.remove('hidden');
        } else {
            lightboxImageEl.src = src;
            lightboxImageEl.classList.remove('hidden');
        }
        lightboxCaption.textContent = caption || '';
        lightbox.classList.remove('hidden');
    }

    function closeLightbox() {
        lightbox.classList.add('hidden');
        lightboxVideoContainer.innerHTML = '';
    }

    chapterCards.forEach(card => card.addEventListener('click', () => openModal(card)));
    modalCloseBtn.addEventListener('click', closeModal);
    modalContainer.querySelector('.modal-backdrop').addEventListener('click', closeModal);

    modalBody.addEventListener('click', (e) => {
        const galleryWrapper = e.target.closest('.gallery-item-wrapper');
        if (galleryWrapper) {
            const { type, src, caption } = galleryWrapper.dataset;
            openLightbox(type, src, caption);
        }
    });

    lightboxBackBtn.addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-backdrop').addEventListener('click', closeLightbox);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!lightbox.classList.contains('hidden')) closeLightbox();
            else if (modalContainer.classList.contains('is-open')) closeModal();
        }
    });
}


// --- UTILITY & SETUP FUNCTIONS ---
let currentHeroSlide = 0;
const heroSlides = ['slide1', 'slide2', 'slide3'];
const slideInterval = 4000;

function initSlideshow() {
  const slideElements = heroSlides.map(id => document.getElementById(id));
  if (slideElements.some(el => !el)) return;
  
  setInterval(() => {
    slideElements[currentHeroSlide].style.opacity = '0';
    currentHeroSlide = (currentHeroSlide + 1) % heroSlides.length;
    slideElements[currentHeroSlide].style.opacity = '1';
  }, slideInterval);
}

const polaroidSlidesData = [
    { type: 'video', caption: 'AMAC: A Global Network, United (Documentary)' },
    { type: 'image', src: 'images/Chapters%20images/uae22%20(1).webp', caption: 'Faculty with former principals at the AMAC launch.' },
    { type: 'image', src: 'images/Chapters%20images/uae22%20(2).webp', caption: 'The official launching of AMAC in Dubai, 2012.' }
];

function initAboutSlideshow() {
    const slideshowContainer = document.getElementById('about-slideshow');
    const indicatorsContainer = document.getElementById('about-indicators');
    const captionEl = document.getElementById('polaroid-caption');
    const polaroidFrame = document.querySelector('.polaroid-frame');

    if (!slideshowContainer || !indicatorsContainer || !captionEl || !polaroidFrame) return;

    slideshowContainer.innerHTML = polaroidSlidesData.map((slide) => {
        if (slide.type === 'video') {
            return `<div class="about-slide"><iframe id="youtube-player" style="width: 100%; height: 100%; border: 0;" src="https://www.youtube.com/embed/E2dU3jCuZak?enablejsapi=1" title="AMAC Documentary" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
        }
        return `<div class="about-slide"><img src="${slide.src}" alt="${slide.caption}" class="w-full h-full object-cover"></div>`;
    }).join('');
    
    indicatorsContainer.innerHTML = polaroidSlidesData.map(() => `<div class="indicator-dot"></div>`).join('');

    const slides = slideshowContainer.querySelectorAll('.about-slide');
    const indicatorDots = indicatorsContainer.querySelectorAll('.indicator-dot');
    let currentAboutSlide = 0;
    const aboutInterval = slideInterval + 100;
    let intervalId = null;

    function updateSlide(slideIndex) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[slideIndex].classList.add('active');
        indicatorDots.forEach(dot => dot.classList.remove('active'));
        indicatorDots[slideIndex].classList.add('active');
        captionEl.textContent = polaroidSlidesData[slideIndex].caption;
    }

    function start() {
        if (intervalId) clearInterval(intervalId);
        intervalId = setInterval(() => {
            currentAboutSlide = (currentAboutSlide + 1) % slides.length;
            updateSlide(currentAboutSlide);
        }, aboutInterval);
    }

    function stop() {
        clearInterval(intervalId);
    }
    
    window.slideshowController = { start, stop };
    updateSlide(currentAboutSlide);
    start();

    polaroidFrame.addEventListener('mouseenter', stop);
    polaroidFrame.addEventListener('mouseleave', start);
}

// --- YouTube Player API Functions ---
let player;
function onYouTubeIframeAPIReady() {
  if (document.getElementById('youtube-player')) {
    player = new YT.Player('youtube-player', { events: { 'onStateChange': onPlayerStateChange } });
  }
}

function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING) {
    if (window.slideshowController) window.slideshowController.stop();
  } else if (event.data == YT.PlayerState.PAUSED || event.data == YT.PlayerState.ENDED) {
    if (window.slideshowController) window.slideshowController.start();
  }
}

// --- Other Setup Functions ---
let revealObserver;
function initReveal() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const elements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom');
    if (prefersReduced) {
      elements.forEach(el => el.classList.add('visible'));
      return;
    }
    revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
          if (delay) el.style.transitionDelay = `${delay}ms`;
          el.classList.add('visible');
          revealObserver.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -10% 0px' });
    elements.forEach(el => revealObserver.observe(el));
}

function triggerReveal() {
    if (!revealObserver) return;
    const elements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right, .reveal-zoom:not(.visible)');
    elements.forEach(el => revealObserver.observe(el));
}
  
function setupNavbarScroll() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;
    window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }, { passive: true });
}
  
function setupMobileMenu() {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');
    if (hamburgerBtn && mobileMenu) {
      hamburgerBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
      });
    }
}
  
window.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  initAboutSlideshow();
  renderChapters();
  renderExcom();
  renderAnnouncements();
  initReveal();
  setupNavbarScroll();
  setupMobileMenu();
  setupModal();
  setupScrollHijack();
});