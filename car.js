const WHATSAPP_PHONE = "2349024836537";
const WHATSAPP_URL = "https://wa.me/2349024836537";
let allVehicles = [];

document.addEventListener("DOMContentLoaded", () => {
  loadVehicles();
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
  }
}

function initializeApp() {
  updateWishlistCount();
  setupMobileMenu();

  const page = window.location.pathname;

  if (page.includes("car.html") || page.endsWith("/")) {
    setupInventory();
  } else if (page.includes("vehicle-detail.html")) {
    loadVehicleDetail();
  } else if (page.includes("favorites.html")) {
    loadFavorites();
  }
}

function setupInventory() {
  renderCars("all");
  setupFilterButtons();
  setupNavigation();
}

function renderCars(filter) {
  const grid = document.getElementById("carsGrid");
  if (!grid) return;

  const filteredVehicles =
    filter === "all"
      ? allVehicles
      : allVehicles.filter((car) => car.category === filter);

  grid.innerHTML = filteredVehicles
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
                        <button class="wishlist-card-btn ${isFavorited(car.id) ? "active" : ""}" onclick="toggleFavorite(${car.id}, event)">
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

function setupFilterButtons() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      renderCars(filter);
    });
  });
}

function loadVehicleDetail() {
  const params = new URLSearchParams(window.location.search);
  const vehicleId = parseInt(params.get("id"));
  const vehicle = allVehicles.find((v) => v.id === vehicleId);

  if (!vehicle) {
    document.body.innerHTML =
      '<h1 style="text-align: center; padding: 100px; color: white;">Vehicle not found</h1>';
    return;
  }

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
    `$${vehicle.price.toLocaleString()}`;

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
  const message = `Hi APEX Motors! I'm interested in the ${vehicle.name} priced at $${vehicle.price.toLocaleString()}. Can you provide more details and discuss financing options?`;
  whatsappBtn.href = `${WHATSAPP_URL}?text=${encodeURIComponent(message)}`;

  setupNavigation();
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
    menuToggle.addEventListener("click", () => {
      navLinks?.classList.toggle("active");
    });
  }

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks?.classList.remove("active");
    });
  });
}

function setupContactForm() {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm) return;

  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("phone").value,
      message: document.getElementById("message").value,
      timestamp: new Date().toISOString(),
    };

    let submissions =
      JSON.parse(localStorage.getItem("contactSubmissions")) || [];
    submissions.push(formData);
    localStorage.setItem("contactSubmissions", JSON.stringify(submissions));

    alert("Thank you! We will contact you soon.");
    contactForm.reset();
  });
}

document.addEventListener("DOMContentLoaded", setupContactForm);
