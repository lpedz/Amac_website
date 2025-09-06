
const chapters = [
    { id: 'uae', name: "UAE Chapter", location: "UAE", imageUrl: "images/uae.jpg", description: "UAE Chapter connects alumni across the Emirates with networking and professional development opportunities." },
    { id: 'australia', name: "Australia Chapter", location: "Australia", imageUrl: "images/australia.jpg", description: "Australia Chapter supports alumni in Australia with career development and community building initiatives." },
    { id: 'usa', name: "USA Chapter", location: "USA", imageUrl: "images/usa.jpg", description: "USA Chapter focuses on scholarships, innovation forums, and regional networking across America." },
    { id: 'singapore', name: "Singapore Chapter", location: "Singapore", imageUrl: "images/singapore.webp", description: "Singapore Chapter facilitates business networking and professional growth in Southeast Asia." },
    { id: 'saudi', name: "Saudi Arabia Chapter", location: "Saudi Arabia", imageUrl: "images/saudi.avif", description: "Saudi Arabia Chapter connects alumni in the Kingdom with career opportunities and community events." },
    { id: 'kuwait', name: "Kuwait Chapter", location: "Kuwait", imageUrl: "images/Kuwait.jpeg", description: "Kuwait Chapter organizes professional development and cultural exchange programs." },
    { id: 'qatar', name: "Qatar Chapter", location: "Qatar", imageUrl: "images/qatar.jpg", description: "Qatar Chapter supports alumni with networking events and career advancement opportunities." },
    { id: 'oman', name: "Oman Chapter", location: "Oman", imageUrl: "images/oman.jpg", description: "Oman Chapter facilitates professional connections and community engagement in the Sultanate." },
    { id: 'chennai', name: "Chennai Chapter", location: "Chennai", imageUrl: "images/chennai.jpg", description: "Chennai Chapter supports community outreach and alumni meetups in South India." },
    { id: 'chicago', name: "Chicago Chapter", location: "USA", imageUrl: "images/chicago.jpg", description: "Chicago Chapter connects alumni in the Midwest with professional development opportunities." },
    { id: 'dc', name: "Washington DC Chapter", location: "USA", imageUrl: "images/washington.jpg", description: "Washington DC Chapter focuses on policy, government relations, and public sector networking." }
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
  const list = document.getElementById("chaptersList");
  if (!list) return;
  list.innerHTML = chapters.map((ch, idx) => `
    <div class="card reveal-up" data-reveal-delay="${idx * 50}">
      <img class="card-media" src="${ch.imageUrl}" alt="${ch.name}">
      <div class="p-6">
        <h4 class="text-lg">${ch.name}</h4>
        <p class="mt-1 text-base">${ch.location}</p>
      </div>
    </div>
  `).join("");
}

function renderPresidents() {
  const list = document.getElementById("presidentsList");
  if (!list) return;
  const visibleCount = 6;
  list.innerHTML = presidents.map((p, idx) => {
    const isHidden = idx >= visibleCount ? 'hidden extra-president-card' : '';
    return `
      <div class="reveal-up ${isHidden}" data-reveal-delay="${idx * 50}">
        <div class="flex items-center gap-x-6">
          <img class="h-16 w-16 rounded-full" src="${p.imageUrl}" alt="Profile of ${p.name}">
          <div>
            <h3 class="text-base font-semibold leading-7 tracking-tight text-white">${p.name}</h3>
            <p class="text-sm font-semibold leading-6 text-blue-400">${p.position} - ${p.chapter}</p>
            <a href="mailto:${p.contact}" class="mt-1 inline-flex items-center gap-x-2 text-sm leading-6 text-gray-400 hover:text-white transition-colors">
              <svg class="h-4 w-4 text-gray-500" fill="currentColor" viewBox="0 0 20 20"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" /><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" /></svg>
              ${p.contact}
            </a>
          </div>
        </div>
      </div>`;
  }).join('');

  const toggleContainer = document.getElementById('presidents-toggle-container');
  if (toggleContainer && presidents.length > visibleCount) {
    toggleContainer.innerHTML = `<button id="show-more-presidents" class="font-semibold text-sm text-white leading-6 hover:underline">Show all leaders <span aria-hidden="true">→</span></button>`;
  }
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

function setupShowMorePresidents() {
  const toggleButton = document.getElementById('show-more-presidents');
  if (!toggleButton) return;
  let isShowingAll = false;
  toggleButton.addEventListener('click', () => {
    isShowingAll = !isShowingAll;
    const extraCards = document.querySelectorAll('.extra-president-card');
    extraCards.forEach(card => {
      card.classList.toggle('hidden');
    });
    toggleButton.innerHTML = isShowingAll 
        ? `Show fewer leaders <span aria-hidden="true">←</span>` 
        : `Show all leaders <span aria-hidden="true">→</span>`;
  });
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
  renderPresidents();
  renderAnnouncements();
  initReveal();
  setupNavbarScroll();
  setupMobileMenu();
  setupShowMorePresidents();
});