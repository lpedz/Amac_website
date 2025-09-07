const chapters = [
    { 
        id: 'uae', name: "UAE Chapter", location: "UAE", region: "MEU", imageUrl: "images/uae.jpg",
        details: {
            history: "Established in the early 2000s by a group of pioneering MACE alumni involved in the UAE's infrastructure boom, our chapter has grown into one of the most active networks in the Middle East, fostering professional and personal connections.",
            gallery: ["https://picsum.photos/seed/uae1/400/300", "https://picsum.photos/seed/uae2/400/300", "https://picsum.photos/seed/uae3/400/300"],
            events: [
                { name: "Annual Alumni Gala 2025", date: "November 22, 2025", description: "An evening of celebration and networking at the Marina Hotel." },
                { name: "Tech Talk: AI in Engineering", date: "October 15, 2025", description: "A workshop on emerging AI trends with industry leaders." }
            ],
            social: { linkedin: "#", facebook: "#" }
        }
    },
    { 
        id: 'australia', name: "Australia Chapter", location: "Australia", region: "AP", imageUrl: "images/australia.jpg",
        details: {
            history: "Our chapter began with informal alumni meetups in Sydney in 2010. Officially recognized in 2014, it has since expanded to include members across Australia, with a strong focus on the tech and engineering sectors in Melbourne and Brisbane.",
            gallery: ["https://picsum.photos/seed/aus1/400/300", "https://picsum.photos/seed/aus2/400/300", "https://picsum.photos/seed/aus3/400/300"],
            events: [
                { name: "Sydney Harbour Alumni Cruise", date: "December 5, 2025", description: "A relaxing evening cruise with fellow alumni." },
                { name: "Melbourne Tech Innovators Meetup", date: "October 28, 2025", description: "Networking for alumni in the tech sector." }
            ],
            social: { linkedin: "#", facebook: "#" }
        }
    },
    { 
        id: 'usa', name: "USA Chapter", location: "USA", region: "NA", imageUrl: "images/usa.jpg",
        details: {
            history: "The USA Chapter was formally established in 2015 to unify several smaller, regional alumni groups. It now serves as a national platform for networking, mentorship, and supporting new graduates arriving in the United States.",
            gallery: ["https://picsum.photos/seed/usa1/400/300", "https://picsum.photos/seed/usa2/400/300", "https://picsum.photos/seed/usa3/400/300"],
            events: [
                { name: "National Innovation Summit (Virtual)", date: "November 10, 2025", description: "Showcasing alumni achievements in tech and business." }
            ],
            social: { linkedin: "#" }
        }
    },
    { 
        id: 'singapore', name: "Singapore Chapter", location: "Singapore", region: "AP", imageUrl: "images/singapore.webp",
        details: {
            history: "Founded in 2012, the Singapore chapter was created to cater to the growing number of MACE alumni in Southeast Asia's premier financial and tech hub. It has since become a vital resource for professional development in the region.",
            gallery: ["https://picsum.photos/seed/sg1/400/300", "https://picsum.photos/seed/sg2/400/300", "https://picsum.photos/seed/sg3/400/300"],
            events: [
                { name: "Financial Tech Forum", date: "November 18, 2025", description: "Exploring the future of finance with industry experts." }
            ],
            social: { linkedin: "#" }
        }
    },
    { 
        id: 'saudi', name: "Saudi Arabia Chapter", location: "Saudi Arabia", region: "MEU", imageUrl: "images/saudi.avif",
        details: {
            history: "Our chapter was formed in 2016 to align with the Kingdom's Vision 2030, creating a network for MACE engineers and professionals contributing to the nation's ambitious giga-projects and economic diversification.",
            gallery: ["https://picsum.photos/seed/sa1/400/300", "https://picsum.photos/seed/sa2/400/300"],
            events: [
                { name: "Riyadh Professional Networking Night", date: "October 20, 2025", description: "Connect with alumni in the capital." }
            ],
            social: { linkedin: "#" }
        }
    },
    { 
        id: 'kuwait', name: "Kuwait Chapter", location: "Kuwait", region: "MEU", imageUrl: "images/Kuwait.jpeg",
        details: {
            history: "As one of the oldest chapters in the Gulf, the Kuwait Chapter has been a cornerstone of the MACE community since the late 1990s. It has a rich tradition of mentorship, particularly in the oil and gas sector.",
            gallery: ["https://picsum.photos/seed/kw1/400/300", "https://picsum.photos/seed/kw2/400/300"],
            events: [
                { name: "Annual Family Day", date: "December 12, 2025", description: "A day of fun and networking for alumni and their families." }
            ],
            social: { facebook: "#" }
        }
    },
    { 
        id: 'qatar', name: "Qatar Chapter", location: "Qatar", region: "MEU", imageUrl: "images/qatar.jpg",
        details: {
            history: "The Qatar Chapter was established in the lead-up to the 2022 FIFA World Cup, a period of immense growth. Our members played key roles in developing the nation's infrastructure and continue to shape its future.",
            gallery: ["https://picsum.photos/seed/qa1/400/300", "https://picsum.photos/seed/qa2/400/300"],
            events: [
                { name: "Construction & Infrastructure Seminar", date: "November 5, 2025", description: "Insights into Qatar's mega-projects." }
            ],
            social: { linkedin: "#", facebook: "#" }
        }
    },
    { 
        id: 'oman', name: "Oman Chapter", location: "Oman", region: "MEU", imageUrl: "images/oman.jpg",
        details: {
            history: "Our chapter in the Sultanate of Oman was founded on the principles of community and heritage. Since 2011, we have focused on creating a supportive network that blends professional growth with cultural appreciation.",
            gallery: ["https://picsum.photos/seed/om1/400/300"],
            events: [
                { name: "Muscat Alumni Meet & Greet", date: "October 30, 2025", description: "A casual evening of networking." }
            ],
            social: {}
        }
    },
    { 
        id: 'chennai', name: "Chennai Chapter", location: "Chennai", region: "AP", imageUrl: "images/chennai.jpg",
        details: {
            history: "Launched in 2013, the Chennai chapter serves the large MACE alumni population in South India. It has strong ties to the local IT and automotive industries, providing a platform for knowledge sharing and career opportunities.",
            gallery: ["https://picsum.photos/seed/ch1/400/300", "https://picsum.photos/seed/ch2/400/300"],
            events: [
                { name: "IT Corridor Networking Event", date: "November 8, 2025", description: "Connecting MACE alumni in the tech field." }
            ],
            social: { linkedin: "#" }
        }
    },
    { 
        id: 'chicago', name: "Chicago Chapter", location: "USA", region: "NA", imageUrl: "images/chicago.jpg",
        details: {
            history: "The Chicago Chapter was established in 2018 as a hub for MACE alumni in the American Midwest. It focuses on connecting professionals in manufacturing, architecture, and finance through targeted events and seminars.",
            gallery: ["https://picsum.photos/seed/chi1/400/300"],
            events: [
                { name: "Midwest Industry Leaders Panel", date: "October 25, 2025", description: "A panel discussion with prominent alumni." }
            ],
            social: { linkedin: "#" }
        }
    },
    { 
        id: 'dc', name: "Washington DC Chapter", location: "USA", region: "NA", imageUrl: "images/washington.jpg",
        details: {
            history: "Our Washington DC chapter was formed in 2019 to cater to the growing number of alumni in public policy, federal agencies, and international organizations. It serves as a unique intersection of engineering and governance.",
            gallery: ["https://picsum.photos/seed/dc1/400/300", "https://picsum.photos/seed/dc2/400/300"],
            events: [
                { name: "Public Policy Forum", date: "November 15, 2025", description: "Discussing the role of engineers in policy-making." }
            ],
            social: { linkedin: "#" }
        }
    }
];

const presidents = [
    { chapter: "AMAC", name: "Mohan Joseph Cheeran", contact: "chairman@amac.org", position: "Chairman", phone: "+91-9876543210", imageUrl: "https://i.pravatar.cc/150?u=Mohan" },
    { chapter: "UAE Chapter", name: "Mathew Kavalam", contact: "uae@amac.org", position: "President", phone: "+971-501234567", imageUrl: "https://i.pravatar.cc/150?u=uae@amac.org" },
    { chapter: "Australia Chapter", name: "Xavi Joseph", contact: "australia@amac.org", position: "President", phone: "+61-401234567", imageUrl: "https://i.pravatar.cc/150?u=australia@amac.org" },
    { chapter: "USA Chapter", name: "Thomas Stephan", contact: "usa@amac.org", position: "President", phone: "+1-202-555-0149", imageUrl: "https://i.pravatar.cc/150?u=Thomas" },
    { chapter: "Singapore Chapter", name: "Shaja Mathews", contact: "singapore@amac.org", position: "President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=singapore@amac.org" },
    { chapter: "Saudi Arabia Chapter", name: "Johnson Samuel", contact: "saudi@amac.org", position: "President", phone: "+966-501234567", imageUrl: "https://i.pravatar.cc/150?u=saudi@amac.org" },
    { chapter: "UAE Chapter", name: "Siby Joseph", contact: "uae2@amac.org", position: "Vice President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=uae2@amac.org" },
    { chapter: "Kuwait Chapter", name: "Giju George", contact: "kuwait@amac.org", position: "President", phone: "+965-51234567", imageUrl: "https://i.pravatar.cc/150?u=kuwait@amac.org" },
    { chapter: "Kuwait Chapter", name: "Vinil KV", contact: "kuwait2@amac.org", position: "Vice President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=kuwait2@amac.org" },
    { chapter: "Qatar Chapter", name: "Baiju Madhavan", contact: "qatar@amac.org", position: "President", phone: "+974-55123456", imageUrl: "https://i.pravatar.cc/150?u=qatar@amac.org" },
    { chapter: "Qatar Chapter", name: "Sineesh", contact: "qatar2@amac.org", position: "Vice President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=qatar2@amac.org" },
    { chapter: "Oman Chapter", name: "Benny Joseph", contact: "oman@amac.org", position: "President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=oman@amac.org" },
    { chapter: "Chennai Chapter", name: "David Rajan", contact: "chennai@amac.org", position: "President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=chennai@amac.org" },
    { chapter: "Australia Chapter", name: "Dhanya", contact: "australia2@amac.org", position: "Vice President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=australia2@amac.org" },
    { chapter: "Chicago Chapter", name: "Lisha Johny", contact: "chicago@amac.org", position: "President", phone: "+1-312-555-0199", imageUrl: "https://i.pravatar.cc/150?u=chicago@amac.org" },
    { chapter: "Washington DC Chapter", name: "Rejive Joseph", contact: "dc@amac.org", position: "President", phone: "+1-202-555-0182", imageUrl: "https://i.pravatar.cc/150?u=dc@amac.org" }
];

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

    const chapterLeaders = presidents.filter(p => p.chapter === chapter.name);
    
    const leadersHtml = chapterLeaders.length > 0 
      ? `<ul>
          ${chapterLeaders.slice(0, 2).map(leader => `
            <li>
              <p class="leader-name">${leader.name}</p>
              <p class="leader-position">${leader.position}</p>
            </li>
          `).join('')}
         </ul>`
      : '<p class="text-sm text-gray-400">No leadership listed.</p>';
      
    const chapterCardHtml = `
      <div class="card reveal-up" data-chapter-id="${chapter.id}" data-reveal-delay="${idx * 50}">
        <img class="card-media" src="${chapter.imageUrl}" alt="${chapter.name}">
        <div class="p-6">
          <h4 class="text-lg">${chapter.name}</h4>
          <p class="mt-1 text-base">${chapter.location}</p>
        </div>
        <div class="card-overlay">
          <div class="card-overlay-content">
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

// --- MODAL LOGIC ---

function setupModal() {
  const modal = document.getElementById('leadership-modal');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalBackdrop = document.getElementById('modal-backdrop');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  
  if (!modal || !modalCloseBtn || !modalBackdrop || !modalTitle || !modalBody) {
    console.error('Modal elements not found!');
    return;
  }

  function openModal(chapterId) {
    const chapter = chapters.find(c => c.id === chapterId);
    if (!chapter || !chapter.details) return;
    
    const chapterLeaders = presidents.filter(p => p.chapter === chapter.name);
    
    modalTitle.textContent = chapter.name;
    modalBody.innerHTML = ''; // Clear previous content
    
    // Left Column
    const leftColumn = document.createElement('div');
    leftColumn.className = 'modal-left-column';

    // Use 'history' instead of 'welcomeMessage' and change the title
    if (chapter.details.history) {
        leftColumn.innerHTML += `<div class="modal-section"><h2>Our History</h2><p>${chapter.details.history}</p></div>`;
    }

    if (chapter.details.events && chapter.details.events.length > 0) {
      const eventsHtml = chapter.details.events.map(event => `
        <div class="modal-event">
          <p class="name">${event.name}<span>${event.date}</span></p>
          <p class="description">${event.description}</p>
        </div>
      `).join('');
      leftColumn.innerHTML += `<div class="modal-section"><h2>Upcoming Events</h2>${eventsHtml}</div>`;
    }

    if (chapter.details.social && (chapter.details.social.linkedin || chapter.details.social.facebook)) {
        const socialLinks = `
            ${chapter.details.social.linkedin ? '<a href="#" class="social-link">LinkedIn</a>' : ''}
            ${chapter.details.social.facebook ? '<a href="#" class="social-link">Facebook</a>' : ''}
        `;
        leftColumn.innerHTML += `<div class="modal-section"><h2>Connect</h2><div class="modal-social-links">${socialLinks}</div></div>`;
    }


    // Right Column
    const rightColumn = document.createElement('div');
    rightColumn.className = 'modal-right-column';

    if (chapter.details.gallery && chapter.details.gallery.length > 0) {
      const galleryHtml = chapter.details.gallery.map(imgUrl => `<img src="${imgUrl}" alt="Chapter event photo">`).join('');
      rightColumn.innerHTML += `<div class="modal-section"><h2>Gallery</h2><div class="modal-gallery">${galleryHtml}</div></div>`;
    }

    if (chapterLeaders.length > 0) {
      const leadersHtml = chapterLeaders.map(leader => {
        const phoneHtml = leader.phone ? `<a href="tel:${leader.phone}" class="contact-link">${leader.phone}</a>` : '';
        return `
          <div class="modal-leader-card">
            <img src="${leader.imageUrl}" alt="Profile of ${leader.name}">
            <div class="modal-leader-info">
              <p class="name">${leader.name}</p>
              <p class="position">${leader.position}</p>
              <div class="contact">
                <a href="mailto:${leader.contact}" class="contact-link">${leader.contact}</a>
                ${phoneHtml}
              </div>
            </div>
          </div>`;
      }).join('');
      rightColumn.innerHTML += `<div class="modal-section"><h2>Leadership</h2><div class="modal-leadership-grid">${leadersHtml}</div></div>`;
    } else {
        rightColumn.innerHTML += `<div class="modal-section"><h2>Leadership</h2><p>No leadership details available.</p></div>`;
    }

    modalBody.appendChild(leftColumn);
    modalBody.appendChild(rightColumn);

    document.body.classList.add('modal-open');
    modal.classList.remove('hidden');
  }

  function closeModal() {
    document.body.classList.remove('modal-open');
    modal.classList.add('hidden');
  }

  document.addEventListener('click', (e) => {
    const card = e.target.closest('.card[data-chapter-id]');
    if (card) {
      openModal(card.dataset.chapterId);
    }
  });

  modalCloseBtn.addEventListener('click', closeModal);
  modalBackdrop.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal();
    }
  });
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
  
window.addEventListener("DOMContentLoaded", () => {
  initSlideshow();
  renderChapters();
  renderAnnouncements();
  initReveal();
  setupNavbarScroll();
  setupMobileMenu();
  setupModal();
});