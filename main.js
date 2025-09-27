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

// --- SEAMLESS MODAL & LIGHTBOX LOGIC ---
let activeModalElement = null;

function setupModal() {
  const modalContainer = document.getElementById('leadership-modal');
  const modalContent = modalContainer.querySelector('.modal-content');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = lightbox.querySelector('.lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxBackBtn = document.getElementById('lightbox-back-btn');

  function openModal(chapterId, clickedElement) {
    if (modalContainer.classList.contains('is-open')) return;
    activeModalElement = clickedElement;

    const chapter = chapters.find(c => c.id === chapterId);
    if (!chapter || !chapter.details) return;
    
    modalTitle.textContent = chapter.name;
    modalBody.innerHTML = '';
    
    const leftColumn = document.createElement('div');
    const rightColumn = document.createElement('div');

    if (chapter.details.history) {
        leftColumn.innerHTML += `<div class="modal-section"><h2>Our History</h2><p>${chapter.details.history}</p></div>`;
    }

    if (chapter.details.gallery && chapter.details.gallery.length > 0) {
      const galleryHtml = chapter.details.gallery.map(img => {
          const captionData = img.caption ? `data-caption="${img.caption}"` : '';
          return `<img src="${img.src}" alt="Chapter event photo" ${captionData}>`;
      }).join('');
      rightColumn.innerHTML += `<div class="modal-section"><h2>Gallery</h2><div class="modal-gallery">${galleryHtml}</div></div>`;
    }
    const chapterLeaders = presidents.filter(p => p.chapter === chapter.name);
    if (chapterLeaders.length > 0) {
      const leadersHtml = chapterLeaders.map(leader => {
        const phoneHtml = leader.phone ? `<a href="tel:${leader.phone}" class="contact-link">${leader.phone}</a>` : '';
        return `<div class="modal-leader-card"><img src="${leader.imageUrl}" alt="Profile of ${leader.name}"><div class="modal-leader-info"><p class="name">${leader.name}</p><p class="position">${leader.position}</p><div class="contact"><a href="mailto:${leader.contact}" class="contact-link">${leader.contact}</a>${phoneHtml}</div></div></div>`;
      }).join('');
      rightColumn.innerHTML += `<div class="modal-section"><h2>Leadership</h2><div class="modal-leadership-grid">${leadersHtml}</div></div>`;
    } else {
        rightColumn.innerHTML += `<div class="modal-section"><h2>Leadership</h2><p class="text-gray-500">No leadership details available for this chapter.</p></div>`;
    }

    modalBody.appendChild(leftColumn);
    modalBody.appendChild(rightColumn);
    
    const rect = activeModalElement.getBoundingClientRect();
    
    modalContent.style.top = `${rect.top}px`;
    modalContent.style.left = `${rect.left}px`;
    modalContent.style.width = `${rect.width}px`;
    modalContent.style.height = `${rect.height}px`;
    modalContent.style.borderRadius = '0.75rem';
    
    document.body.classList.add('modal-open');
    modalContainer.classList.add('is-open');
    
    requestAnimationFrame(() => {
        modalContent.style.top = '5vh';
        modalContent.style.left = '5vw';
        modalContent.style.width = '90vw';
        modalContent.style.height = '90vh';
    });
  }

  function closeModal() {
      if (!activeModalElement) return;
      
      const rect = activeModalElement.getBoundingClientRect();
      
      modalContainer.querySelector('.modal-title').style.opacity = '0';
      modalContainer.querySelector('.modal-body').style.opacity = '0';
      
      modalContent.style.top = `${rect.top}px`;
      modalContent.style.left = `${rect.left}px`;
      modalContent.style.width = `${rect.width}px`;
      modalContent.style.height = `${rect.height}px`;
      
      modalContainer.classList.remove('is-open');
      
      const onTransitionEnd = () => {
          document.body.classList.remove('modal-open');
          activeModalElement = null;
          modalContainer.querySelector('.modal-title').style.opacity = '';
          modalContainer.querySelector('.modal-body').style.opacity = '';
          modalContent.removeEventListener('transitionend', onTransitionEnd);
      };
      modalContent.addEventListener('transitionend', onTransitionEnd, { once: true });
  }

  function openLightbox(src, caption) {
      lightboxImg.src = src;
      if (caption) {
          lightboxCaption.textContent = caption;
      } else {
          lightboxCaption.textContent = '';
      }
      lightbox.classList.remove('hidden');
  }
  function closeLightbox() {
      lightbox.classList.add('hidden');
  }

  document.addEventListener('click', (e) => {
    const triggerElement = e.target.closest('.card[data-chapter-id]');
    if (triggerElement) {
      openModal(triggerElement.dataset.chapterId, triggerElement);
    }
    
    const clickedImg = e.target.closest('.modal-gallery img');
    if (modalContainer.classList.contains('is-open') && clickedImg) {
        const src = clickedImg.src;
        const caption = clickedImg.dataset.caption;
        openLightbox(src, caption);
    }
  });

  modalCloseBtn.addEventListener('click', closeModal);
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

let currentSlide = 0;
const slides = ['slide1', 'slide2', 'slide3'];
const slideInterval = 4000;

function initSlideshow() {
  const slideElements = slides.map(id => document.getElementById(id));
  if (slideElements.some(el => !el)) return;
  
  setInterval(() => {
    slideElements[currentSlide].style.opacity = '0';
    currentSlide = (currentSlide + 1) % slides.length;
    slideElements[currentSlide].style.opacity = '1';
  }, slideInterval);
}

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
    const heroSection = document.getElementById('home');
    const heroHeight = heroSection ? heroSection.offsetHeight : 50;
    window.addEventListener('scroll', () => {
      if (window.scrollY > heroHeight - 50) {
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
  renderChapters();
  renderAnnouncements();
  initReveal();
  setupNavbarScroll();
  setupMobileMenu();
  setupModal();
});