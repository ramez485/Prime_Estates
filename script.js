/* ========================================
   PRIME ESTATES - JavaScript
   Premium Real Estate Functionality
   ======================================== */

/* ============ PROPERTIES DATA ============ */
// <!-- مواقع تواصل https://www.tiktok.com/@ramez_programming?_r=1&_t=ZS-97Rjv8JS3zo -->
//  <!-- مواقع التواصل الاجتماعي الخاصة بي:t.me/Ramezsamy2011 -->
//   <!-- رقمي 01205648577 -->
const PROPERTIES = [
  {
    id: 1,
    title: "Beverly Hills Estate",
    type: "villa",
    price: 12500000,
    location: "beverly-hills",
    locationName: "Beverly Hills, California",
    bedrooms: 7,
    bathrooms: 9,
    area: 12500,
    badge: "Exclusive",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80"
  },
  {
    id: 2,
    title: "Manhattan Sky Penthouse",
    type: "penthouse",
    price: 8900000,
    location: "manhattan",
    locationName: "Manhattan, New York",
    bedrooms: 4,
    bathrooms: 5,
    area: 6800,
    badge: "Featured",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80"
  },
  {
    id: 3,
    title: "Malibu Oceanfront Villa",
    type: "beach",
    price: 15200000,
    location: "malibu",
    locationName: "Malibu, California",
    bedrooms: 6,
    bathrooms: 8,
    area: 9800,
    badge: "Premium",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
  },
  {
    id: 4,
    title: "Dubai Smart Residence",
    type: "smart",
    price: 6800000,
    location: "dubai",
    locationName: "Dubai, UAE",
    bedrooms: 5,
    bathrooms: 6,
    area: 8200,
    badge: "New",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80"
  },
  {
    id: 5,
    title: "Monaco Luxury Apartment",
    type: "apartment",
    price: 22000000,
    location: "monaco",
    locationName: "Monte Carlo, Monaco",
    bedrooms: 4,
    bathrooms: 5,
    area: 5400,
    badge: "Ultra Luxury",
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
  },
  {
    id: 6,
    title: "Santorini Cliff Villa",
    type: "villa",
    price: 4500000,
    location: "santorini",
    locationName: "Santorini, Greece",
    bedrooms: 5,
    bathrooms: 6,
    area: 6200,
    badge: "Sea View",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80"
  },
  {
    id: 7,
    title: "London Royal Penthouse",
    type: "penthouse",
    price: 18500000,
    location: "london",
    locationName: "Mayfair, London",
    bedrooms: 5,
    bathrooms: 6,
    area: 7400,
    badge: "Historic",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&q=80"
  },
  {
    id: 8,
    title: "Bali Tropical Retreat",
    type: "beach",
    price: 3200000,
    location: "bali",
    locationName: "Ubud, Bali",
    bedrooms: 4,
    bathrooms: 5,
    area: 5800,
    badge: "Eco Luxury",
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80"
  },
  {
    id: 9,
    title: "Singapore Smart Home",
    type: "smart",
    price: 9700000,
    location: "singapore",
    locationName: "Sentosa, Singapore",
    bedrooms: 5,
    bathrooms: 6,
    area: 7100,
    badge: "Tech Home",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80"
  },
  {
    id: 10,
    title: "Aspen Mountain Lodge",
    type: "villa",
    price: 11300000,
    location: "aspen",
    locationName: "Aspen, Colorado",
    bedrooms: 8,
    bathrooms: 10,
    area: 14200,
    badge: "Ski-In",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80"
  },
  {
    id: 11,
    title: "Parisian Luxury Apartment",
    type: "apartment",
    price: 14800000,
    location: "paris",
    locationName: "Champs-Élysées, Paris",
    bedrooms: 4,
    bathrooms: 4,
    area: 4800,
    badge: "Iconic",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80"
  },
  {
    id: 12,
    title: "Seychelles Beach House",
    type: "beach",
    price: 7600000,
    location: "seychelles",
    locationName: "Mahé, Seychelles",
    bedrooms: 6,
    bathrooms: 7,
    area: 8900,
    badge: "Private Island",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&q=80"
  }
];

/* ============ STATE ============ */
let favorites = new Set();
let currentFilters = {
  type: 'all',
  bedrooms: 'all',
  location: 'all',
  maxPrice: 25000000
};

/* ============ LOADER ============ */
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('loader').classList.add('hidden');
  }, 1500);
});

/* ============ NAVBAR SCROLL ============ */
const navbar = document.getElementById('navbar');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }

  if (window.scrollY > 400) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }

  updateActiveNavLink();
});

/* ============ ACTIVE NAV LINK ============ */
function updateActiveNavLink() {
  const sections = ['home', 'properties', 'featured', 'agents', 'testimonials', 'contact'];
  const navLinks = document.querySelectorAll('.nav-link');
  
  let current = 'home';
  sections.forEach(id => {
    const section = document.getElementById(id);
    if (section && window.scrollY >= section.offsetTop - 200) {
      current = id;
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

/* ============ MOBILE MENU ============ */
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

mobileToggle.addEventListener('click', () => {
  mobileToggle.classList.toggle('active');
  navMenu.classList.toggle('active');
  document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    mobileToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  });
});

/* ============ BACK TO TOP ============ */
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ============ FORMAT PRICE ============ */
function formatPrice(price) {
  if (price >= 1000000) {
    return '$' + (price / 1000000).toFixed(1) + 'M';
  }
  return '$' + price.toLocaleString();
}

/* ============ RENDER PROPERTIES ============ */
function renderProperties() {
  const grid = document.getElementById('propertiesGrid');
  const noResults = document.getElementById('noResults');

  const filtered = PROPERTIES.filter(p => {
    if (currentFilters.type !== 'all' && p.type !== currentFilters.type) return false;
    if (currentFilters.bedrooms !== 'all' && p.bedrooms < parseInt(currentFilters.bedrooms)) return false;
    if (currentFilters.location !== 'all' && p.location !== currentFilters.location) return false;
    if (p.price > currentFilters.maxPrice) return false;
    return true;
  });

  if (filtered.length === 0) {
    grid.style.display = 'none';
    noResults.classList.remove('hidden');
    return;
  }

  grid.style.display = 'grid';
  noResults.classList.add('hidden');

  grid.innerHTML = filtered.map((p, i) => `
    <div class="property-card reveal" style="transition-delay: ${i * 80}ms">
      <div class="property-image">
        <img src="${p.image}" alt="${p.title}" loading="lazy">
        <div class="property-badge">${p.badge}</div>
        <button class="property-favorite ${favorites.has(p.id) ? 'active' : ''}" data-id="${p.id}" aria-label="Add to favorites">
          <svg viewBox="0 0 24 24" fill="${favorites.has(p.id) ? 'currentColor' : 'none'}" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
        </button>
      </div>
      <div class="property-content">
        <div class="property-price">${formatPrice(p.price)}</div>
        <h3 class="property-title">${p.title}</h3>
        <div class="property-location">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span>${p.locationName}</span>
        </div>
        <div class="property-features">
          <div class="property-feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M3 7v11a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7"/>
              <path d="M21 10H3M7 14h.01M17 14h.01"/>
            </svg>
            <span><strong>${p.bedrooms}</strong> Beds</span>
          </div>
          <div class="property-feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M4 12h16a1 1 0 0 1 1 1v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3a1 1 0 0 1 1-1z"/>
              <path d="M6 12V5a2 2 0 0 1 2-2h3v2.25"/>
            </svg>
            <span><strong>${p.bathrooms}</strong> Baths</span>
          </div>
          <div class="property-feature">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <rect x="3" y="3" width="18" height="18" rx="2"/>
              <path d="M3 9h18M9 21V9"/>
            </svg>
            <span><strong>${p.area.toLocaleString()}</strong> sqft</span>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  attachFavoriteListeners();
  observeReveal();
}

/* ============ FAVORITES ============ */
function attachFavoriteListeners() {
  document.querySelectorAll('.property-favorite').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const id = parseInt(btn.dataset.id);
      if (favorites.has(id)) {
        favorites.delete(id);
        btn.classList.remove('active');
        btn.querySelector('svg').setAttribute('fill', 'none');
      } else {
        favorites.add(id);
        btn.classList.add('active');
        btn.querySelector('svg').setAttribute('fill', 'currentColor');
      }
    });
  });
}

/* ============ FILTERS ============ */
const filterType = document.getElementById('filterType');
const filterBedrooms = document.getElementById('filterBedrooms');
const filterLocation = document.getElementById('filterLocation');
const filterPrice = document.getElementById('filterPrice');
const priceValue = document.getElementById('priceValue');
const resetFilters = document.getElementById('resetFilters');
const resetNoResults = document.getElementById('resetNoResults');

filterType.addEventListener('change', (e) => {
  currentFilters.type = e.target.value;
  renderProperties();
});

filterBedrooms.addEventListener('change', (e) => {
  currentFilters.bedrooms = e.target.value;
  renderProperties();
});

filterLocation.addEventListener('change', (e) => {
  currentFilters.location = e.target.value;
  renderProperties();
});

filterPrice.addEventListener('input', (e) => {
  const value = parseInt(e.target.value);
  currentFilters.maxPrice = value;
  if (value >= 1000000) {
    priceValue.textContent = (value / 1000000).toFixed(0) + 'M';
  } else {
    priceValue.textContent = value.toLocaleString();
  }
  renderProperties();
});

function resetAllFilters() {
  currentFilters = {
    type: 'all',
    bedrooms: 'all',
    location: 'all',
    maxPrice: 25000000
  };
  filterType.value = 'all';
  filterBedrooms.value = 'all';
  filterLocation.value = 'all';
  filterPrice.value = 25000000;
  priceValue.textContent = '25M';
  renderProperties();
}

resetFilters.addEventListener('click', resetAllFilters);
resetNoResults.addEventListener('click', resetAllFilters);

/* ============ SCROLL REVEAL ============ */
let revealObserver;
function observeReveal() {
  if (revealObserver) revealObserver.disconnect();
  
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    revealObserver.observe(el);
  });
}

/* ============ COUNTER ANIMATION ============ */
function animateCounter(element) {
  const target = parseInt(element.dataset.target);
  const suffix = element.dataset.suffix || '';
  const duration = 2000;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(target * easeProgress);
    
    element.textContent = current.toLocaleString() + suffix;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = target.toLocaleString() + suffix;
    }
  }

  requestAnimationFrame(update);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      animateCounter(entry.target);
    }
  });
}, { threshold: 0.3 });

document.querySelectorAll('[data-target]').forEach(el => {
  counterObserver.observe(el);
});

/* ============ CONTACT FORM ============ */
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const btn = contactForm.querySelector('button[type="submit"]');
  const originalHTML = btn.innerHTML;
  
  btn.innerHTML = '<span>Sending...</span>';
  btn.disabled = true;
  
  setTimeout(() => {
    btn.innerHTML = '<span>✓ Message Sent!</span>';
    btn.style.background = '#10b981';
    
    setTimeout(() => {
      contactForm.reset();
      btn.innerHTML = originalHTML;
      btn.disabled = false;
      btn.style.background = '';
    }, 2500);
  }, 1500);
});

/* ============ SMOOTH SCROLL ============ */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href === '#' || href.length <= 1) return;
    
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = 100;
      const targetPosition = target.offsetTop - offset;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/* ============ PARALLAX EFFECT ON HERO ============ */
const heroBg = document.querySelector('.hero-bg');
if (heroBg) {
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    if (scrolled < window.innerHeight) {
      heroBg.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
  }, { passive: true });
}

/* ============ INIT ============ */
document.addEventListener('DOMContentLoaded', () => {
  renderProperties();
  observeReveal();
  updateActiveNavLink();
});

/* ============ KEYBOARD SHORTCUTS ============ */
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && navMenu.classList.contains('active')) {
    mobileToggle.classList.remove('active');
    navMenu.classList.remove('active');
    document.body.style.overflow = '';
  }
});
// <!-- مواقع تواصل https://www.tiktok.com/@ramez_programming?_r=1&_t=ZS-97Rjv8JS3zo -->
//  <!-- مواقع التواصل الاجتماعي الخاصة بي:t.me/Ramezsamy2011 -->
//   <!-- رقمي 01205648577 -->