/* ==========================================================================
   PropNext Core Frontend Application Logic
   ========================================================================== */

// 1. Core Mock Data
const PROPERTIES = [
  {
    id: "prop-1",
    title: "Aethera Obsidian Villa",
    type: "Villa",
    price: 4890000,
    location: "Switzerland Alps",
    beds: 5,
    baths: 6,
    size: 6400,
    irr: 11.8,
    image: "assets/hero_villa.png",
    description: "Nestled in the majestic Swiss Alps, Aethera Obsidian Villa is a marvel of futuristic architecture. Featuring floor-to-ceiling thermal glass walls, an indoor-outdoor heated infinity pool, and a subterranean wine cellar carved directly into natural stone. Optimized for off-grid operations with integrated solar shingles and Tesla Powerwalls.",
    tags: ["Alpine", "Infinity Pool", "Off-Grid Solar", "Smart Automation"],
    amenities: ["Integrated Smart Home", "Carved Wine Cellar", "Thermal Glass Façade", "Tesla Powerwall Backup", "Heated Spa Pool", "Private Helipad Access"],
    agent: {
      name: "Alexander Sterling",
      role: "Luxury Residential Director",
      initials: "AS",
      rating: 4.9,
      sales: 42,
      phone: "+41 22 555 0192"
    }
  },
  {
    id: "prop-2",
    title: "Elysian Skyline Penthouse",
    type: "Penthouse",
    price: 3200000,
    location: "Manhattan, NY",
    beds: 3,
    baths: 3.5,
    size: 3800,
    irr: 9.4,
    image: "assets/city_penthouse.png",
    description: "Soaring high above Central Park, the Elysian Penthouse features panoramic 360-degree views of the Manhattan skyline. Highlights include an expansive wrap-around deck, custom Italian marble kitchen countertops, sub-zero refrigeration, smart soundscaping, and a secure biometric entry elevator directly into your private foyer.",
    tags: ["Metropolitan", "High Rise", "Private Foyer", "marble Tops"],
    amenities: ["360° Wrap Deck", "Biometric Elevator", "Sub-Zero Chef Kitchen", "Smart Soundscape System", "Private Gym", "24/7 White-Glove Concierge"],
    agent: {
      name: "Sophia Vance",
      role: "Metropolitan Acquisitions Manager",
      initials: "SV",
      rating: 4.8,
      sales: 68,
      phone: "+1 212 555 0148"
    }
  },
  {
    id: "prop-3",
    title: "Zephyr Eco Forest Lodge",
    type: "Suburban",
    price: 1850000,
    location: "Portland, OR",
    beds: 4,
    baths: 4,
    size: 4200,
    irr: 10.2,
    image: "assets/forest_estate.png",
    description: "An eco-conscious woodland estate designed to integrate with the environment. Constructed with carbon-neutral cross-laminated cedar wood. Includes a passive HVAC geothermal system, automated rainwater harvesting tanks, dual EV superchargers, and a central open-air atrium featuring indigenous flora.",
    tags: ["Eco-Tech", "Woodland", "Carbon Neutral", "Atrium"],
    amenities: ["Geothermal HVAC", "Rainwater Harvesting", "Dual EV Chargers", "Open-Air Indoor Atrium", "Smart Irrigation System", "Timber Architecture"],
    agent: {
      name: "Marcus Mercer",
      role: "Sustainable Development Lead",
      initials: "MM",
      rating: 4.7,
      sales: 31,
      phone: "+1 503 555 0122"
    }
  },
  {
    id: "prop-4",
    title: "Aura Industrial Loft",
    type: "Loft",
    price: 1250000,
    location: "Brooklyn, NY",
    beds: 2,
    baths: 2,
    size: 2400,
    irr: 8.5,
    image: "assets/urban_loft.png",
    description: "Located in a historical converted brick warehouse, this loft combines vintage industrial vibes with ultra-modern design. Showcases high exposed-beam ceilings, authentic exposed brickwork, custom steel framing, a wood-burning hearth, and smart ambient lighting zones.",
    tags: ["Converted Warehouse", "Exposed Brick", "Vintage Industrial", "Hearth"],
    amenities: ["Exposed Timber Beams", "Wood-Burning Hearth", "Smart Lighting Zones", "Polished Concrete Floors", "Private Storage Loft", "Rooftop Community Gardens"],
    agent: {
      name: "Sophia Vance",
      role: "Metropolitan Acquisitions Manager",
      initials: "SV",
      rating: 4.8,
      sales: 68,
      phone: "+1 212 555 0148"
    }
  },
  {
    id: "prop-5",
    title: "Solis Shoreline Villa",
    type: "Villa",
    price: 5400000,
    location: "Miami, FL",
    beds: 6,
    baths: 7,
    size: 7800,
    irr: 12.4,
    image: "assets/hero_villa.png",
    description: "A spectacular waterfront property boasting 100 feet of private white sand beach. Designed with floor-to-ceiling hurricane-rated glass pane windows, a yacht-ready deep water dock, custom outdoor kitchen, rooftop skydeck with jacuzzi, and smart security sensors with automated shutter arrays.",
    tags: ["Ocean Front", "Yacht Dock", "Rooftop Skydeck", "Hurricane Glass"],
    amenities: ["Private Sand Beach", "Yacht Docking Slip", "Rooftop Jacuzzi", "Hurricane Automated Shutters", "Custom Outdoor Kitchen", "Glass Elevators"],
    agent: {
      name: "Alexander Sterling",
      role: "Luxury Residential Director",
      initials: "AS",
      rating: 4.9,
      sales: 42,
      phone: "+41 22 555 0192"
    }
  },
  {
    id: "prop-6",
    title: "Nova Horizon Penthouse",
    type: "Penthouse",
    price: 2450000,
    location: "Tokyo, Japan",
    beds: 2,
    baths: 2.5,
    size: 2900,
    irr: 9.1,
    image: "assets/city_penthouse.png",
    description: "Perched above the neon lights of Shibuya, this penthouse blends minimalist Japanese interiors with sleek western finishes. Features shoji-glass screen sliders, an integrated wellness deck with sauna, a custom hinoki wood soak tub, and smart smart-home modules controllable via neural link presets.",
    tags: ["Minimalist", "Hinoki Wood Tub", "Wellness Deck", "Tokyo Skyline"],
    amenities: ["Hinoki Wood Soak Tub", "Private Infrared Sauna", "Shoji-Glass Screen Sliders", "Shibuya Skyline Views", "Integrated Smart Automation", "Soundproof Media Lounge"],
    agent: {
      name: "Clara Sterling",
      role: "Global Investment Strategist",
      initials: "CS",
      rating: 4.9,
      sales: 55,
      phone: "+81 3 5555 0177"
    }
  }
];

const AGENTS = [
  {
    name: "Alexander Sterling",
    role: "Luxury Residential Director",
    initials: "AS",
    rating: 4.9,
    sales: 42,
    phone: "+41 22 555 0192",
    bio: "Specializing in high-value alpine properties, beachfront villas, and custom architectural estates for global investors."
  },
  {
    name: "Sophia Vance",
    role: "Metropolitan Acquisitions Manager",
    initials: "SV",
    rating: 4.8,
    sales: 68,
    phone: "+1 212 555 0148",
    bio: "Expertise in high-rise penthouses, converted lofts, and off-market luxury units in NYC and Chicago."
  },
  {
    name: "Marcus Mercer",
    role: "Sustainable Development Lead",
    initials: "MM",
    rating: 4.7,
    sales: 31,
    phone: "+1 503 555 0122",
    bio: "Focuses on eco-luxury housing, geothermal energy designs, and carbon-neutral estates across North America."
  },
  {
    name: "Clara Sterling",
    role: "Global Investment Strategist",
    initials: "CS",
    rating: 4.9,
    sales: 55,
    phone: "+81 3 5555 0177",
    bio: "Brings over 15 years of brokerage experience to high-volume commercial-to-residential projects in Tokyo, London, and Munich."
  }
];

// 2. Global State Manager
const AppState = {
  favorites: [],
  inquiries: [],
  activeView: "home-view",
  filters: {
    category: "all",
    search: "",
    maxPrice: 6000000,
    beds: "any",
    sort: "default"
  },
  mortgage: {
    price: 1200000,
    downPayment: 240000,
    rate: 5.5,
    term: 30
  }
};

// 3. Initialize App
document.addEventListener("DOMContentLoaded", () => {
  loadLocalStorage();
  setupNavigation();
  setupPropertiesCatalog();
  setupMortgageCalculator();
  setupAgentList();
  setupDashboardPanes();
  setupForms();
  
  // Initial renders
  renderFeaturedProperties();
  renderCatalogProperties();
  renderFavoritesList();
  renderInquiryTable();
  updateMortgageChart();
  
  // Header scrolled class
  window.addEventListener("scroll", () => {
    const header = document.getElementById("global-header");
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

// Load storage variables
function loadLocalStorage() {
  const savedFavorites = localStorage.getItem("propnext_favorites");
  if (savedFavorites) {
    AppState.favorites = JSON.parse(savedFavorites);
  }
  
  const savedInquiries = localStorage.getItem("propnext_inquiries");
  if (savedInquiries) {
    AppState.inquiries = JSON.parse(savedInquiries);
  } else {
    // Set 1 initial mock inquiry for aesthetics
    AppState.inquiries = [
      {
        date: new Date().toLocaleDateString(),
        propertyName: "Aethera Obsidian Villa",
        agentName: "Alexander Sterling",
        type: "Virtual Tour",
        status: "confirmed"
      }
    ];
    localStorage.setItem("propnext_inquiries", JSON.stringify(AppState.inquiries));
  }
}

// Save favorites helper
function saveFavorites() {
  localStorage.setItem("propnext_favorites", JSON.stringify(AppState.favorites));
  renderFavoritesList();
  renderFeaturedProperties();
  renderCatalogProperties();
}

// Save inquiries helper
function saveInquiries() {
  localStorage.setItem("propnext_inquiries", JSON.stringify(AppState.inquiries));
  renderInquiryTable();
}

// 4. SPA Router / Navigation Setup
function setupNavigation() {
  const navItems = document.querySelectorAll(".nav-menu .nav-item");
  const sections = document.querySelectorAll(".view-section");
  const menuToggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  
  function switchView(targetView) {
    AppState.activeView = targetView;
    
    // Toggle active classes on sections
    sections.forEach(sec => {
      sec.classList.remove("active");
      if (sec.id === targetView) {
        sec.classList.add("active");
      }
    });
    
    // Toggle active state on menu items
    navItems.forEach(item => {
      item.classList.remove("active");
      if (item.getAttribute("data-view") === targetView) {
        item.classList.add("active");
      }
    });
    
    // Close mobile menu
    navMenu.classList.remove("active");
    
    // Scroll window to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const target = item.getAttribute("data-view");
      switchView(target);
    });
  });

  // Logo link to Home
  document.getElementById("header-logo").addEventListener("click", () => switchView("home-view"));
  
  // CTA buttons linking to Catalog or modal inquiry
  document.getElementById("header-cta-btn").addEventListener("click", () => switchView("catalog-view"));
  document.getElementById("home-view-all-btn").addEventListener("click", () => switchView("catalog-view"));
  
  // Mobile Nav Toggle
  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
}

// 5. Card Component Render Helpers
function createPropertyCardHTML(prop) {
  const isFav = AppState.favorites.includes(prop.id);
  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(prop.price);

  return `
    <div class="property-card" data-id="${prop.id}">
      <div class="card-img-wrapper">
        <img src="${prop.image}" alt="${prop.title}" class="card-img">
        <button class="card-favorite-btn ${isFav ? 'active' : ''}" data-id="${prop.id}" aria-label="Add to favorites">
          <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        </button>
        <span class="card-type-tag">${prop.type}</span>
      </div>
      
      <div class="card-details">
        <div class="card-price-group">
          <span class="card-price">${formattedPrice}</span>
          <span class="card-irr">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
            ${prop.irr}% IRR
          </span>
        </div>
        
        <h3 class="card-title" data-id="${prop.id}">${prop.title}</h3>
        
        <div class="card-location">
          <svg viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          ${prop.location}
        </div>
        
        <div class="card-specs">
          <span>
            <svg viewBox="0 0 24 24"><path d="M7 13c1.66 0 3-1.34 3-3S8.66 7 7 7s-3 1.34-3 3 1.34 3 3 3zm12-6h-8v7H3V5H1v15h2v-3h18v3h2v-9c0-2.21-1.79-4-4-4z"/></svg>
            ${prop.beds} Beds
          </span>
          <span>
            <svg viewBox="0 0 24 24"><path d="M20 13V4H4v9H2v2h20v-2h-2zM6 12V6h12v6H6z"/></svg>
            ${prop.baths} Baths
          </span>
          <span>
            <svg viewBox="0 0 24 24"><path d="M3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2zm16 14H5V5h14v14zM7 7h2v2H7zm0 4h2v2H7zm0 4h2v2H7zm4-8h6v2h-6zm0 4h6v2h-6zm0 4h6v2h-6z"/></svg>
            ${prop.size} sqft
          </span>
        </div>
        
        <div class="card-footer">
          <div class="card-agent">
            <div class="agent-avatar">${prop.agent.initials}</div>
            <span class="agent-name">${prop.agent.name}</span>
          </div>
          <button class="card-btn detail-trigger" data-id="${prop.id}">View Asset</button>
        </div>
      </div>
    </div>
  `;
}

// Add card handlers
function addCardEventHandlers(containerSelector) {
  const container = document.querySelector(containerSelector);
  if (!container) return;

  // Detail triggers (Card Title or View Asset button)
  container.querySelectorAll(".detail-trigger, .card-title").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      openPropertyModal(id);
    });
  });

  // Favorite toggle triggers
  container.querySelectorAll(".card-favorite-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.getAttribute("data-id");
      toggleFavorite(id);
    });
  });
}

// Toggle favorites array
function toggleFavorite(id) {
  const index = AppState.favorites.indexOf(id);
  const prop = PROPERTIES.find(p => p.id === id);
  if (index === -1) {
    AppState.favorites.push(id);
    showToast(`Added ${prop.title} to saved portfolios.`, "success");
  } else {
    AppState.favorites.splice(index, 1);
    showToast(`Removed ${prop.title} from saved portfolios.`, "info");
  }
  saveFavorites();
}

// Render Featured home items
function renderFeaturedProperties() {
  const grid = document.getElementById("featured-listings-grid");
  if (!grid) return;
  
  // Show first 3 properties on home
  const featured = PROPERTIES.slice(0, 3);
  grid.innerHTML = featured.map(createPropertyCardHTML).join("");
  addCardEventHandlers("#featured-listings-grid");
}

// 6. Property Catalog Page Logic
function setupPropertiesCatalog() {
  const searchInput = document.getElementById("catalog-search");
  const priceSlider = document.getElementById("price-slider");
  const priceVal = document.getElementById("price-slider-val");
  const bedFilter = document.getElementById("bed-filter");
  const sortSelect = document.getElementById("sort-select");
  const categoryPills = document.querySelectorAll("#category-pills .pill-btn");
  const clearBtn = document.getElementById("clear-filters-btn");
  
  // Quick Search widgets from Home Page
  const quickSearch = document.getElementById("quick-search-input");
  const quickType = document.getElementById("quick-type-select");
  const quickBtn = document.getElementById("quick-search-btn");

  // Catalog Keyword Search
  searchInput.addEventListener("input", (e) => {
    AppState.filters.search = e.target.value.toLowerCase().trim();
    renderCatalogProperties();
  });

  // Price Slider input
  priceSlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    AppState.filters.maxPrice = val;
    priceVal.textContent = val >= 6000000 ? "Any Price" : `$${(val / 1000000).toFixed(1)}M`;
    renderCatalogProperties();
  });

  // Bed filter
  bedFilter.addEventListener("change", (e) => {
    AppState.filters.beds = e.target.value;
    renderCatalogProperties();
  });

  // Sorting
  sortSelect.addEventListener("change", (e) => {
    AppState.filters.sort = e.target.value;
    renderCatalogProperties();
  });

  // Category pills setup
  categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
      categoryPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      
      AppState.filters.category = pill.getAttribute("data-category");
      renderCatalogProperties();
    });
  });

  // Clear filters
  clearBtn.addEventListener("click", () => {
    searchInput.value = "";
    priceSlider.value = 6000000;
    priceVal.textContent = "Any Price";
    bedFilter.value = "any";
    sortSelect.value = "default";
    categoryPills.forEach(p => p.classList.remove("active"));
    document.querySelector("[data-category='all']").classList.add("active");

    AppState.filters = {
      category: "all",
      search: "",
      maxPrice: 6000000,
      beds: "any",
      sort: "default"
    };
    renderCatalogProperties();
  });

  // Hook Quick Search
  quickBtn.addEventListener("click", () => {
    const keyword = quickSearch.value.toLowerCase().trim();
    const type = quickType.value;
    
    AppState.filters.search = keyword;
    AppState.filters.category = type;
    
    // Sync catalog inputs
    searchInput.value = quickSearch.value;
    categoryPills.forEach(pill => {
      pill.classList.remove("active");
      if (pill.getAttribute("data-category") === type) {
        pill.classList.add("active");
      }
    });

    // Navigate to Catalog
    document.querySelector(".nav-menu [data-view='catalog-view']").click();
    renderCatalogProperties();
  });
}

function renderCatalogProperties() {
  const grid = document.getElementById("catalog-listings-grid");
  const countText = document.getElementById("results-count-text");
  const emptyState = document.getElementById("catalog-empty-state");
  
  if (!grid) return;

  // Filter logic
  let filtered = PROPERTIES.filter(prop => {
    // 1. Category Pill
    if (AppState.filters.category !== "all" && prop.type !== AppState.filters.category) {
      return false;
    }
    // 2. Keyword Search
    if (AppState.filters.search) {
      const matchTitle = prop.title.toLowerCase().includes(AppState.filters.search);
      const matchLocation = prop.location.toLowerCase().includes(AppState.filters.search);
      const matchDesc = prop.description.toLowerCase().includes(AppState.filters.search);
      if (!matchTitle && !matchLocation && !matchDesc) return false;
    }
    // 3. Max Price
    if (prop.price > AppState.filters.maxPrice) {
      return false;
    }
    // 4. Bedroom Count
    if (AppState.filters.beds !== "any") {
      const minBeds = parseInt(AppState.filters.beds);
      if (prop.beds < minBeds) return false;
    }
    return true;
  });

  // Sorting logic
  if (AppState.filters.sort === "price-asc") {
    filtered.sort((a, b) => a.price - b.price);
  } else if (AppState.filters.sort === "price-desc") {
    filtered.sort((a, b) => b.price - a.price);
  } else if (AppState.filters.sort === "irr-desc") {
    filtered.sort((a, b) => b.irr - a.irr);
  }

  // DOM Updates
  countText.textContent = `Showing ${filtered.length} of ${PROPERTIES.length} assets`;

  if (filtered.length === 0) {
    grid.style.display = "none";
    emptyState.style.display = "flex";
  } else {
    grid.style.display = "grid";
    emptyState.style.display = "none";
    grid.innerHTML = filtered.map(createPropertyCardHTML).join("");
    addCardEventHandlers("#catalog-listings-grid");
  }
}

// 7. Mortgage Calculator Calculations
function setupMortgageCalculator() {
  const priceSlider = document.getElementById("calc-price-slider");
  const priceLbl = document.getElementById("calc-price-lbl");
  
  const downSlider = document.getElementById("calc-down-slider");
  const downLbl = document.getElementById("calc-down-lbl");
  
  const rateSlider = document.getElementById("calc-rate-slider");
  const rateLbl = document.getElementById("calc-rate-lbl");
  
  const termSlider = document.getElementById("calc-term-slider");
  const termLbl = document.getElementById("calc-term-lbl");

  // Sync purchase price
  priceSlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    AppState.mortgage.price = val;
    priceLbl.textContent = formatCurrency(val);
    
    // Cap Down Payment at 80% of price
    const maxDown = Math.floor(val * 0.8);
    downSlider.max = maxDown;
    if (AppState.mortgage.downPayment > maxDown) {
      AppState.mortgage.downPayment = maxDown;
      downSlider.value = maxDown;
    }
    
    const pct = Math.round((AppState.mortgage.downPayment / val) * 100);
    downLbl.textContent = `${formatCurrency(AppState.mortgage.downPayment)} (${pct}%)`;
    
    updateMortgageChart();
  });

  // Sync Down Payment
  downSlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    AppState.mortgage.downPayment = val;
    const pct = Math.round((val / AppState.mortgage.price) * 100);
    downLbl.textContent = `${formatCurrency(val)} (${pct}%)`;
    
    updateMortgageChart();
  });

  // Sync Rate
  rateSlider.addEventListener("input", (e) => {
    const val = parseFloat(e.target.value);
    AppState.mortgage.rate = val;
    rateLbl.textContent = `${val.toFixed(1)}%`;
    updateMortgageChart();
  });

  // Sync Loan Term
  termSlider.addEventListener("input", (e) => {
    const val = parseInt(e.target.value);
    AppState.mortgage.term = val;
    termLbl.textContent = `${val} Years`;
    updateMortgageChart();
  });
}

function updateMortgageChart() {
  const { price, downPayment, rate, term } = AppState.mortgage;
  const principal = price - downPayment;
  const monthlyRate = rate / 12 / 100;
  const paymentsCount = term * 12;

  // Monthly mortgage calculation formula
  let monthlyPayment = 0;
  if (monthlyRate === 0) {
    monthlyPayment = principal / paymentsCount;
  } else {
    monthlyPayment = principal * (monthlyRate * Math.pow(1 + monthlyRate, paymentsCount)) / (Math.pow(1 + monthlyRate, paymentsCount) - 1);
  }

  const totalCost = monthlyPayment * paymentsCount;
  const totalInterest = Math.max(0, totalCost - principal);

  // SVG Chart Segment Update
  // Circumference of our SVG circle (radius = 15.915) is exactly 100.
  const totalFinancedCost = principal + totalInterest;
  const principalPercent = Math.round((principal / totalFinancedCost) * 100);
  const interestPercent = 100 - principalPercent;

  const segPrincipal = document.getElementById("chart-segment-principal");
  const segInterest = document.getElementById("chart-segment-interest");

  if (segPrincipal && segInterest) {
    // Principal Segment
    segPrincipal.setAttribute("stroke-dasharray", `${principalPercent} 100`);
    segPrincipal.setAttribute("stroke-dashoffset", "0");
    
    // Interest Segment
    segInterest.setAttribute("stroke-dasharray", `${interestPercent} 100`);
    segInterest.setAttribute("stroke-dashoffset", `-${principalPercent}`);
  }

  // Update UI values
  document.getElementById("calc-payment-val").textContent = formatCurrency(Math.round(monthlyPayment));
  document.getElementById("chart-center-val").textContent = formatMetricShorthand(Math.round(principal + totalInterest));
  
  document.getElementById("legend-principal-val").textContent = formatCurrency(Math.round(principal));
  document.getElementById("legend-interest-val").textContent = formatCurrency(Math.round(totalInterest));
  
  document.getElementById("stat-total-principal").textContent = formatCurrency(Math.round(principal));
  document.getElementById("stat-total-interest").textContent = formatCurrency(Math.round(totalInterest));
}

// 8. Agent Section Layout
function setupAgentList() {
  const grid = document.getElementById("agents-list-grid");
  if (!grid) return;

  grid.innerHTML = AGENTS.map(agent => `
    <div class="agent-card">
      <div class="agent-photo-wrapper">
        <div class="agent-photo">${agent.initials}</div>
      </div>
      
      <h3 class="agent-card-name">${agent.name}</h3>
      <span class="agent-card-title">${agent.role}</span>
      
      <div class="agent-rating">
        <svg viewBox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
        <span>${agent.rating} (${agent.sales} Closed Deals)</span>
      </div>
      
      <p class="agent-bio">${agent.bio}</p>
      
      <div class="agent-metrics-row">
        <div class="agent-metric">
          <span class="agent-metric-val">${agent.sales}+</span>
          <span class="agent-metric-lbl">Properties Sold</span>
        </div>
        <div class="agent-metric">
          <span class="agent-metric-val">100%</span>
          <span class="agent-metric-lbl">Satisfied</span>
        </div>
      </div>
      
      <button class="agent-action-btn schedule-agent-btn" data-agent="${agent.name}">Request consultation</button>
    </div>
  `).join("");

  // Setup click triggers to schedule a call
  grid.querySelectorAll(".schedule-agent-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const agentName = btn.getAttribute("data-agent");
      // Find a matching property for this agent to populate details or open generic inquiry
      const matchingProp = PROPERTIES.find(p => p.agent.name === agentName) || PROPERTIES[0];
      openPropertyModal(matchingProp.id);
      
      // Auto-focus name inside modal inquiry form
      document.getElementById("inquiry-name").focus();
    });
  });
}

// 9. Dashboard Panels Switching
function setupDashboardPanes() {
  const dashNavItems = document.querySelectorAll(".dash-nav-item");
  const dashPanes = document.querySelectorAll(".dash-pane");

  dashNavItems.forEach(item => {
    item.addEventListener("click", () => {
      const paneId = item.getAttribute("data-pane");
      
      // Active states nav
      dashNavItems.forEach(i => i.classList.remove("active"));
      item.classList.add("active");
      
      // Active states panes
      dashPanes.forEach(pane => {
        pane.classList.remove("active");
        if (pane.id === paneId) {
          pane.classList.add("active");
        }
      });
    });
  });
}

function renderFavoritesList() {
  const grid = document.getElementById("favorites-listings-grid");
  if (!grid) return;

  if (AppState.favorites.length === 0) {
    grid.innerHTML = `
      <div class="empty-state" style="display: flex; grid-column: 1 / -1; width: 100%;">
        <svg viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        <h3>No saved portfolios</h3>
        <p>Browse listings and click the heart icon to save investment options to this section.</p>
        <button class="cta-btn browse-fav-btn" style="margin-top: 10px;">Explore Properties</button>
      </div>
    `;
    
    // Bind explore button
    const browseBtn = grid.querySelector(".browse-fav-btn");
    if (browseBtn) {
      browseBtn.addEventListener("click", () => {
        document.querySelector(".nav-menu [data-view='catalog-view']").click();
      });
    }
  } else {
    const favProps = PROPERTIES.filter(p => AppState.favorites.includes(p.id));
    grid.innerHTML = favProps.map(createPropertyCardHTML).join("");
    addCardEventHandlers("#favorites-listings-grid");
  }
}

function renderInquiryTable() {
  const tbody = document.getElementById("inquiry-table-body");
  if (!tbody) return;

  if (AppState.inquiries.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align: center; color: var(--text-muted); padding: 32px 0;">
          No consultation inquiries submitted yet.
        </td>
      </tr>
    `;
  } else {
    tbody.innerHTML = AppState.inquiries.map(inq => `
      <tr>
        <td style="color: var(--text-secondary);">${inq.date}</td>
        <td style="font-weight: 600;">${inq.propertyName}</td>
        <td>${inq.agentName}</td>
        <td>${inq.type}</td>
        <td>
          <span class="status-badge ${inq.status}">
            <span class="badge-dot" style="width: 5px; height: 5px; background: currentColor; box-shadow: 0 0 6px currentColor;"></span>
            ${inq.status.charAt(0).toUpperCase() + inq.status.slice(1)}
          </span>
        </td>
      </tr>
    `).join("");
  }
}

// 10. Modal Actions
function openPropertyModal(id) {
  const prop = PROPERTIES.find(p => p.id === id);
  if (!prop) return;

  // Set modal elements
  document.getElementById("modal-hero-img").src = prop.image;
  document.getElementById("modal-title").textContent = prop.title;
  document.getElementById("modal-location").textContent = prop.location;
  document.getElementById("modal-price").textContent = formatCurrency(prop.price);
  
  document.getElementById("modal-beds").textContent = `${prop.beds} Beds`;
  document.getElementById("modal-baths").textContent = `${prop.baths} Baths`;
  document.getElementById("modal-size").textContent = `${prop.size} sqft`;
  document.getElementById("modal-irr-badge").textContent = `${prop.irr}% IRR`;
  
  document.getElementById("modal-description").textContent = prop.description;
  document.getElementById("inquiry-property-id").value = prop.id;

  // Tags
  const tagsContainer = document.getElementById("modal-tags-container");
  tagsContainer.innerHTML = prop.tags.map(t => `<span class="modal-tag">${t}</span>`).join("");

  // Amenities
  const amenitiesContainer = document.getElementById("modal-amenities-container");
  amenitiesContainer.innerHTML = prop.amenities.map(amenity => `
    <div class="amenity-card">
      <svg viewBox="0 0 24 24"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
      <span>${amenity}</span>
    </div>
  `).join("");

  // Agent Section
  document.getElementById("modal-agent-avatar").textContent = prop.agent.initials;
  document.getElementById("modal-agent-name").textContent = prop.agent.name;
  document.getElementById("modal-agent-role").textContent = prop.agent.role;

  // Show Modal
  const modal = document.getElementById("property-modal");
  modal.classList.add("active");
  
  // Disable body scroll when modal is active
  document.body.style.overflow = "hidden";
}

function closePropertyModal() {
  const modal = document.getElementById("property-modal");
  modal.classList.remove("active");
  document.body.style.overflow = "auto";
}

// 11. Form Handling
function setupForms() {
  // Modal close handlers
  document.getElementById("modal-close-trigger").addEventListener("click", closePropertyModal);
  
  document.getElementById("property-modal").addEventListener("click", (e) => {
    if (e.target.id === "property-modal") {
      closePropertyModal();
    }
  });

  // Inquiry form submit
  const form = document.getElementById("property-inquiry-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const propId = document.getElementById("inquiry-property-id").value;
    const name = document.getElementById("inquiry-name").value;
    const email = document.getElementById("inquiry-email").value;
    const type = document.getElementById("inquiry-type").value;
    
    const prop = PROPERTIES.find(p => p.id === propId);
    
    // Save to local state
    const newInquiry = {
      date: new Date().toLocaleDateString(),
      propertyName: prop.title,
      agentName: prop.agent.name,
      type: type,
      status: "pending"
    };

    AppState.inquiries.unshift(newInquiry);
    saveInquiries();
    
    // Reset form and close modal
    form.reset();
    closePropertyModal();
    
    showToast(`Consultation inquiry scheduled successfully with ${prop.agent.name}!`, "success");
  });
}

// 12. Helper Utilities
function formatCurrency(val) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0
  }).format(val);
}

function formatMetricShorthand(val) {
  if (val >= 1000000) {
    return `$${(val / 1000000).toFixed(2)}M`;
  }
  if (val >= 1000) {
    return `$${(val / 1000).toFixed(0)}k`;
  }
  return `$${val}`;
}

// Toast Alerts Generator
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast ${type}`;
  
  // Icon select
  let svgIcon = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;
  if (type === "info") {
    svgIcon = `<svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>`;
  }

  toast.innerHTML = `
    ${svgIcon}
    <span class="toast-msg">${message}</span>
  `;

  container.appendChild(toast);

  // Trigger fade out after 3 seconds, remove after 3.4 seconds
  setTimeout(() => {
    toast.style.animation = "toastFadeOut 0.4s ease-in forwards";
    setTimeout(() => {
      toast.remove();
    }, 400);
  }, 3000);
}
