// === Navbar Scroll + Logo Swap ===
const navbar = document.getElementById('navbar');
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = document.querySelector('.dropdown-menu');
const hero = document.querySelector('.hero-section');

// Logos
const logoWhite = document.getElementById('logo-white');
const logoColor = document.getElementById('logo-color');

// Function to show the correct logo
function updateLogoVisibility(scrolled) {
  if (scrolled) {
    logoWhite.classList.add('hidden');
    logoWhite.classList.remove('visible');
    logoColor.classList.add('visible');
    logoColor.classList.remove('hidden');
  } else {
    logoWhite.classList.add('visible');
    logoWhite.classList.remove('hidden');
    logoColor.classList.add('hidden');
    logoColor.classList.remove('visible');
  }
}

// Function to update navbar and hero on scroll
function updateNavbarAndHero() {
  const scrolled = window.scrollY > 50;
  navbar.classList.toggle('scrolled', scrolled);
  hero.classList.toggle('alt-background', scrolled);
  updateLogoVisibility(scrolled);
}

// Hover effect on navbar
navbar.addEventListener('mouseenter', () => {
  updateLogoVisibility(true);
  navbar.classList.add('scrolled');
});

navbar.addEventListener('mouseleave', () => {
  if (window.scrollY <= 50) {
    updateLogoVisibility(false);
    navbar.classList.remove('scrolled');
  }
});

// Listen for scroll
window.addEventListener('scroll', updateNavbarAndHero);

// === Dropdown Sticky Logic ===
let dropdownTimeout;

dropdown.addEventListener('mouseenter', () => {
  clearTimeout(dropdownTimeout);
  dropdownMenu.style.display = 'block';
  updateLogoVisibility(true);
  navbar.classList.add('scrolled');
});

dropdown.addEventListener('mouseleave', () => {
  dropdownTimeout = setTimeout(() => {
    dropdownMenu.style.display = 'none';
    if (window.scrollY <= 50) {
      updateLogoVisibility(false);
      navbar.classList.remove('scrolled');
    }
  }, 300);
});

dropdownMenu.addEventListener('mouseenter', () => {
  clearTimeout(dropdownTimeout);
});

dropdownMenu.addEventListener('mouseleave', () => {
  dropdownTimeout = setTimeout(() => {
    dropdownMenu.style.display = 'none';
    if (window.scrollY <= 50) {
      updateLogoVisibility(false);
      navbar.classList.remove('scrolled');
    }
  }, 300);
});

// === Load News Cards in Batches (Load More Support) ===
let allCards = [];
let currentIndex = 0;
const batchSize = 6;

function loadNewsCards() {
  fetch(`blogs.json`)
    .then(response => response.json())
    .then(data => {
      allCards = data;
      currentIndex = 0;
      renderNextBatch();
    })
    .catch(error => {
      console.error("Error loading news:", error);
    });
}

function renderNextBatch() {
  const container = document.getElementById("news-content");
  const nextBatch = allCards.slice(currentIndex, currentIndex + batchSize);

  nextBatch.forEach(item => {
    const card = document.createElement("div");
    card.className = "news-card";
    card.innerHTML = `
      <div class="card-image-wrapper">
        <img src="${item.image}" alt="News Image">
        <div class="card-date-overlay">
          <span class="day">${item.date.split(' ')[0]}</span>
          <span class="month">${item.date.split(' ')[1]}</span>
        </div>
      </div>
      <a href="${item.pdf}" target="_blank" class="card-text-link">
        <div class="card-text">
          <h3>${item.title}</h3>
        </div>
      </a>
    `;
    container.appendChild(card);
  });

  currentIndex += batchSize;

  // Hide Load More button if all cards are shown
  if (currentIndex >= allCards.length) {
    document.getElementById("loadMoreBtn").style.display = "none";
  }
}

// === Initial Setup ===
window.addEventListener('DOMContentLoaded', () => {
  updateNavbarAndHero();
  loadNewsCards();

  const loadMoreBtn = document.getElementById("loadMoreBtn");
  loadMoreBtn.addEventListener("click", renderNextBatch);
});
