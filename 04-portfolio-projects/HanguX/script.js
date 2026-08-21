/* ======================================================
   START COURSE FILTER
========================================================= */
const courseFilterButtons = document.querySelectorAll(".course-filter-btn");
const courseCards = document.querySelectorAll(".course-card");

courseFilterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    courseFilterButtons.forEach((filterButton) => {
      filterButton.classList.remove("active");
    });

    button.classList.add("active");

    courseCards.forEach((card) => {
      const cardCategory = card.dataset.category;

      card.classList.remove("is-visible");

      if (selectedCategory === "all" || cardCategory === selectedCategory) {
        card.classList.remove("is-hidden");

        requestAnimationFrame(() => {
          card.classList.add("is-visible");
        });
      } else {
        card.classList.add("is-hidden");
      }
    });
  });
});
/* ======================================================
   END COURSE FILTER
========================================================= */

/* ======================================================
   START HANGUX EXPLORE DATA
========================================================= */
const hanguxExploreData = [
  {
    id: "about",
    name: "About HanguX",
    icon: "fa-circle-info",
    questions: [
      {
        icon: "fa-lightbulb",
        question: "What is HanguX?",
        answer:
          "HanguX is a technology-focused learning platform designed to bring structured learning, practical resources, projects, AI-assisted learning, and useful digital tools closer to learners in Hangu.",
      },
      {
        icon: "fa-bullseye",
        question: "Why was HanguX created?",
        answer:
          "HanguX was created to make technology learning more accessible and practical by connecting learners with structured paths, useful resources, projects, and modern learning tools.",
      },
      {
        icon: "fa-users",
        question: "Who is HanguX for?",
        answer:
          "HanguX is designed for students, beginners, self-learners, aspiring developers, and anyone interested in developing practical technology and digital skills.",
      },
      {
        icon: "fa-compass",
        question: "What can I explore on HanguX?",
        answer:
          "Visitors can explore learning paths, technology topics, practical projects, learning resources, HanguX AI, My Learning Notes, and other parts of the platform.",
      },
      {
        icon: "fa-location-dot",
        question: "Why is Hangu important to HanguX?",
        answer:
          "HanguX is built with local learners in mind, aiming to make useful technology learning and digital opportunities easier to discover while encouraging a stronger learning culture in the community.",
      },
    ],
  },

  {
    id: "getting-started",
    name: "Getting Started",
    icon: "fa-route",
    questions: [
      {
        icon: "fa-play",
        question: "Where should I start?",
        answer:
          "Start by exploring the Learning Paths section and choose a direction that matches your current interests, knowledge, and learning goals.",
      },
      {
        icon: "fa-map",
        question: "How do I choose a learning path?",
        answer:
          "Review the available paths and begin with the area that best matches what you want to learn. You can gradually explore other areas as your skills develop.",
      },
      {
        icon: "fa-seedling",
        question: "Can beginners use HanguX?",
        answer:
          "Yes. HanguX is designed to support learners at different stages, including people who are just beginning to explore computer science and technology.",
      },
      {
        icon: "fa-clock",
        question: "Can I learn at my own pace?",
        answer:
          "Yes. HanguX supports self-paced learning through structured paths, resources, practical work, and tools that learners can use according to their own progress.",
      },
      {
        icon: "fa-arrow-right",
        question: "What should I do after choosing a path?",
        answer:
          "Follow the learning direction, study the recommended concepts, practice what you learn, build projects, and use HanguX tools such as AI and My Learning Notes when they are useful.",
      },
    ],
  },

  {
    id: "ai",
    name: "HanguX AI",
    icon: "fa-wand-magic-sparkles",
    questions: [
      {
        icon: "fa-robot",
        question: "What is HanguX AI?",
        answer:
          "HanguX AI is planned as an AI-powered learning companion that can help learners understand technology, explore ideas, solve learning problems, and work through difficult concepts.",
      },
      {
        icon: "fa-circle-question",
        question: "How can HanguX AI help while learning?",
        answer:
          "Learners can use HanguX AI to ask questions, clarify concepts, explore technical topics, understand difficult information, and receive learning assistance when needed.",
      },
      {
        icon: "fa-code",
        question: "Can HanguX AI help with coding?",
        answer:
          "The planned HanguX AI experience can support coding-related learning by helping learners understand concepts, review problems, explain code, and explore development topics.",
      },
      {
        icon: "fa-book-open",
        question: "Can AI help me understand difficult topics?",
        answer:
          "Yes. AI can be used as an interactive learning companion to explain difficult concepts in simpler ways, provide examples, and help learners investigate questions step by step.",
      },
      {
        icon: "fa-arrow-up-right-from-square",
        question: "Where can I access HanguX AI?",
        answer:
          "HanguX AI will have its own dedicated page within the HanguX platform. The homepage will provide a clear route to that experience.",
      },
    ],
  },

  {
    id: "notes",
    name: "My Learning Notes",
    icon: "fa-note-sticky",
    questions: [
      {
        icon: "fa-bookmark",
        question: "What is My Learning Notes?",
        answer:
          "My Learning Notes is planned as a personal space where learners can save useful information, learning points, explanations, ideas, and other knowledge they want to keep for later.",
      },
      {
        icon: "fa-floppy-disk",
        question: "Why should I save learning information?",
        answer:
          "Saving useful information makes it easier to return to important concepts later instead of searching for the same explanation or resource again.",
      },
      {
        icon: "fa-pen-to-square",
        question: "Can I create my own notes?",
        answer:
          "Yes. The planned notes experience is intended to let learners create and organize their own learning notes as they continue exploring technology.",
      },
      {
        icon: "fa-robot",
        question: "How does My Notes connect with HanguX AI?",
        answer:
          "The planned experience connects learning with personal knowledge: after using HanguX AI or discovering useful information, learners can move to My Learning Notes and save what they want to remember.",
      },
      {
        icon: "fa-arrow-up-right-from-square",
        question: "Where can I access My Learning Notes?",
        answer:
          "My Learning Notes will have its own dedicated page. HanguX can guide learners from useful learning content toward their personal notes space.",
      },
    ],
  },

  {
    id: "platform",
    name: "Platform & Future",
    icon: "fa-layer-group",
    questions: [
      {
        icon: "fa-laptop-code",
        question: "What technology areas can I explore?",
        answer:
          "HanguX focuses on areas such as computer science fundamentals, programming, web development, modern development tools, AI, and other relevant digital technologies.",
      },
      {
        icon: "fa-diagram-project",
        question: "Where can I find practical projects?",
        answer:
          "The Practical Projects section is designed to connect learning with hands-on work, giving learners ideas and directions for turning knowledge into practical projects.",
      },
      {
        icon: "fa-book",
        question: "Where can I find useful learning resources?",
        answer:
          "The Knowledge Hub is planned to organize useful resources such as roadmaps, guides, references, tutorials, and documentation in one place.",
      },
      {
        icon: "fa-users",
        question: "Will HanguX continue to grow?",
        answer:
          "Yes. HanguX is designed as a growing platform. New learning experiences, tools, resources, AI capabilities, and other useful features can be added as the platform develops.",
      },
      {
        icon: "fa-rocket",
        question: "What is the bigger idea behind HanguX?",
        answer:
          "The goal is to build a connected learning ecosystem where learners can discover what to learn, practice it, build with it, use AI for assistance, save useful knowledge, and continue developing their skills.",
      },
    ],
  },
];
/* =========================================================
   END HANGUX EXPLORE DATA
========================================================= */

const hanguxCategoryList = document.getElementById("hanguxCategoryList");
const hanguxQuestionsList = document.getElementById("hanguxQuestionsList");
const hanguxEmptyState = document.getElementById("hanguxEmptyState");

let hanguxActiveCategory = "about";

/* START RENDER CATEGORIES */
function renderHanguxCategories() {
  hanguxCategoryList.innerHTML = hanguxExploreData
    .map((category) => {
      const isActive = category.id === hanguxActiveCategory;

      return `
            <button
                class="hangux-category-button ${isActive ? "active" : ""}"
                type="button"
                data-category="${category.id}"
                aria-pressed="${isActive}"
            >

                <span class="hangux-category-icon">
                    <i class="fa-solid ${category.icon}"></i>
                </span>

                <span class="hangux-category-info">

                    <span class="hangux-category-name">
                        ${category.name}
                    </span>

                    <span class="hangux-category-count">
                        ${category.questions.length} topics
                    </span>

                </span>

                <span class="hangux-category-arrow">
                    <i class="fa-solid fa-chevron-right"></i>
                </span>

            </button>
        `;
    })
    .join("");
}
/* END RENDER CATEGORIES */

/* START RENDER QUESTIONS */
function renderHanguxQuestions() {
  const activeCategory = hanguxExploreData.find(
    (category) => category.id === hanguxActiveCategory,
  );

  hanguxQuestionsList.innerHTML = "";

  if (!activeCategory || !activeCategory.questions.length) {
    hanguxEmptyState.style.display = "block";

    return;
  }

  hanguxEmptyState.style.display = "none";

  activeCategory.questions.forEach((item, index) => {
    const questionCard = document.createElement("article");

    questionCard.className = "hangux-question-card";

    questionCard.innerHTML = `

            <button
                class="hangux-question-button"
                type="button"
                aria-expanded="false"
            >

                <span class="hangux-question-icon">
                    <i class="fa-solid ${item.icon}"></i>
                </span>

                <span class="hangux-question-text">
                    ${item.question}
                </span>

                <span
                    class="hangux-question-toggle"
                    aria-hidden="true"
                >
                    +
                </span>

            </button>

            <div class="hangux-question-answer">

                <div class="hangux-question-answer-inner">
                    ${item.answer}
                </div>

            </div>

        `;

    const questionButton = questionCard.querySelector(
      ".hangux-question-button",
    );

    questionButton.addEventListener("click", () => {
      const isOpen = questionCard.classList.toggle("open");

      questionButton.setAttribute("aria-expanded", String(isOpen));
    });

    hanguxQuestionsList.appendChild(questionCard);
  });
}
/* END RENDER QUESTIONS */

/* START CATEGORY FILTER */
hanguxCategoryList.addEventListener("click", (event) => {
  const categoryButton = event.target.closest(".hangux-category-button");

  if (!categoryButton) return;

  hanguxActiveCategory = categoryButton.dataset.category;

  renderHanguxCategories();
  renderHanguxQuestions();
});

/* START INITIAL RENDER */
renderHanguxCategories();
renderHanguxQuestions();
/* ======================================================
   END HANGUX EXPLORE APP
========================================================= */
