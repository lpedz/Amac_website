const chapters = [
    { id: 'uae', name: "UAE Chapter", location: "UAE", region: "MEU", imageUrl: "images/uae.jpg" },
    { id: 'australia', name: "Australia Chapter", location: "Australia", region: "AP", imageUrl: "images/australia.jpg" },
    { id: 'usa', name: "USA Chapter", location: "USA", region: "NA", imageUrl: "images/usa.jpg" },
    { id: 'singapore', name: "Singapore Chapter", location: "Singapore", region: "AP", imageUrl: "images/singapore.webp" },
    { id: 'saudi', name: "Saudi Arabia Chapter", location: "Saudi Arabia", region: "MEU", imageUrl: "images/saudi.avif" },
    { id: 'kuwait', name: "Kuwait Chapter", location: "Kuwait", region: "MEU", imageUrl: "images/Kuwait.jpeg" },
    { id: 'qatar', name: "Qatar Chapter", location: "Qatar", region: "MEU", imageUrl: "images/qatar.jpg" },
    { id: 'oman', name: "Oman Chapter", location: "Oman", region: "MEU", imageUrl: "images/oman.jpg" },
    { id: 'chennai', name: "Chennai Chapter", location: "Chennai", region: "AP", imageUrl: "images/chennai.jpg" },
    { id: 'chicago', name: "Chicago Chapter", location: "USA", region: "NA", imageUrl: "images/chicago.jpg" },
    { id: 'dc', name: "Washington DC Chapter", location: "USA", region: "NA", imageUrl: "images/washington.jpg" }
];

const presidents = [
    { chapter: "AMAC", name: "Mohan Joseph Cheeran", contact: "chairman@amac.org", position: "Chairman", imageUrl: "https://i.pravatar.cc/150?u=Mohan" },
    { chapter: "UAE Chapter", name: "Mathew Kavalam", contact: "uae@amac.org", position: "President", imageUrl: "https://i.pravatar.cc/150?u=uae@amac.org" },
    { chapter: "Australia Chapter", name: "Xavi Joseph", contact: "australia@amac.org", position: "President", imageUrl: "https://i.pravatar.cc/150?u=australia@amac.org" },
    { chapter: "USA Chapter", name: "Thomas Stephan", contact: "usa@amac.org", position: "President", imageUrl: "https://i.pravatar.cc/150?u=Thomas" },
    { chapter: "AMAC", name: "Jacob Zachariah", contact: "secretary@amac.org", position: "General Secretary", imageUrl: "https://i.pravatar.cc/150?u=Jacob" },
    { chapter: "BALI", name: "John Emmanuel", contact: "bali@amac.org", position: "Convener", imageUrl: "https://i.pravatar.cc/150?u=John" },
    { chapter: "Singapore Chapter", name: "Shaja Mathews", contact: "singapore@amac.org", position: "President", imageUrl: "https://i.pravatar.cc/150?u=singapore@amac.org" },
    { chapter: "MACE", name: "Bos Mathew", contact: "principal@mace.ac.in", position: "Principal", imageUrl: "https://i.pravatar.cc/150?u=principal@mace.ac.in" },
    { chapter: "Parent Alumni", name: "Jiss Paul", contact: "parent@amac.org", position: "Representative", imageUrl: "https://i.pravatar.cc/150?u=parent@amac.org" },
    { chapter: "Parent Alumni", name: "Brijesh", contact: "parent2@amac.org", position: "Representative", imageUrl: "https://i.pravatar.cc/150?u=parent2@amac.org" },
    { chapter: "Saudi Arabia Chapter", name: "Johnson Samuel", contact: "saudi@amac.org", position: "President", imageUrl: "https://i.pravatar.cc/150?u=saudi@amac.org" },
    { chapter: "UAE Chapter", name: "Siby Joseph", contact: "uae2@amac.org", position: "Vice President", imageUrl: "https://i.pravatar.cc/150?u=uae2@amac.org" },
    { chapter: "Kuwait Chapter", name: "Giju George", contact: "kuwait@amac.org", position: "President", imageUrl: "https://i.pravatar.cc/150?u=kuwait@amac.org" },
    { chapter: "Kuwait Chapter", name: "Vinil KV", contact: "kuwait2@amac.org", position: "Vice President", imageUrl: "https://i.pravatar.cc/150?u=kuwait2@amac.org" },
    { chapter: "Qatar Chapter", name: "Baiju Madhavan", contact: "qatar@amac.org", position: "President", imageUrl: "https://i.pravatar.cc/150?u=qatar@amac.org" },
    { chapter: "Qatar Chapter", name: "Sineesh", contact: "qatar2@amac.org", position: "Vice President", imageUrl: "https://i.pravatar.cc/150?u=qatar2@amac.org" },
    { chapter: "Oman Chapter", name: "Benny Joseph", contact: "oman@amac.org", position: "President", imageUrl: "https://i.pravatar.cc/150?u=oman@amac.org" },
    { chapter: "Chennai Chapter", name: "David Rajan", contact: "chennai@amac.org", position: "President", imageUrl: "https://i.pravatar.cc/150?u=chennai@amac.org" },
    { chapter: "Australia Chapter", name: "Dhanya", contact: "australia2@amac.org", position: "Vice President", imageUrl: "https://i.pravatar.cc/150?u=australia2@amac.org" },
    { chapter: "Australia Chapter", name: "George Jacob", contact: "australia3@amac.org", position: "Secretary", imageUrl: "https://i.pravatar.cc/150?u=australia3@amac.org" },
    { chapter: "Australia Chapter", name: "Neethi", contact: "australia4@amac.org", position: "Treasurer", imageUrl: "https://i.pravatar.cc/150?u=australia4@amac.org" },
    { chapter: "Chicago Chapter", name: "Lisha Johny", contact: "chicago@amac.org", position: "President", imageUrl: "https://i.pravatar.cc/150?u=chicago@amac.org" },
    { chapter: "Washington DC Chapter", name: "Rejive Joseph", contact: "dc@amac.org", position: "President", imageUrl: "https://i.pravatar.cc/150?u=dc@amac.org" }
];

// --- RENDER FUNCTIONS ---

function renderChapters() {
  const regions = {
    NA: document.getElementById("chapters-na"),
    AP: document.getElementById("chapters-ap"),
    MEU: document.getElementById("chapters-meu")
  };

  if (!regions.NA || !regions.AP || !regions.MEU) return;

  // Clear existing content
  Object.values(regions).forEach(el => el.innerHTML = '');

  chapters.forEach((chapter, idx) => {
    const container = regions[chapter.region];
    if (!container) return;

    // Find leaders for this chapter
    const chapterLeaders = presidents.filter(p => p.chapter === chapter.name);
    
    // Generate HTML for leaders to be placed in the overlay
    const leadersHtml = chapterLeaders.length > 0 
      ? `<ul>
          ${chapterLeaders.map(leader => `
            <li>
              <p class="leader-name">${leader.name}</p>
              <p class="leader-position">${leader.position}</p>
            </li>
          `).join('')}
         </ul>`
      : '<p class="text-sm text-gray-400">No leadership listed.</p>';
      
    const chapterCardHtml = `
      <div class="card reveal-up" data-reveal-delay="${idx * 50}">
        <img class="card-media" src="${chapter.imageUrl}" alt="${chapter.name}">
        <div class="p-6">
          <h4 class="text-lg">${chapter.name}</h4>
          <p class="mt-1 text-base">${chapter.location}</p>
        </div>
        <div class="card-overlay">
          <div class="card-overlay-content">
            <h5>Leadership</h5>
            ${leadersHtml}
          </div>
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

// --- UTILITY & SETUP FUNCTIONS ---

let currentSlide = 0;
const slides = ['slide1', 'slide2', 'slide3'];
const slideInterval = 4000;

function initSlideshow() {
  setInterval(() => {
    const current = document.getElementById(slides[currentSlide]);
    if (current) current.style.opacity = '0';
    currentSlide = (currentSlide + 1) % slides.length;
    const next = document.getElementById(slides[currentSlide]);
    if (next) next.style.opacity = '1';
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
  
// This runs when the page is fully loaded.
window.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  renderChapters();
  renderAnnouncements();
  initReveal();
  setupNavbarScroll();
  setupMobileMenu();
});