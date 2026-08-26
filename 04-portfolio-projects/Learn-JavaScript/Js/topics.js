// START TOPIC DATA
const javascriptTopics = [
  {
    id: "javascript-introduction",
    number: "01",
    title: "JavaScript Introduction",
    description:
      "Understand JavaScript, its history, browser engines, execution, and basic user interaction.",
    page: "Pages/introduction.html",
    level: "Beginner",
    status: "available",
    icon: "fa-brands fa-js",
    category: "Getting Started",
    subtopics: [
      "What is JavaScript?",
      "JavaScript History",
      "Browser History",
      "How Browsers Understand JavaScript",
      "JavaScript Engine",
      "Compiler vs Interpreter",
      "Just-In-Time Compilation",
      "Programming vs Scripting Language",
    ],
  },
  {
    id: "variables-user-input",
    number: "02",
    title: "Variables & User Input",
    description:
      "Learn how JavaScript stores data, declares variables, accepts input, and converts values.",
    page: "Pages/variables.html",
    level: "Beginner",
    status: "available",
    icon: "fa-solid fa-box",
    category: "JavaScript Fundamentals",
    subtopics: [
      "What is a Variable?",
      "Variable Declaration",
      "Variable Initialization",
      "var",
      "let",
      "const",
      "Redeclaration",
      "Reassignment",
      "Variable Naming Rules",
      "User Input",
    ],
  },
  {
    id: "operators-expressions",
    number: "03",
    title: "Operators & Expressions",
    description:
      "Understand operators, operands, expressions, calculations, assignments, and value changes.",
    page: "Pages/operators.html",
    level: "Beginner",
    status: "available",
    icon: "fa-solid fa-calculator",
    category: "JavaScript Fundamentals",
    subtopics: [
      "Operators",
      "Operands",
      "Expressions",
      "Arithmetic Operators",
      "Assignment Operators",
      "Compound Assignment",
      "Increment & Decrement",
      "Prefix & Postfix",
      "Operator Precedence",
    ],
  },
  {
    id: "data-types-strings",
    number: "04",
    title: "Data Types & Strings",
    description:
      "Understand JavaScript data types, type checking, strings, concatenation, and template literals.",
    page: "Pages/data-types.html",
    level: "Beginner",
    status: "available",
    icon: "fa-solid fa-database",
    category: "JavaScript Fundamentals",
    subtopics: [
      "What are Data Types?",
      "Primitive Data Types",
      "Non-Primitive Data Types",
      "typeof Operator",
      "Number",
      "String",
      "Boolean",
      "Undefined",
      "Null",
      "Symbol",
      "BigInt",
      "String Concatenation",
      "Template Literals",
    ],
  },
];
// END TOPIC DATA

// START TOPIC HELPERS
function getAvailableTopics() {
  return javascriptTopics.filter((topic) => topic.status === "available");
}

function getTopicById(topicId) {
  return javascriptTopics.find((topic) => topic.id === topicId);
}

function getTopicByPage(pageName) {
  return javascriptTopics.find((topic) => topic.page.endsWith(pageName));
}

function getTopicIndex(topicId) {
  return javascriptTopics.findIndex((topic) => topic.id === topicId);
}
// END TOPIC HELPERS

// START TOPIC STATISTICS
function updateTopicStatistics() {
  const availableTopics = getAvailableTopics();
  const totalSubtopics = availableTopics.reduce(
    (total, topic) => total + topic.subtopics.length,
    0,
  );

  document.querySelectorAll("[data-topic-count]").forEach((element) => {
    element.textContent = availableTopics.length;
  });

  document.querySelectorAll("[data-subtopic-count]").forEach((element) => {
    element.textContent = totalSubtopics;
  });
}
// END TOPIC STATISTICS

// START TOPIC CARD DATA
function updateTopicCardData() {
  document.querySelectorAll(".topic-card").forEach((card) => {
    const titleElement = card.querySelector("h3");
    const link = card.querySelector(".topic-card-link");

    if (!titleElement || !link) {
      return;
    }

    const topic = javascriptTopics.find(
      (item) => item.title === titleElement.textContent.trim(),
    );

    if (!topic) {
      return;
    }

    card.dataset.topicId = topic.id;
    link.href = topic.page;

    const descriptionElement = card.querySelector(".topic-card-content p");

    if (descriptionElement) {
      descriptionElement.textContent = topic.description;
    }

    const metaElements = card.querySelectorAll(".topic-card-meta span");

    if (metaElements[0]) {
      metaElements[0].innerHTML = `<i class="fa-solid fa-list" aria-hidden="true"></i> ${topic.subtopics.length} Subtopics`;
    }

    if (metaElements[1]) {
      metaElements[1].innerHTML = `<i class="fa-solid fa-signal" aria-hidden="true"></i> ${topic.level}`;
    }
  });
}
// END TOPIC CARD DATA

// START TOPIC NAVIGATION DATA
function updateTopicNavigationData() {
  document.querySelectorAll(".topic-navigation-link").forEach((link) => {
    const linkPage = link.getAttribute("href");

    if (!linkPage) {
      return;
    }

    const topic = getTopicByPage(linkPage.split("/").pop());

    if (!topic) {
      return;
    }

    link.dataset.topicId = topic.id;
    link.setAttribute("aria-label", `Open ${topic.title}`);
  });
}
// END TOPIC NAVIGATION DATA

// START TOPIC SEARCH
function initializeTopicSearch() {
  const searchInput = document.getElementById("topic-search");

  if (!searchInput) {
    return;
  }

  const topicCards = document.querySelectorAll(".topic-card");

  searchInput.addEventListener("input", (event) => {
    const searchTerm = event.target.value.trim().toLowerCase();

    topicCards.forEach((card) => {
      const topicId = card.dataset.topicId;
      const topic = getTopicById(topicId);

      if (!topic) {
        return;
      }

      const searchableContent = [
        topic.title,
        topic.description,
        topic.category,
        topic.level,
        ...topic.subtopics,
      ]
        .join(" ")
        .toLowerCase();

      const matches = searchableContent.includes(searchTerm);

      card.hidden = !matches;
    });
  });
}
// END TOPIC SEARCH

// START TOPIC INITIALIZATION
function initializeTopics() {
  updateTopicStatistics();
  updateTopicCardData();
  updateTopicNavigationData();
  initializeTopicSearch();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeTopics);
} else {
  initializeTopics();
}
// END TOPIC INITIALIZATION
