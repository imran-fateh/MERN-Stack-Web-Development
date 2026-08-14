// ==============================
// START HEADER MOBILE MENU
// ==============================

const navbarToggle = document.querySelector(".navbar-toggle");
const navbarMenu = document.querySelector(".navbar-menu");
const navbarOverlay = document.querySelector(".navbar-overlay");
const navbarLinks = document.querySelectorAll(".navbar-link");

function openNavbar() {
  navbarMenu.classList.add("active");
  if (navbarOverlay) {
    navbarOverlay.classList.add("active");
  }
  document.body.classList.add("menu-open");
  navbarToggle.setAttribute("aria-expanded", "true");
  navbarToggle.innerHTML = '<i class="fa-solid fa-xmark"></i>';
}

function closeNavbar() {
  navbarMenu.classList.remove("active");
  if (navbarOverlay) {
    navbarOverlay.classList.remove("active");
  }
  document.body.classList.remove("menu-open");
  navbarToggle.setAttribute("aria-expanded", "false");
  navbarToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
}

if (navbarToggle && navbarMenu) {
  navbarToggle.addEventListener("click", () => {
    if (navbarMenu.classList.contains("active")) {
      closeNavbar();
    } else {
      openNavbar();
    }
  });
}

if (navbarOverlay) {
  navbarOverlay.addEventListener("click", closeNavbar);
}

navbarLinks.forEach((link) => {
  link.addEventListener("click", closeNavbar);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navbarMenu.classList.contains("active")) {
    closeNavbar();
  }
});

// ==============================
// END HEADER MOBILE MENU
// ==============================

// ==============================
// About Section JS
// ==============================

const aboutItems = document.querySelectorAll(
  ".about-content,.about-image-column,.about-card",
);

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.25,
  },
);

aboutItems.forEach((item) => {
  aboutObserver.observe(item);
});

const imageWrapper = document.querySelector(".about-image-wrapper");

if (imageWrapper) {
  imageWrapper.addEventListener("mousemove", (event) => {
    const rect = imageWrapper.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    imageWrapper.style.transform = `rotateY(${x * 8}deg) rotateX(${y * -8}deg)`;
  });

  imageWrapper.addEventListener("mouseleave", () => {
    imageWrapper.style.transform = "rotateX(0) rotateY(0)";
  });
}

const skillsItems = document.querySelectorAll(".skills-header,.skill-card");

const skillsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

// ==========================
// Skills Section JS
// ==========================

skillsItems.forEach((item) => {
  skillsObserver.observe(item);
});

document.querySelectorAll(".skill-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px)
rotateY(${x * 8}deg)
rotateX(${y * -8}deg)
translateY(-12px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

const learningItems = document.querySelectorAll(
  ".learning-header,.learning-card",
);

const learningObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

learningItems.forEach((item) => {
  learningObserver.observe(item);
});

document.querySelectorAll(".learning-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px)
rotateY(${x * 8}deg)
rotateX(${y * -8}deg)
translateY(-12px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

//===============================
// Projects Scroll Reveal
//===============================

const projectsItems = document.querySelectorAll(
  ".projects-header,.project-card",
);

const projectsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  {
    threshold: 0.2,
  },
);

projectsItems.forEach((item) => {
  projectsObserver.observe(item);
});

//===============================
// Projects Mouse Tilt
//===============================

document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mousemove", (event) => {
    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    card.style.transform = `perspective(900px)
rotateY(${x * 8}deg)
rotateX(${y * -8}deg)
translateY(-12px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
  });
});

//===============================
// START JOURNEY REVEAL
//===============================

const journeyCards = document.querySelectorAll(".journey-card");

journeyCards.forEach((card, index) => {
  card.style.setProperty("--journy-delay", `${index * 100}ms`);
});

const journeyObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        journeyObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15,
  },
);

journeyCards.forEach((card) => {
  journeyObserver.observe(card);
});
//===============================
// END JOURNEY REVEAL
//===============================

//===============================
// START JOURNEY NODE ANIMATION
//===============================

const journeyItems = document.querySelectorAll(".journey-item");

const journeyNodeObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const node = entry.target.querySelector(".journey-node");
      if (!node) return;
      if (entry.isIntersecting) {
        node.classList.add("is-active");
      } else {
        node.classList.remove("is-active");
      }
    });
  },
  {
    threshold: 0.45,
  },
);

journeyItems.forEach((item) => {
  journeyNodeObserver.observe(item);
});
//===============================
// END JOURNEY NODE ANIMATION
//===============================

//===============================
// START JOURNEY TIMELINE POLISH
//===============================

const journeyTimeline = document.querySelector(".journey-timeline");

if (journeyTimeline) {
  const timelineObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          journeyTimeline.classList.add("is-active");
        } else {
          journeyTimeline.classList.remove("is-active");
        }
      });
    },
    {
      threshold: 0.1,
    },
  );

  timelineObserver.observe(journeyTimeline);
}
//===============================
// END JOURNEY TIMELINE POLISH
//===============================

// ==============================
// START FAQ SECTION
// ==============================

const faqItems = document.querySelectorAll(".faq-item");

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

faqItems.forEach((item, index) => {
  item.style.setProperty("--faq-delay", `${index * 100}ms`);
});

if (prefersReducedMotion) {
  faqItems.forEach((item) => {
    item.classList.add("is-visible");
  });
} else {
  const faqObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");

          faqObserver.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
    },
  );

  faqItems.forEach((item) => {
    item.style.transitionDelay = item.style.getPropertyValue("--faq-delay");

    faqObserver.observe(item);
  });
}

// ==============================
// END FAQ SECTION
// ==============================

// ==============================
// START FAQ ACCORDION
// ==============================

faqItems.forEach((currentItem) => {
  currentItem.addEventListener("toggle", () => {
    if (!currentItem.open) return;

    faqItems.forEach((item) => {
      if (item !== currentItem) {
        item.removeAttribute("open");
      }
    });
  });
});

// ==============================
// END FAQ ACCORDION
// ==============================

// ==============================
// START FOOTER REVEAL
// ==============================

const footerElements = document.querySelectorAll(
  ".footer-cta,\
    .footer-contact-form,\
    .footer-column,\
    .footer-bottom",
);

footerElements.forEach((element, index) => {
  element.style.setProperty(
    "--footer-delay",

    `${index * 120}ms`,
  );
});

const footerObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("footer-visible");
        footerObserver.unobserve(entry.target);
      }
    });
  },

  {
    threshold: 0.15,
  },
);

footerElements.forEach((element) => {
  footerObserver.observe(element);
});

// ==============================
// END FOOTER REVEAL
// ==============================

// ==============================
// START BACK TO TOP
// ==============================

const backToTopButton = document.querySelector(".back-to-top");

if (backToTopButton) {
  backToTopButton.addEventListener("click", (event) => {
    event.preventDefault();

    window.scrollTo({
      top: 0,

      behavior: "smooth",
    });
  });
}

// ==============================
// END BACK TO TOP
// ==============================

// ==============================
// START CONTACT FORM
// ==============================

const footerForm = document.querySelector(".footer-contact-form form");

if (footerForm) {
  footerForm.addEventListener("submit", (event) => {
    const name = footerForm.querySelector("input[type='text']");
    const email = footerForm.querySelector("input[type='email']");
    const subject = footerForm.querySelectorAll("input")[2];
    const message = footerForm.querySelector("textarea");

    if (
      !name.value.trim() ||
      !email.value.trim() ||
      !subject.value.trim() ||
      !message.value.trim()
    ) {
      event.preventDefault();

      alert("Please complete all required fields.");
    }
  });
}

// ==============================
// END CONTACT FORM
// ==============================

// ==============================
// START REDUCED MOTION
// ==============================

const footerReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

if (footerReducedMotion) {
  footerElements.forEach((element) => {
    element.classList.add("footer-visible");
  });
}

// ==============================
// END REDUCED MOTION
// ==============================
// ==============================
// START KEYBOARD ACCESSIBILITY
// ==============================

const footerLinks = document.querySelectorAll(".footer a");

footerLinks.forEach((link) => {
  link.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      link.click();
    }
  });
});

// ==============================
// END KEYBOARD ACCESSIBILITY
// ==============================
