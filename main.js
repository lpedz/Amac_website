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
            const galleryHtml = currentChapter.details.gallery.map((item, index) => `<div class="gallery-item-wrapper"><img class="gallery-image" src="${item.src}" alt="${item.caption || 'Gallery image'}" data-index="${index}"></div>`).join('');
            rightColumn.innerHTML += `<div class="modal-section"><h2>Gallery</h2><div class="modal-gallery">${galleryHtml}</div></div>`;
        }
        const chapterLeaders = presidents.filter(p => p.chapter === currentChapter.name);
        if (chapterLeaders.length > 0) {
            const leadersHtml = chapterLeaders.map(leader => `<div class="modal-leader-card"><img src="${leader.imageUrl}" alt="${leader.name}"><div class="modal-leader-info"><p class="name">${leader.name}</p><p class="position">${leader.position}</p><div class="contact"><a href="mailto:${leader.contact}" class="contact-link">${leader.contact}</a>${leader.phone ? `<a href="tel:${leader.phone}" class="contact-link">${leader.phone}</a>` : ''}</div></div></div>`).join('');
            rightColumn.innerHTML += `<div class="modal-section"><h2>Leadership</h2><div class="modal-leadership-grid">${leadersHtml}</div></div>`;
        }
        modalBody.appendChild(leftColumn);
        modalBody.appendChild(rightColumn);

        // 2. Set initial position
        modalContent.style.top = `${cardRect.top}px`;
        modalContent.style.left = `${cardRect.left}px`;
        modalContent.style.width = `${cardRect.width}px`;
        modalContent.style.height = `${cardRect.height}px`;

        // 3. Open modal and transition to final position
        document.body.classList.add('modal-open');
        modalContainer.classList.add('is-open');
        
        requestAnimationFrame(() => {
            modalContent.style.top = '5vh';
            modalContent.style.left = '50%';
            modalContent.style.width = 'min(90vw, 64rem)';
            modalContent.style.height = '90vh';
            modalContent.style.transform = 'translateX(-50%)';
        });
    }

    function closeModal() {
        if (!lastClickedCard) return;
        const cardRect = lastClickedCard.getBoundingClientRect();

        modalContent.style.top = `${cardRect.top}px`;
        modalContent.style.left = `${cardRect.left}px`;
        modalContent.style.width = `${cardRect.width}px`;
        modalContent.style.height = `${cardRect.height}px`;
        modalContent.style.transform = 'translateX(0)';
        
        modalContainer.classList.remove('is-open');
        document.body.classList.remove('modal-open');
    }
    
    function openLightbox(item) {
        lightboxImageEl.classList.add('hidden');
        lightboxVideoContainer.classList.add('hidden');
        lightboxVideoContainer.innerHTML = '';
        if (item.type === 'video') {
            lightboxVideoContainer.innerHTML = `<div class="video-embed-wrapper"><iframe src="${item.src}?autoplay=1&modestbranding=1&rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
            lightboxVideoContainer.classList.remove('hidden');
        } else {
            lightboxImageEl.src = item.src;
            lightboxImageEl.classList.remove('hidden');
        }
        lightboxCaption.textContent = item.caption || '';
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
        const galleryImg = e.target.closest('.modal-gallery img');
        if (galleryImg) {
            const itemIndex = parseInt(galleryImg.dataset.index, 10);
            const galleryItem = currentChapter.details.gallery[itemIndex];
            if (galleryItem) openLightbox(galleryItem);
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
    if (!slideshowContainer || !indicatorsContainer || !captionEl) return;

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
    const aboutInterval = slideInterval + 1000;
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
  renderAnnouncements();
  initReveal();
  setupNavbarScroll();
  setupMobileMenu();
  setupModal();
});