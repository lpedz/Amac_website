// Background slideshow functionality
let currentSlide = 0;
const slides = ['slide1', 'slide2', 'slide3'];
const slideInterval = 4000; // 4 seconds per slide

function initSlideshow() {
  // Start the slideshow
  setInterval(changeSlide, slideInterval);
}

function changeSlide() {
  // Hide current slide
  const currentSlideElement = document.getElementById(slides[currentSlide]);
  if (currentSlideElement) {
    currentSlideElement.style.opacity = '0';
  }
  
  // Move to next slide
  currentSlide = (currentSlide + 1) % slides.length;
  
  // Show next slide
  const nextSlideElement = document.getElementById(slides[currentSlide]);
  if (nextSlideElement) {
    nextSlideElement.style.opacity = '1';
  }
}

// AMAC current chapters data
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
  { id: 'chicago', name: "Chicago Chapter", location: "Chicago", imageUrl: "images/chicago.jpg", description: "Chicago Chapter connects alumni in the Midwest with professional development opportunities." },
  { id: 'dc', name: "Washington DC Chapter", location: "Washington DC", imageUrl: "images/washington.jpg", description: "Washington DC Chapter focuses on policy, government relations, and public sector networking." }
];

const presidents = [
  { chapter: "AMAC", name: "Mohan Joseph Cheeran", contact: "chairman@amac.org", position: "Chairman" },
  { chapter: "UAE Chapter", name: "Mathew Kavalam", contact: "uae@amac.org", position: "President" },
  { chapter: "Australia Chapter", name: "Xavi Joseph", contact: "australia@amac.org", position: "President" },
  { chapter: "USA Chapter", name: "Thomas Stephan", contact: "usa@amac.org", position: "President" },
  { chapter: "AMAC", name: "Jacob Zachariah", contact: "secretary@amac.org", position: "General Secretary" },
  { chapter: "BALI", name: "John Emmanuel", contact: "bali@amac.org", position: "Convener" },
  { chapter: "Singapore Chapter", name: "Shaja Mathews", contact: "singapore@amac.org", position: "President" },
  { chapter: "MACE", name: "Bos Mathew", contact: "principal@mace.ac.in", position: "Principal" },
  { chapter: "Parent Alumni", name: "Jiss Paul", contact: "parent@amac.org", position: "Representative" },
  { chapter: "Parent Alumni", name: "Brijesh", contact: "parent2@amac.org", position: "Representative" },
  { chapter: "Saudi Arabia Chapter", name: "Johnson Samuel", contact: "saudi@amac.org", position: "President" },
  { chapter: "UAE Chapter", name: "Siby Joseph", contact: "uae2@amac.org", position: "Vice President" },
  { chapter: "Kuwait Chapter", name: "Giju George", contact: "kuwait@amac.org", position: "President" },
  { chapter: "Kuwait Chapter", name: "Vinil KV", contact: "kuwait2@amac.org", position: "Vice President" },
  { chapter: "Qatar Chapter", name: "Baiju Madhavan", contact: "qatar@amac.org", position: "President" },
  { chapter: "Qatar Chapter", name: "Sineesh", contact: "qatar2@amac.org", position: "Vice President" },
  { chapter: "Oman Chapter", name: "Benny Joseph", contact: "oman@amac.org", position: "President" },
  { chapter: "Chennai Chapter", name: "David Rajan", contact: "chennai@amac.org", position: "President" },
  { chapter: "Australia Chapter", name: "Dhanya", contact: "australia2@amac.org", position: "Vice President" },
  { chapter: "Australia Chapter", name: "George Jacob", contact: "australia3@amac.org", position: "Secretary" },
  { chapter: "Australia Chapter", name: "Neethi", contact: "australia4@amac.org", position: "Treasurer" },
  { chapter: "Chicago Chapter", name: "Lisha Johny", contact: "chicago@amac.org", position: "President" },
  { chapter: "Washington DC Chapter", name: "Rejive Joseph", contact: "dc@amac.org", position: "President" }
];


// Hardcoded announcements
const hardcodedAnnouncements = [
  {
    title: "Welcome to AMAC 2025",
    author: "AMAC Board",
    body: "We're excited to welcome all alumni to another year of networking, mentorship, and community building. Stay tuned for upcoming events and initiatives.",
    createdAt: new Date('2025-01-15').getTime()
  },
  {
    title: "Annual Alumni Meet 2025",
    author: "Event Committee",
    body: "Save the date! Our annual alumni meet will be held on March 15th, 2025. More details and registration information will be shared soon.",
    createdAt: new Date('2025-01-10').getTime()
  },
  {
    title: "New Chapter Launch - Mumbai",
    author: "AMAC Leadership",
    body: "We're thrilled to announce the launch of our Mumbai Chapter. Alumni in the Mumbai area can now connect and participate in local events.",
    createdAt: new Date('2025-01-05').getTime()
  }
];

function animateCountUp(el, toValue, durationMs) {
  if (!el) return;
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) { el.textContent = String(toValue); return; }
  let start;
  const fromValue = 0;
  const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);
  function step(ts) {
    if (!start) start = ts;
    const elapsed = ts - start;
    const t = Math.min(1, elapsed / durationMs);
    const eased = easeOutCubic(t);
    const val = Math.round(fromValue + (toValue - fromValue) * eased);
    el.textContent = String(val);
    if (t < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function renderChapters() {
  const list = document.getElementById("chaptersList");
  const countEl = document.getElementById("chapterCount");
  if (!list || !countEl) return;
  countEl.textContent = chapters.length.toString();
  list.innerHTML = chapters.map((ch, idx) => `
    <div class="card reveal-up cursor-pointer" data-reveal-delay="${idx * 60}" data-chapter-id="${ch.id}">
      <img class="card-media" src="${ch.imageUrl}" alt="${ch.name}">
      <div class="p-4">
        <h4 class="text-lg">${ch.name}</h4>
        <p class="text-sm mt-1">${ch.location}</p>
      </div>
    </div>
  `).join("");
  // Count-up animation
  animateCountUp(countEl, chapters.length, 1000);
  // Click handlers
  list.querySelectorAll('[data-chapter-id]').forEach(card => {
    card.addEventListener('click', () => {
      const id = card.getAttribute('data-chapter-id');
      window.location.href = `chapter.html?id=${encodeURIComponent(id)}`;
    });
  });
}

function renderPresidents() {
  const list = document.getElementById("presidentsList");
  if (!list) return;
  list.innerHTML = presidents.map((p, idx) => `
    <div class="card p-4 reveal-up" data-reveal-delay="${idx * 60}">
      <h4 class="text-lg">${p.name}</h4>
      <p class="text-sm mt-1 font-semibold text-blue-600">${p.position}</p>
      <p class="text-sm mt-1">${p.chapter}</p>
      <p class="text-sm text-gray-500">${p.contact}</p>
    </div>
  `).join("");
}

function formatDate(ts) {
  const d = new Date(ts);
  return d.toLocaleString();
}

function renderAnnouncements() {
  const list = document.getElementById("announcementsList");
  if (!list) return;
  list.innerHTML = hardcodedAnnouncements.map((a, idx) => `
    <li class="card p-4 reveal-up" data-reveal-delay="${idx * 60}">
      <div class="flex items-center justify-between">
        <h4 class="text-lg">${a.title}</h4>
        <span class="text-xs text-gray-500">${formatDate(a.createdAt)}</span>
      </div>
      <p class="text-sm text-gray-600 mt-1">By ${a.author}</p>
      <p class="mt-2">${a.body}</p>
    </li>
  `).join("");
}


// On-scroll reveal animations with variants and delays
let revealObserver;
function initReveal() {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const selectors = ['.reveal', '.reveal-up', '.reveal-left', '.reveal-right', '.reveal-zoom'];
  const all = document.querySelectorAll(selectors.join(','));
  if (prefersReduced) {
    all.forEach(el => el.classList.add('visible'));
    return;
  }
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const delay = parseInt(el.getAttribute('data-reveal-delay') || '0', 10);
        if (delay) {
          el.style.transitionDelay = `${delay}ms`;
        }
        el.classList.add('visible');
        revealObserver.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -10% 0px' });
  all.forEach(el => revealObserver.observe(el));
}
function triggerReveal() {
  if (!revealObserver) return;
  const selectors = ['.reveal', '.reveal-up', '.reveal-left', '.reveal-right', '.reveal-zoom'];
  document.querySelectorAll(selectors.join(',')).forEach(el => {
    if (!el.classList.contains('visible')) revealObserver.observe(el);
  });
}

// Navbar scroll interactions
function setupNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 10) navbar.classList.add('scrolled'); else navbar.classList.remove('scrolled');
  }, { passive: true });
}


// Chapter detail page renderer
function renderChapterDetail() {
  const container = document.getElementById('chapterDetail');
  if (!container) return;
  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const chapter = chapters.find(c => c.id === id);
  if (!chapter) { container.innerHTML = '<p>Chapter not found.</p>'; return; }
  container.innerHTML = `
    <div class="max-w-4xl mx-auto px-4 py-10">
      <a href="index.html#chapters" class="text-blue-700 underline">← Back to Chapters</a>
      <div class="mt-6 card">
        <img class="card-media" src="${chapter.imageUrl}" alt="${chapter.name}">
        <div class="p-6">
          <h2 class="text-2xl font-bold">${chapter.name}</h2>
          <p class="mt-2 text-gray-600">Location: ${chapter.location}</p>
          <p class="mt-4">${chapter.description}</p>
        </div>
      </div>
    </div>
  `;
}

window.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  renderChapters();
  renderPresidents();
  renderAnnouncements();
  initReveal();
  setupNavbarScroll();
  renderChapterDetail();
});
