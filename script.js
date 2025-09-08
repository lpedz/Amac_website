const chapters = [
    { 
        id: 'uae', name: "UAE Chapter", location: "UAE", region: "MEU", imageUrl: "images/uae.jpg",
        details: {
            history: "Established in the early 2000s by a group of pioneering MACE alumni involved in the UAE's infrastructure boom, our chapter has grown into one of the most active networks in the Middle East, fostering professional and personal connections.",
            gallery: ["https://picsum.photos/seed/uae1/400/300", "https://picsum.photos/seed/uae2/400/300", "https://picsum.photos/seed/uae3/400/300"],
        }
    },
    { 
        id: 'saudi', name: "Saudi Arabia Chapter", location: "Saudi Arabia", region: "MEU", imageUrl: "images/saudi.avif",
        details: {
            history: "Our chapter was formed in 2016 to align with the Kingdom's Vision 2030, creating a network for MACE engineers and professionals contributing to the nation's ambitious giga-projects and economic diversification.",
            gallery: ["https://picsum.photos/seed/sa1/400/300", "https://picsum.photos/seed/sa2/400/300"],
        }
    },
    { 
        id: 'kuwait', name: "Kuwait Chapter", location: "Kuwait", region: "MEU", imageUrl: "images/Kuwait.jpeg",
        details: {
            history: "As one of the oldest chapters in the Gulf, the Kuwait Chapter has been a cornerstone of the MACE community since the late 1990s. It has a rich tradition of mentorship, particularly in the oil and gas sector.",
            gallery: ["https://picsum.photos/seed/kw1/400/300", "https://picsum.photos/seed/kw2/400/300"],
        }
    },
    { 
        id: 'qatar', name: "Qatar Chapter", location: "Qatar", region: "MEU", imageUrl: "images/qatar.jpg",
        details: {
            history: "The Qatar Chapter was established in the lead-up to the 2022 FIFA World Cup, a period of immense growth. Our members played key roles in developing the nation's infrastructure and continue to shape its future.",
            gallery: ["https://picsum.photos/seed/qa1/400/300", "https://picsum.photos/seed/qa2/400/300"],
        }
    },
    { 
        id: 'oman', name: "Oman Chapter", location: "Oman", region: "MEU", imageUrl: "images/oman.jpg",
        details: {
            history: "Our chapter in the Sultanate of Oman was founded on the principles of community and heritage. Since 2011, we have focused on creating a supportive network that blends professional growth with cultural appreciation.",
            gallery: ["https://picsum.photos/seed/om1/400/300"],
        }
    },
    { 
        id: 'chicago', name: "Mid West Chapter", location: "Chicago,USA", region: "NA", imageUrl: "images/chicago.jpg",
        details: {
            history: "The Chicago Chapter was established in 2018 as a hub for MACE alumni in the American Midwest. It focuses on connecting professionals in manufacturing, architecture, and finance through targeted events and seminars.",
            gallery: ["https://picsum.photos/seed/chi1/400/300"],
        }
    },
    { 
        id: 'dc', name: "Washington DC Chapter", location: "USA", region: "NA", imageUrl: "images/washington.jpg",
        details: {
            history: "Our Washington DC chapter was formed in 2019 to cater to the growing number of alumni in public policy, federal agencies, and international organizations. It serves as a unique intersection of engineering and governance.",
            gallery: ["https://picsum.photos/seed/dc1/400/300", "https://picsum.photos/seed/dc2/400/300"],
        }
    },
    { 
        id: 'seattle', name: "Seattle Chapter", location: "USA", region: "NA", imageUrl: "https://picsum.photos/seed/seattle/400/300",
        details: {
            history: "Launched in 2020, our Seattle chapter brings together alumni in the Pacific Northwest's thriving tech and aerospace industries. We foster a community of innovation and collaboration.",
            gallery: ["https://picsum.photos/seed/sea1/400/300", "https://picsum.photos/seed/sea2/400/300"],
        }
    },
    { 
        id: 'siliconvalley', name: "Silicon Valley Chapter", location: "San Francisco, USA", region: "NA", imageUrl: "https://picsum.photos/seed/sf/400/300",
        details: {
            history: "The Silicon Valley chapter is at the heart of global innovation. Formed in 2019, it connects MACE alumni in leading tech companies, startups, and venture capital firms.",
            gallery: ["https://picsum.photos/seed/sf1/400/300", "https://picsum.photos/seed/sf2/400/300"],
        }
    },
    { 
        id: 'atlanta', name: "Atlanta Chapter", location: "USA", region: "NA", imageUrl: "https://picsum.photos/seed/atlanta/400/300",
        details: {
            history: "Our Atlanta chapter serves the growing community of alumni in the southeastern United States. It focuses on logistics, manufacturing, and the burgeoning film technology industry.",
            gallery: ["https://picsum.photos/seed/atl1/400/300"],
        }
    },
    { 
        id: 'delaware', name: "Delaware Chapter", location: "USA", region: "NA", imageUrl: "https://picsum.photos/seed/delaware/400/300",
        details: {
            history: "Established to support alumni in the financial and chemical engineering sectors, the Delaware chapter provides a valuable network in the mid-Atlantic region.",
            gallery: ["https://picsum.photos/seed/de1/400/300"],
        }
    },
    { 
        id: 'houston', name: "Houston Chapter", location: "USA", region: "NA", imageUrl: "https://picsum.photos/seed/houston/400/300",
        details: {
            history: "The Houston chapter is a hub for our alumni in the energy sector. Since its inception, it has connected professionals in oil, gas, and renewable energy, as well as the aerospace industry.",
            gallery: ["https://picsum.photos/seed/hou1/400/300", "https://picsum.photos/seed/hou2/400/300"],
        }
    },
    { 
        id: 'toronto', name: "Toronto Chapter", location: "Canada", region: "NA", imageUrl: "https://picsum.photos/seed/toronto/400/300",
        details: {
            history: "Our first chapter in Canada, the Toronto chapter, unites alumni across the Greater Toronto Area. It focuses on finance, real estate, and technology, reflecting the city's diverse economy.",
            gallery: ["https://picsum.photos/seed/tor1/400/300"],
        }
    },
    { 
        id: 'bahrain', name: "Bahrain Chapter", location: "Bahrain", region: "MEU", imageUrl: "https://picsum.photos/seed/bahrain/400/300",
        details: {
            history: "The Bahrain chapter, one of our earliest in the Gulf, has a long history of connecting alumni in the banking and finance sectors. It hosts regular events to foster community and professional growth.",
            gallery: ["https://picsum.photos/seed/bah1/400/300"],
        }
    },
    { 
        id: 'uk', name: "UK Chapter", location: "United Kingdom", region: "MEU", imageUrl: "https://picsum.photos/seed/uk/400/300",
        details: {
            history: "The UK chapter connects alumni across England, Scotland, Wales, and Northern Ireland. It has strong ties to London's financial district and the UK's rich engineering heritage.",
            gallery: ["https://picsum.photos/seed/uk1/400/300", "https://picsum.photos/seed/uk2/400/300"],
        }
    },
    // --- REORDERED ASIA PACIFIC CHAPTERS ---
    { 
        id: 'sydney', name: "OZ MACE Sydney", location: "Australia", region: "AP", imageUrl: "https://picsum.photos/seed/sydney/400/300",
        details: {
            history: "As a major hub for finance and professional services in Australia, the Sydney chapter connects alumni in the heart of the city's bustling business district.",
            gallery: ["https://picsum.photos/seed/syd1/400/300"],
        }
    },
    { 
        id: 'melbourne', name: "OZ MACE Melbourne", location: "Australia", region: "AP", imageUrl: "https://picsum.photos/seed/melbourne/400/300",
        details: {
            history: "Focusing on Melbourne's vibrant arts, sports, and tech scenes, this chapter provides a network for alumni in Victoria. It's known for its creative and social events.",
            gallery: ["https://picsum.photos/seed/mel1/400/300"],
        }
    },
    { 
        id: 'brisbane', name: "OZMACE Brisbane", location: "Australia", region: "AP", imageUrl: "https://picsum.photos/seed/brisbane/400/300",
        details: {
            history: "The Brisbane chapter supports alumni in Queensland, focusing on the region's strengths in construction, resources, and tourism. It provides a key network on Australia's east coast.",
            gallery: ["https://picsum.photos/seed/bris1/400/300"],
        }
    },
    { 
        id: 'singapore', name: "Singapore Chapter", location: "Singapore", region: "AP", imageUrl: "images/singapore.webp",
        details: {
            history: "Founded in 2012, the Singapore chapter was created to cater to the growing number of MACE alumni in Southeast Asia's premier financial and tech hub. It has since become a vital resource for professional development in the region.",
            gallery: ["https://picsum.photos/seed/sg1/400/300", "https://picsum.photos/seed/sg2/400/300", "https://picsum.photos/seed/sg3/400/300"],
        }
    },
    { 
        id: 'chennai', name: "Chennai Chapter", location: "Chennai, India", region: "AP", imageUrl: "images/chennai.jpg",
        details: {
            history: "Launched in 2013, the Chennai chapter serves the large MACE alumni population in South India. It has strong ties to the local IT and automotive industries, providing a platform for knowledge sharing and career opportunities.",
            gallery: ["https://picsum.photos/seed/ch1/400/300", "https://picsum.photos/seed/ch2/400/300"],
        }
    },
    { 
        id: 'perth', name: "OZ MACE Perth", location: "Australia", region: "AP", imageUrl: "https://picsum.photos/seed/perth/400/300",
        details: {
            history: "The Perth chapter is dedicated to alumni in Western Australia, with a strong link to the region's booming mining and resources industries. It provides critical support for engineers in the sector.",
            gallery: ["https://picsum.photos/seed/per1/400/300"],
        }
    }
];

const presidents = [
    { chapter: "AMAC", name: "Mohan Joseph Cheeran", contact: "chairman@amac.org", position: "Chairman", phone: "+91-9876543210", imageUrl: "images/People/MohanJoseph.jpeg" },
    { chapter: "UAE Chapter", name: "Mathew Kavalam", contact: "uae@amac.org", position: "President", phone: "+971-501234567", imageUrl: "https://i.pravatar.cc/150?u=uae@amac.org" },
    { chapter: "OZ MACE Melbourne", name: "Xavi Joseph", contact: "melbourne@amac.org", position: "President", phone: "+61-401234567", imageUrl: "images/People/xavi.jpeg" },
    { chapter: "Singapore Chapter", name: "Shaja Mathews", contact: "singapore@amac.org", position: "President", phone: null, imageUrl: "images/People/ShajahMathew.jpeg" },
    { chapter: "Saudi Arabia Chapter", name: "Johnson Samuel", contact: "saudi@amac.org", position: "President", phone: "+966-501234567", imageUrl: "images/People/Johnson%20Samuel%20.jpeg" },
    { chapter: "UAE Chapter", name: "Siby Joseph", contact: "uae2@amac.org", position: "Vice President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=uae2@amac.org" },
    { chapter: "Kuwait Chapter", name: "Giju George", contact: "kuwait@amac.org", position: "President", phone: "+965-51234567", imageUrl: "https://i.pravatar.cc/150?u=kuwait@amac.org" },
    { chapter: "Kuwait Chapter", name: "Vinil KV", contact: "kuwait2@amac.org", position: "Vice President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=kuwait2@amac.org" },
    { chapter: "Qatar Chapter", name: "Baiju Madhavan", contact: "qatar@amac.org", position: "President", phone: "+974-55123456", imageUrl: "https://i.pravatar.cc/150?u=qatar@amac.org" },
    { chapter: "Qatar Chapter", name: "Sineesh", contact: "qatar2@amac.org", position: "Vice President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=qatar2@amac.org" },
    { chapter: "Oman Chapter", name: "Benny Joseph", contact: "oman@amac.org", position: "President", phone: null, imageUrl: "https://i.pravatar.cc/150?u=oman@amac.org" },
    { chapter: "Chennai Chapter", name: "David Rajan", contact: "chennai@amac.org", position: "President", phone: null, imageUrl: "images/People/Rajan%20David.jpeg" },
    { chapter: "Chicago Chapter", name: "Lisha Johny", contact: "chicago@amac.org", position: "President", phone: "+1-312-555-0199", imageUrl: "https://i.pravatar.cc/150?u=chicago@amac.org" },
    { chapter: "Washington DC Chapter", name: "Rejive Joseph", contact: "dc@amac.org", position: "President", phone: "+1-202-555-0182", imageUrl: "images/People/RejiveJoseph.jpeg" }
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
  const lightboxCloseBtn = lightbox.querySelector('.lightbox-close-btn');

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
      const galleryHtml = chapter.details.gallery.map(imgUrl => `<img src="${imgUrl}" alt="Chapter event photo">`).join('');
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

  function openLightbox(src) {
      lightboxImg.src = src;
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
    
    if (modalContainer.classList.contains('is-open') && e.target.closest('.modal-gallery img')) {
        openLightbox(e.target.closest('.modal-gallery img').src);
    }
  });

  modalCloseBtn.addEventListener('click', closeModal);
  lightboxCloseBtn.addEventListener('click', closeLightbox);
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