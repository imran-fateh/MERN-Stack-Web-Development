const statusMessages = [
  "Currently Learning — JavaScript",
  "Growing — One Project at a Time",
  "Exploring — Modern Web Technologies",
  "Focused On — Frontend Development",
  "Building — Better User Experiences",
];

const statusElement = document.querySelector(".status-message");

let currentMessage = 0;

setInterval(() => {
  currentMessage = (currentMessage + 1) % statusMessages.length;

  statusElement.classList.add("status-changing");

  setTimeout(() => {
    statusElement.textContent = statusMessages[currentMessage];

    statusElement.classList.remove("status-changing");
  }, 300);
}, 4000);

// ==============================
// START RESPONSIVE NAVIGATION
// ==============================

const menuToggle = document.querySelector(".menu-toggle");
const mobileNavigation = document.querySelector(".mobile-navigation");
const navbarOverlay = document.querySelector(".navbar-overlay");
const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

const openMobileNavigation = () => {
  if (!menuToggle || !mobileNavigation) return;

  menuToggle.classList.add("active");
  mobileNavigation.classList.add("active");
  navbarOverlay?.classList.add("active");

  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Close navigation");

  document.body.classList.add("menu-open");
};

const closeMobileNavigation = () => {
  if (!menuToggle || !mobileNavigation) return;

  menuToggle.classList.remove("active");
  mobileNavigation.classList.remove("active");
  navbarOverlay?.classList.remove("active");

  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Open navigation");

  document.body.classList.remove("menu-open");
};

const toggleMobileNavigation = () => {
  const isOpen = mobileNavigation?.classList.contains("active");

  if (isOpen) {
    closeMobileNavigation();
  } else {
    openMobileNavigation();
  }
};

if (menuToggle && mobileNavigation) {
  menuToggle.addEventListener("click", toggleMobileNavigation);
}

if (navbarOverlay) {
  navbarOverlay.addEventListener("click", closeMobileNavigation);
}

mobileNavLinks.forEach((link) => {
  link.addEventListener("click", closeMobileNavigation);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMobileNavigation();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 1024) {
    closeMobileNavigation();
  }
});

// ==============================
// END RESPONSIVE NAVIGATION
// ==============================

// ==============================
// START ACTIVE NAVIGATION
// ==============================

const sections = document.querySelectorAll("main section[id]");

const allNavigationLinks = document.querySelectorAll(
  ".desktop-nav a, .mobile-navigation a",
);

const updateActiveNavigation = () => {
  if (!sections.length || !allNavigationLinks.length) return;

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 160;

    if (window.scrollY >= sectionTop) {
      currentSection = section.id;
    }
  });

  allNavigationLinks.forEach((link) => {
    const linkTarget = link.getAttribute("href");

    link.classList.toggle("active", linkTarget === `#${currentSection}`);
  });
};

window.addEventListener("scroll", updateActiveNavigation, { passive: true });

window.addEventListener("load", updateActiveNavigation);

// ==============================
// END ACTIVE NAVIGATION
// ==============================

// ==============================
//  START SCROLL REVEAL
// ==============================
const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
    },
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach((element) => {
    element.classList.add("is-visible");
  });
}
// ==============================
/* END SCROLL REVEAL */
// ==============================

// ==============================
/* START SCROLL TO TOP */
// ==============================
const scrollTopButton = document.querySelector(".scroll-top");

if (scrollTopButton) {
  const updateScrollButton = () => {
    scrollTopButton.classList.toggle("show", window.scrollY > 500);
  };

  window.addEventListener("scroll", updateScrollButton, {
    passive: true,
  });

  scrollTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  updateScrollButton();
}
// ==============================
/* END SCROLL TO TOP */
// ==============================

// ==============================
//  START FAQ ACCORDION
// ==============================
document.addEventListener("DOMContentLoaded", () => {
  const faqQuestions = document.querySelectorAll(".faq-question");

  faqQuestions.forEach((question) => {
    question.addEventListener("click", () => {
      const faqItem = question.closest(".faq-item");
      const faqAnswer = faqItem.querySelector(".faq-answer");
      const faqToggle = question.querySelector(".faq-toggle");

      const isOpen = faqItem.classList.contains("is-open");

      if (isOpen) {
        closeFaqItem(faqItem, question, faqAnswer, faqToggle);
      } else {
        openFaqItem(faqItem, question, faqAnswer, faqToggle);
      }
    });
  });

  // ==============================
  // OPEN FAQ
  // ==============================
  function openFaqItem(faqItem, question, faqAnswer, faqToggle) {
    faqItem.classList.add("is-open");

    question.setAttribute("aria-expanded", "true");

    faqAnswer.hidden = false;

    faqAnswer.style.height = "0px";

    requestAnimationFrame(() => {
      faqAnswer.style.height = `${faqAnswer.scrollHeight}px`;
    });

    faqToggle.setAttribute("aria-label", "Close answer");
  }

  // ==============================
  // CLOSE FAQ
  // ==============================

  function closeFaqItem(faqItem, question, faqAnswer, faqToggle) {
    faqAnswer.style.height = `${faqAnswer.scrollHeight}px`;

    requestAnimationFrame(() => {
      faqAnswer.style.height = "0px";
    });

    faqItem.classList.remove("is-open");

    question.setAttribute("aria-expanded", "false");

    faqToggle.setAttribute("aria-label", "Open answer");

    faqAnswer.addEventListener(
      "transitionend",
      () => {
        if (!faqItem.classList.contains("is-open")) {
          faqAnswer.hidden = true;
        }
      },
      { once: true },
    );
  }

  // ==========================================
  //  RESET ANSWER HEIGHT AFTER OPEN ANIMATION
  // ==========================================
  faqQuestions.forEach((question) => {
    const faqItem = question.closest(".faq-item");
    const faqAnswer = faqItem.querySelector(".faq-answer");

    faqAnswer.addEventListener("transitionend", (event) => {
      if (
        event.propertyName === "height" &&
        faqItem.classList.contains("is-open")
      ) {
        faqAnswer.style.height = "auto";
      }
    });
  });

  // ==========================================
  // HANDLE WINDOW RESIZE
  // ==========================================
  window.addEventListener("resize", () => {
    document.querySelectorAll(".faq-item.is-open").forEach((faqItem) => {
      const faqAnswer = faqItem.querySelector(".faq-answer");

      faqAnswer.style.height = "auto";
    });
  });
});
// ==========================================
//  END FAQ ACCORDION
// ==========================================
