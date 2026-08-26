// START GLOBAL ELEMENTS
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const mobileMenuToggle = document.getElementById("mobile-menu-toggle");
const sidebar = document.getElementById("sidebar");
const sidebarCloseButton = document.getElementById("sidebar-close-button");
const sidebarOverlay = document.getElementById("sidebar-overlay");
const backToTopButton = document.getElementById("back-to-top");
// END GLOBAL ELEMENTS

// START THEME MANAGEMENT
const savedTheme = localStorage.getItem("learnJavaScriptTheme");

if (savedTheme === "dark") {
  body.classList.add("dark-mode");
}

function updateThemeButton() {
  if (!themeToggle) {
    return;
  }

  const isDarkMode = body.classList.contains("dark-mode");
  const icon = themeToggle.querySelector("i");
  const label = themeToggle.querySelector("span");

  themeToggle.setAttribute("aria-pressed", String(isDarkMode));

  if (icon) {
    icon.className = isDarkMode ? "fa-solid fa-sun" : "fa-solid fa-moon";
  }

  if (label) {
    label.textContent = isDarkMode ? "Light Mode" : "Dark Mode";
  }
}

function toggleTheme() {
  const isDarkMode = body.classList.toggle("dark-mode");

  localStorage.setItem("learnJavaScriptTheme", isDarkMode ? "dark" : "light");

  updateThemeButton();
}

themeToggle?.addEventListener("click", toggleTheme);

updateThemeButton();
// END THEME MANAGEMENT

// START MOBILE SIDEBAR
function openSidebar() {
  sidebar?.classList.add("is-open");
  sidebarOverlay?.classList.add("is-visible");
  mobileMenuToggle?.setAttribute("aria-expanded", "true");
  body.classList.add("sidebar-open");
}

function closeSidebar() {
  sidebar?.classList.remove("is-open");
  sidebarOverlay?.classList.remove("is-visible");
  mobileMenuToggle?.setAttribute("aria-expanded", "false");
  body.classList.remove("sidebar-open");
}

mobileMenuToggle?.addEventListener("click", openSidebar);
sidebarCloseButton?.addEventListener("click", closeSidebar);
sidebarOverlay?.addEventListener("click", closeSidebar);

document.querySelectorAll(".topic-navigation-link").forEach((link) => {
  link.addEventListener("click", () => {
    closeSidebar();
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    closeSidebar();
  }
});
// END MOBILE SIDEBAR

// START BACK TO TOP
function updateBackToTopButton() {
  if (!backToTopButton) {
    return;
  }

  if (window.scrollY > 400) {
    backToTopButton.classList.add("visible");
  } else {
    backToTopButton.classList.remove("visible");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

window.addEventListener("scroll", updateBackToTopButton);
backToTopButton?.addEventListener("click", scrollToTop);

updateBackToTopButton();
// END BACK TO TOP

// START KEYBOARD SHORTCUTS
document.addEventListener("keydown", (event) => {
  const isSearchShortcut =
    (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k";

  if (isSearchShortcut) {
    event.preventDefault();

    const searchInput = document.getElementById("topic-search");

    if (searchInput) {
      searchInput.focus();
    }
  }

  if (event.key === "Escape") {
    closeSidebar();
  }
});
// END KEYBOARD SHORTCUTS

// START PAGE INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("page-ready");
});
// END PAGE INITIALIZATION
