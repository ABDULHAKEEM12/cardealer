const WHATSAPP_PHONE = "971552544440";
const WHATSAPP_URL = "https://wa.me/971552544440";
let allVehicles = [];
let currentLanguage = localStorage.getItem("language") || "en";

const translations = {
  en: {
    home: "Home",
    inventory: "Inventory",
    about: "About",
    contact: "Contact",
    favorites: "Favorites",
    searchPlaceholder: "Search by car brand",
    viewDetails: "View Details",
    addFavorites: "Add to Favorites",
    whatsappChat: "Chat on WhatsApp",
    sendInquiry: "Send Inquiry",
    contactUs: "Contact Us",
    contactSubtitle: "Contact us via WhatsApp or fill out the form below",
    fullName: "Full Name",
    emailAddress: "Email Address",
    phoneNumber: "Phone Number",
    name: "Name",
    email: "Email",
    phone: "Phone",
    message: "Message",
    ourFleet: "Our Fleet",
    chooseFrom:
      "Choose from luxury, sport, and economy vehicles at the best rates",
    whyRentFromUs: "Why Rent From Us?",
    bookYourDreamRide: "Book Your Dream Ride",
    contactInformation: "Contact Information",
    location: "Location",
    rentACarDubai: "RENT A CAR DUBAI",
    yourTrustedCarRental:
      "Your Trusted Car Rental in Dubai - Luxury, Sport & Economy Vehicles",
    quickLinks: "Quick Links",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved",
    youTrustedCarRental: "Your Trusted Car Rental in Dubai",
    browseOurFleet: "Browse Our Fleet",
    tellUsYourNeeds: "Tell us your rental needs...",
    contactInformationTitle: "Contact Information",
    dubai: "Dubai, UAE",
    bookYourDreamRideNow: "WHATSAPP TO BOOK NOW!",
    whatsapp: "WhatsApp",
    phoneTitle: "Phone",
    hours: "Hours",
    happyClients: "Happy Clients",
    posts: "Posts",
    followers: "Followers",
    whatsappToBook: "WHATSAPP TO BOOK!",
    wideSelection: "Wide Selection",
    luxurySportEconomy: "Luxury, Sport & Economy vehicles for all needs",
    support24: "24/7 Support",
    supportDesc: "Round-the-clock customer service & roadside assistance",
    flexiblePlans: "Flexible Plans",
    flexibleDesc: "Daily, weekly & monthly rental options available",
    guaranteedQuality: "Guaranteed Quality",
    qualityDesc: "Well-maintained, insured vehicles ready to drive",
    bookNow: "Book Now",
    hoursAvailability: "24/7 Availability",
    hoursDesc: "Book anytime, pickup anytime",
    completeBooking: "Complete Booking",
    orMessageWhatsapp: "Or message us on WhatsApp:",
    specialRequirements: "Special Requirements (Optional)",
    specialRequestsDesc: "Any special requests like GPS, child seat, etc.?",
  },
  ar: {
    home: "الرئيسية",
    inventory: "المخزون",
    about: "حول",
    contact: "اتصل",
    favorites: "المفضلة",
    searchPlaceholder: "ابحث عن ماركة السيارة",
    viewDetails: "عرض التفاصيل",
    addFavorites: "إضافة إلى المفضلة",
    whatsappChat: "دردشة على واتس",
    sendInquiry: "إرسال استفسار",
    contactUs: "اتصل بنا",
    contactSubtitle: "تواصل معنا عبر واتس أب أو ملء النموذج أدناه",
    fullName: "الاسم الكامل",
    emailAddress: "عنوان البريد الإلكتروني",
    phoneNumber: "رقم الهاتف",
    name: "الاسم",
    email: "البريد الإلكتروني",
    phone: "الهاتف",
    message: "الرسالة",
    ourFleet: "أسطولنا",
    chooseFrom: "اختر من سيارات فاخرة وأداء رياضي واقتصادية بأفضل الأسعار",
    whyRentFromUs: "لماذا تستأجر منا؟",
    bookYourDreamRide: "احجز حلم ركوبك",
    contactInformation: "معلومات الاتصال",
    location: "الموقع",
    rentACarDubai: "استئجار سيارة في دبي",
    yourTrustedCarRental:
      "خدمة تأجير السيارات الموثوقة في دبي - سيارات فاخرة وأداء رياضي واقتصادية",
    quickLinks: "روابط سريعة",
    followUs: "تابعنا",
    allRightsReserved: "جميع الحقوق محفوظة",
    youTrustedCarRental: "خدمة تأجير السيارات الموثوقة في دبي",
    browseOurFleet: "تصفح أسطولنا",
    tellUsYourNeeds: "أخبرنا باحتياجاتك للإيجار...",
    contactInformationTitle: "معلومات الاتصال",
    dubai: "دبي، الإمارات العربية المتحدة",
    bookYourDreamRideNow: "احجز حلم ركوبك الآن!",
    whatsapp: "واتس أب",
    phoneTitle: "الهاتف",
    hours: "الساعات",
    happyClients: "عملاء سعداء",
    posts: "المشاركات",
    followers: "المتابعون",
    whatsappToBook: "واتس لحجزك!",
    wideSelection: "اختيار واسع",
    luxurySportEconomy: "سيارات فاخرة وأداء رياضي واقتصادية لجميع الاحتياجات",
    support24: "دعم 24/7",
    supportDesc: "خدمة العملاء على مدار الساعة والمساعدة على الطريق",
    flexiblePlans: "خطط مرنة",
    flexibleDesc: "خيارات الإيجار اليومية والأسبوعية والشهرية متاحة",
    guaranteedQuality: "جودة مضمونة",
    qualityDesc: "سيارات صيانة جيدة ومؤمنة وجاهزة للقيادة",
    bookNow: "احجز الآن",
    hoursAvailability: "متاح 24/7",
    hoursDesc: "احجز في أي وقت، استلم في أي وقت",
    completeBooking: "إكمال الحجز",
    orMessageWhatsapp: "أو راسلنا على واتس أب:",
    specialRequirements: "متطلبات خاصة (اختياري)",
    specialRequestsDesc: "أي طلبات خاصة مثل GPS أو مقعد الأطفال إلخ؟",
  },
};

document.addEventListener("DOMContentLoaded", () => {
  loadVehicles();
  initializeThemeToggle();
  initializeLanguageToggle();
  applyLanguage();
  setupMobileMenu();
});

async function loadVehicles() {
  try {
    const response = await fetch("vehicles.json");
    if (!response.ok) throw new Error("Failed to load vehicles");
    const data = await response.json();

    if (data.vehicles) {
      allVehicles = data.vehicles;
    } else {
      allVehicles = [];
      Object.values(data).forEach((category) => {
        if (Array.isArray(category)) {
          allVehicles.push(...category);
        }
      });
    }

    initializeApp();
  } catch (error) {
    console.error("Error loading vehicles:", error);
    allVehicles = [];
    initializeApp();
  }
}

function initializeApp() {
  updateWishlistCount();

  const page = window.location.pathname;

  if (page.includes("car.html") || page.endsWith("/")) {
    setupInventory();
  } else if (page.includes("vehicle-detail.html")) {
    loadVehicleDetail();
    setupNavigation();
  } else if (page.includes("favorites.html")) {
    loadFavorites();
    setupNavigation();
  }
}

function setupInventory() {
  setupNavigation();
  setupSearch();
}

function loadVehicleDetail() {
  const params = new URLSearchParams(window.location.search);
  const brandName = params.get("brand");
  const vehicleId = params.get("id") ? parseInt(params.get("id")) : null;

  // If brand parameter is provided, show all cars of that brand
  if (brandName) {
    const brandCars = allVehicles.filter((v) => v.brand === brandName);
    if (brandCars.length === 0) {
      document.body.innerHTML =
        '<h1 style="text-align: center; padding: 100px; color: white;">Brand not found</h1>';
      return;
    }
    // Show the first car of the brand as default, but allow switching
    displayBrandGallery(brandCars, 0);
  } else if (vehicleId) {
    // Original functionality: show single vehicle by ID
    const vehicle = allVehicles.find((v) => v.id === vehicleId);
    if (!vehicle) {
      document.body.innerHTML =
        '<h1 style="text-align: center; padding: 100px; color: white;">Vehicle not found</h1>';
      return;
    }
    displayVehicleDetail(vehicle);
  } else {
    document.body.innerHTML =
      '<h1 style="text-align: center; padding: 100px; color: white;">No vehicle selected</h1>';
  }

  setupNavigation();
}

function displayBrandGallery(brandCars, currentIndex) {
  const vehicle = brandCars[currentIndex];

  // Display main vehicle details
  document.getElementById("detailImage").src = vehicle.image;
  document.getElementById("detailImage").alt = vehicle.name;
  document.getElementById("detailTitle").textContent = vehicle.brand;
  document.getElementById("detailCategory").textContent = vehicle.name;
  document.getElementById("detailBadge").textContent =
    vehicle.badge || vehicle.category;
  document.getElementById("detailPerformance").textContent =
    vehicle.performance;
  document.getElementById("detailFuel").textContent = vehicle.fuel;
  document.getElementById("detailSeats").textContent = vehicle.seats;
  document.getElementById("detailTransmission").textContent =
    vehicle.transmission;
  document.getElementById("detailDescription").textContent =
    vehicle.description;
  document.getElementById("detailPrice").textContent =
    `AED ${vehicle.price}/day`;

  const featuresList = document.getElementById("detailFeaturesList");
  featuresList.innerHTML = vehicle.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  // Display gallery thumbnails if multiple cars
  const galleryContainer = document.getElementById("brandGalleryContainer");
  if (galleryContainer) {
    galleryContainer.innerHTML = brandCars
      .map(
        (car, idx) =>
          `<div class="gallery-thumb ${idx === currentIndex ? "active" : ""}" onclick="updateBrandGallery(${idx})">
          <img src="${car.image}" alt="${car.name}" title="${car.name}">
        </div>`,
      )
      .join("");
  }

  // Setup navigation buttons
  const prevBtn = document.getElementById("prevCarBtn");
  const nextBtn = document.getElementById("nextCarBtn");

  if (prevBtn) {
    prevBtn.onclick = () => {
      const newIndex =
        currentIndex === 0 ? brandCars.length - 1 : currentIndex - 1;
      displayBrandGallery(brandCars, newIndex);
    };
    prevBtn.style.display = brandCars.length > 1 ? "block" : "none";
  }

  if (nextBtn) {
    nextBtn.onclick = () => {
      const newIndex = (currentIndex + 1) % brandCars.length;
      displayBrandGallery(brandCars, newIndex);
    };
    nextBtn.style.display = brandCars.length > 1 ? "block" : "none";
  }

  // Store current brand cars for wishlist/whatsapp buttons
  window.currentBrandCars = brandCars;
  window.currentCarIndex = currentIndex;

  // Setup wishlist and whatsapp buttons
  const wishlistBtn = document.getElementById("detailWishlistBtn");
  if (wishlistBtn) {
    updateWishlistButton(wishlistBtn, vehicle.id);
    wishlistBtn.addEventListener("click", (e) => {
      e.preventDefault();
      toggleFavorite(vehicle.id);
      updateWishlistButton(wishlistBtn, vehicle.id);
    });
  }

  const whatsappBtn = document.getElementById("detailWhatsappBtn");
  if (whatsappBtn) {
    whatsappBtn.addEventListener("click", (e) => {
      e.preventDefault();
      // Store vehicle info in sessionStorage
      sessionStorage.setItem(
        "selectedVehicle",
        JSON.stringify({
          name: vehicle.name,
          price: vehicle.price,
          description: vehicle.description,
          brand: vehicle.brand,
        }),
      );
      // Navigate to home page contact form
      window.location.href = "car.html#contact";
    });
  }
}

function updateBrandGallery(index) {
  displayBrandGallery(window.currentBrandCars, index);
}

function displayVehicleDetail(vehicle) {
  document.getElementById("detailImage").src = vehicle.image;
  document.getElementById("detailImage").alt = vehicle.name;
  document.getElementById("detailTitle").textContent = vehicle.name;
  document.getElementById("detailCategory").textContent =
    vehicle.category.toUpperCase();
  document.getElementById("detailBadge").textContent =
    vehicle.badge || vehicle.category;
  document.getElementById("detailPerformance").textContent =
    vehicle.performance;
  document.getElementById("detailFuel").textContent = vehicle.fuel;
  document.getElementById("detailSeats").textContent = vehicle.seats;
  document.getElementById("detailTransmission").textContent =
    vehicle.transmission;
  document.getElementById("detailDescription").textContent =
    vehicle.description;
  document.getElementById("detailPrice").textContent =
    `AED ${vehicle.price}/day`;

  const featuresList = document.getElementById("detailFeaturesList");
  featuresList.innerHTML = vehicle.features
    .map((feature) => `<li>${feature}</li>`)
    .join("");

  const wishlistBtn = document.getElementById("detailWishlistBtn");
  updateWishlistButton(wishlistBtn, vehicle.id);
  wishlistBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleFavorite(vehicle.id);
    updateWishlistButton(wishlistBtn, vehicle.id);
  });

  const whatsappBtn = document.getElementById("detailWhatsappBtn");
  whatsappBtn.addEventListener("click", (e) => {
    e.preventDefault();
    // Store vehicle info in sessionStorage
    sessionStorage.setItem(
      "selectedVehicle",
      JSON.stringify({
        name: vehicle.name,
        price: vehicle.price,
        description: vehicle.description,
        brand: vehicle.brand,
      }),
    );
    // Navigate to home page contact form
    window.location.href = "car.html#contact";
  });
}

function updateWishlistButton(btn, vehicleId) {
  if (isFavorited(vehicleId)) {
    btn.classList.add("active");
    btn.innerHTML = '<i class="fas fa-heart"></i> Added to Favorites';
  } else {
    btn.classList.remove("active");
    btn.innerHTML = '<i class="fas fa-heart"></i> Add to Favorites';
  }
}

function loadFavorites() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteVehicles = allVehicles.filter((v) => favorites.includes(v.id));
  const grid = document.getElementById("favoritesGrid");
  const emptyMsg = document.getElementById("emptyFavorites");

  if (favoriteVehicles.length === 0) {
    emptyMsg.style.display = "block";
    grid.innerHTML = "";
  } else {
    emptyMsg.style.display = "none";
    grid.innerHTML = favoriteVehicles
      .map(
        (car) => `
            <div class="car-card">
                <div class="car-image">
                    <img src="${car.image}" alt="${car.name}">
                    <span class="car-badge">${car.badge || car.category}</span>
                </div>
                <div class="car-info">
                    <h3>${car.name}</h3>
                    <p class="car-category">${car.category.toUpperCase()}</p>
                    <div class="car-specs">
                        <div class="spec">
                            <i class="fas fa-bolt"></i>
                            <span>${car.performance.split(",")[0]}</span>
                        </div>
                        <div class="spec">
                            <i class="fas fa-gas-pump"></i>
                            <span>${car.fuel}</span>
                        </div>
                    </div>
                    <div class="car-footer">
                        <div class="car-price">$${car.price.toLocaleString()}</div>
                        <div class="car-actions">
                            <a href="vehicle-detail.html?id=${car.id}" class="view-btn">View Details</a>
                            <a href="https://wa.me/2349024836537?text=${encodeURIComponent(`Hi APEX Motors! I'm interested in the ${car.name} priced at $${car.price.toLocaleString()}. Can you provide more details?`)}" target="_blank" class="whatsapp-card-btn">
                                <i class="fab fa-whatsapp"></i>
                            </a>
                            <button class="wishlist-card-btn active" onclick="toggleFavorite(${car.id}, event)">
                                <i class="fas fa-heart"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `,
      )
      .join("");
  }

  setupNavigation();
}

function toggleFavorite(vehicleId, event) {
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

  let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const index = favorites.indexOf(vehicleId);

  if (index > -1) {
    favorites.splice(index, 1);
  } else {
    favorites.push(vehicleId);
  }

  localStorage.setItem("favorites", JSON.stringify(favorites));
  updateWishlistCount();

  if (window.location.pathname.includes("favorites.html")) {
    loadFavorites();
  } else if (window.location.pathname.includes("vehicle-detail.html")) {
    const wishlistBtn = document.getElementById("detailWishlistBtn");
    if (wishlistBtn) {
      updateWishlistButton(wishlistBtn, vehicleId);
    }
  } else {
    renderCars("all");
  }
}

function isFavorited(vehicleId) {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites.includes(vehicleId);
}

function updateWishlistCount() {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const countElements = document.querySelectorAll("#wishlistCount");
  countElements.forEach((el) => {
    el.textContent = favorites.length;
  });
}

function setupNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const currentPath = window.location.pathname;

  navLinks.forEach((link) => {
    link.classList.remove("active");
    const href = link.getAttribute("href");
    if (href && currentPath.includes(href.split("#")[0])) {
      link.classList.add("active");
    }
  });
}

function scrollToSection(selector) {
  const element = document.querySelector(selector);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}

function setupMobileMenu() {
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle) {
    menuToggle.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      navLinks?.classList.toggle("active");
    });
  }

  // Close menu when clicking on a nav link
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks?.classList.remove("active");
    });
  });

  // Close menu when clicking outside
  document.addEventListener("click", (e) => {
    if (
      navLinks &&
      !navLinks.contains(e.target) &&
      !menuToggle?.contains(e.target)
    ) {
      navLinks.classList.remove("active");
    }
  });
}

function setupContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  // Check if a vehicle was selected from detail page
  const selectedVehicle = sessionStorage.getItem("selectedVehicle");
  if (selectedVehicle) {
    const vehicle = JSON.parse(selectedVehicle);
    const messageField = document.getElementById("message");
    if (messageField) {
      messageField.value = `I am interested in renting the ${vehicle.name} priced at AED ${vehicle.price}/day. ${vehicle.description}`;
    }
    sessionStorage.removeItem("selectedVehicle");
  }

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const formData = {
      name: name,
      email: email,
      phone: phone,
      message: message,
      timestamp: new Date().toISOString(),
    };

    let submissions =
      JSON.parse(localStorage.getItem("contactSubmissions")) || [];
    submissions.push(formData);
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    // Create WhatsApp message from form data
    const whatsappMessage = `Hello RENT A CAR DUBAI!\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage: ${message}`;

    // Redirect to WhatsApp
    const whatsappLink = `${WHATSAPP_URL}?text=${encodeURIComponent(whatsappMessage)}`;
    window.location.href = whatsappLink;
  });
}

// ==================== THEME TOGGLE ====================
function initializeThemeToggle() {
  const themeToggle = document.getElementById("themeToggle");
  const html = document.documentElement;
  const savedTheme = localStorage.getItem("theme") || "dark";

  // Set initial theme
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    updateThemeIcon("light");
  }

  // Toggle theme on button click
  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      document.body.classList.toggle("light-mode");
      const isLightMode = document.body.classList.contains("light-mode");
      localStorage.setItem("theme", isLightMode ? "light" : "dark");
      updateThemeIcon(isLightMode ? "light" : "dark");
    });
  }
}

function updateThemeIcon(theme) {
  const themeToggle = document.getElementById("themeToggle");
  if (themeToggle) {
    const icon = themeToggle.querySelector("i");
    if (icon) {
      icon.className = theme === "light" ? "fas fa-sun" : "fas fa-moon";
    }
  }
}

// ==================== SEARCH FUNCTIONALITY ====================
function setupSearch() {
  const searchInput = document.getElementById("searchInput");
  const searchClear = document.getElementById("searchClear");
  const searchResults = document.getElementById("searchResults");

  if (!searchInput) return;

  searchInput.addEventListener("input", (e) => {
    const searchTerm = e.target.value.toLowerCase().trim();

    if (searchTerm.length === 0) {
      searchResults.style.display = "none";
      searchClear.style.display = "none";
      return;
    }

    searchClear.style.display = "block";

    // Get unique brands that match search term
    const matchingBrands = [];
    const seenBrands = new Set();

    allVehicles.forEach((car) => {
      if (
        car.brand &&
        car.brand.toLowerCase().includes(searchTerm) &&
        !seenBrands.has(car.brand)
      ) {
        seenBrands.add(car.brand);
        matchingBrands.push(car.brand);
      }
    });

    if (matchingBrands.length === 0) {
      searchResults.innerHTML =
        '<div class="search-no-results">No brands found matching "' +
        searchTerm +
        '"</div>';
      searchResults.style.display = "block";
      return;
    }

    // Show search results dropdown with brands
    searchResults.innerHTML = matchingBrands
      .map((brand) => {
        const brandCars = allVehicles.filter((car) => car.brand === brand);
        const brandEncoded = encodeURIComponent(brand);
        return `<div class="search-result-item" onclick="window.location.href='vehicle-detail.html?brand=${brandEncoded}'">
            <strong>${brand}</strong> - ${brandCars.length} model${brandCars.length > 1 ? "s" : ""} available
          </div>`;
      })
      .join("");
    searchResults.style.display = "block";
  });

  // Clear search
  if (searchClear) {
    searchClear.addEventListener("click", () => {
      searchInput.value = "";
      searchClear.style.display = "none";
      searchResults.style.display = "none";
      searchInput.focus();
    });
  }
}

// ==================== LANGUAGE TOGGLE ====================
function initializeLanguageToggle() {
  const languageToggle = document.getElementById("languageToggle");
  const langText = document.getElementById("langText");

  // Set initial language
  if (currentLanguage === "ar") {
    document.documentElement.lang = "ar";
    document.body.style.direction = "rtl";
    langText.textContent = "English";
  } else {
    document.documentElement.lang = "en";
    document.body.style.direction = "ltr";
    langText.textContent = "العربية";
  }

  // Toggle language on button click
  if (languageToggle) {
    languageToggle.addEventListener("click", () => {
      currentLanguage = currentLanguage === "en" ? "ar" : "en";
      localStorage.setItem("language", currentLanguage);
      document.documentElement.lang = currentLanguage;
      document.body.style.direction = currentLanguage === "ar" ? "rtl" : "ltr";

      // Update button text
      langText.textContent = currentLanguage === "ar" ? "English" : "العربية";

      // Apply translations
      applyLanguage();

      // Reload page if needed to apply full translation
      location.reload();
    });
  }
}

function applyLanguage() {
  const lang = currentLanguage;
  const trans = translations[lang];

  // Update page title and meta
  document.documentElement.lang = lang;
  document.body.style.direction = lang === "ar" ? "rtl" : "ltr";
  document.body.style.textAlign = lang === "ar" ? "right" : "left";

  // Update navigation links
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach((link) => {
    const text = link.textContent.trim();
    let newText = text;

    if (text.includes("Home")) newText = trans.home;
    else if (text.includes("Inventory")) newText = trans.inventory;
    else if (text.includes("About")) newText = trans.about;
    else if (text.includes("Contact")) newText = trans.contact;
    else if (text.includes("Favorites"))
      newText = trans.favorites || "Favorites";

    // Check if link contains icons (has child elements)
    const hasIcon = link.querySelectorAll("i").length > 0;

    if (hasIcon) {
      // Clear text nodes but keep icons
      let textNode = null;
      for (let node of link.childNodes) {
        if (node.nodeType === 3) {
          // Text node
          node.textContent = newText;
          textNode = node;
        }
      }
      // If no text node found, create one
      if (!textNode) {
        link.appendChild(document.createTextNode(newText));
      }
    } else {
      // No icons, safe to replace entire content
      link.textContent = newText;
    }
  });

  // Update hero section
  const heroTitle = document.querySelector(".hero-title");
  if (heroTitle && heroTitle.textContent.includes("Your Trusted"))
    heroTitle.textContent = trans.youTrustedCarRental;

  const ctaBtn = document.querySelector(".cta-btn");
  if (ctaBtn && ctaBtn.textContent.includes("Browse"))
    ctaBtn.innerHTML =
      trans.browseOurFleet + ' <i class="fas fa-arrow-right"></i>';

  // Update section headers
  const sectionHeaders = document.querySelectorAll(".section-header");
  sectionHeaders.forEach((header) => {
    const h2 = header.querySelector("h2");
    const p = header.querySelector("p");

    if (h2) {
      if (h2.textContent.includes("Our Fleet")) h2.textContent = trans.ourFleet;
      else if (h2.textContent.includes("Why Rent"))
        h2.textContent = trans.whyRentFromUs;
      else if (h2.textContent.includes("Book Your Dream"))
        h2.textContent = trans.bookYourDreamRide;
    }

    if (p) {
      if (p.textContent.includes("Choose from luxury"))
        p.textContent = trans.chooseFrom;
      else if (p.textContent.includes("Contact us via WhatsApp"))
        p.textContent = trans.contactSubtitle;
    }
  });

  // Update search placeholder
  const searchInput = document.getElementById("searchInput");
  if (searchInput) searchInput.placeholder = trans.searchPlaceholder;

  // Update form labels
  const labels = document.querySelectorAll("label");
  labels.forEach((label) => {
    const text = label.textContent.trim();
    if (text.includes("Name")) label.textContent = trans.fullName;
    else if (text.includes("Email")) label.textContent = trans.emailAddress;
    else if (text.includes("Phone")) label.textContent = trans.phoneNumber;
    else if (text.includes("Message")) label.textContent = trans.message;
  });

  // Update form textarea placeholder
  const textarea = document.querySelector("textarea[name='message']");
  if (textarea) textarea.placeholder = trans.tellUsYourNeeds;

  // Update submit button
  const submitBtn = document.querySelector(".submit-btn");
  if (submitBtn) submitBtn.textContent = trans.sendInquiry;

  // Update About section stats
  const aboutCard = document.querySelector(".about-card");
  if (aboutCard) {
    const stats = aboutCard.querySelectorAll(".stat p");
    if (stats.length >= 3) {
      stats[0].textContent = trans.happyClients;
      stats[1].textContent = trans.posts;
      stats[2].textContent = trans.followers;
    }
  }

  // Update feature titles and descriptions
  const features = document.querySelectorAll(".feature");
  if (features.length > 0) {
    const translatedTitles = [
      trans.wideSelection,
      trans.support24,
      trans.flexiblePlans,
      trans.guaranteedQuality,
    ];
    const translatedDescs = [
      trans.luxurySportEconomy,
      trans.supportDesc,
      trans.flexibleDesc,
      trans.qualityDesc,
    ];

    features.forEach((feature, idx) => {
      const h3 = feature.querySelector("h3");
      const p = feature.querySelector("p");
      if (h3) h3.textContent = translatedTitles[idx];
      if (p) p.textContent = translatedDescs[idx];
    });
  }

  // Update contact info section
  const contactInfo = document.querySelector(".contact-info");
  if (contactInfo) {
    const h3 = contactInfo.querySelector("h3");
    if (h3) h3.textContent = trans.contactInformationTitle;

    const infoItems = contactInfo.querySelectorAll(".info-item");
    infoItems.forEach((item) => {
      const h4 = item.querySelector("h4");
      if (h4) {
        if (h4.textContent.includes("Location"))
          h4.textContent = trans.location;
        else if (h4.textContent.includes("WhatsApp"))
          h4.textContent = trans.whatsapp;
        else if (h4.textContent.includes("Phone"))
          h4.textContent = trans.phoneTitle;
        else if (h4.textContent.includes("Hours")) h4.textContent = trans.hours;
      }

      const p = item.querySelector("p");
      if (p && p.textContent.includes("Dubai")) p.textContent = trans.dubai;
      if (p && p.textContent.includes("24/7")) {
        p.innerHTML = `${trans.hoursAvailability}<br>${trans.hoursDesc}`;
      }

      const small = item.querySelector("small");
      if (small) small.textContent = trans.bookYourDreamRideNow;
    });
  }

  // Update test drive form labels
  const testDriveForm = document.querySelector(".test-drive-form");
  if (testDriveForm) {
    const formLabels = testDriveForm.querySelectorAll("label");
    formLabels.forEach((label) => {
      const text = label.textContent.trim();
      if (text.includes("Full Name")) label.textContent = trans.fullName + " *";
      else if (text.includes("Email"))
        label.textContent = trans.emailAddress + " *";
      else if (text.includes("Phone"))
        label.textContent = trans.phoneNumber + " *";
      else if (text.includes("Special"))
        label.textContent = trans.specialRequirements;
    });

    const testDriveSubmitBtn = testDriveForm.querySelector(".submit-btn");
    if (testDriveSubmitBtn)
      testDriveSubmitBtn.textContent = trans.completeBooking;

    const bookingNote = testDriveForm.querySelector(".booking-note");
    if (bookingNote) {
      const phoneNum = "+971 55 254 4440";
      bookingNote.innerHTML = `💡 ${trans.orMessageWhatsapp} <strong>${phoneNum}</strong>`;
    }
  }

  // Update footer
  const footer = document.querySelector(".footer");
  if (footer) {
    const footerSections = footer.querySelectorAll(".footer-section");
    footerSections.forEach((section) => {
      const h4 = section.querySelector("h4");
      const p = section.querySelector("p");
      const lis = section.querySelectorAll("li a");

      if (h4) {
        if (h4.textContent.includes("RENT A CAR DUBAI"))
          h4.textContent = trans.rentACarDubai;
        else if (h4.textContent.includes("Quick Links"))
          h4.textContent = trans.quickLinks;
        else if (h4.textContent.includes("Follow Us"))
          h4.textContent = trans.followUs;
      }

      if (p && p.textContent.includes("Your Trusted"))
        p.textContent = trans.yourTrustedCarRental;

      lis.forEach((link) => {
        if (link.textContent.includes("Our Fleet"))
          link.textContent = trans.ourFleet;
        else if (link.textContent.includes("Why Us"))
          link.textContent = trans.whyRentFromUs;
        else if (link.textContent.includes("Contact"))
          link.textContent = trans.contact;
      });
    });

    const footerBottom = footer.querySelector(".footer-bottom");
    if (footerBottom) {
      const p = footerBottom.querySelector("p");
      if (p) {
        const phoneNum = "+971 55 254 4440";
        p.innerHTML = `&copy; 2026 ${trans.rentACarDubai}. ${trans.allRightsReserved}. | ${phoneNum}`;
      }
    }
  }
}

document.addEventListener("DOMContentLoaded", setupContactForm);
