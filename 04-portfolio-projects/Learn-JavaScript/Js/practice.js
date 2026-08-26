// START PRACTICE ELEMENTS
const practiceStartButtons = document.querySelectorAll(
  ".practice-start-button",
);
const practiceCards = document.querySelectorAll(".practice-card");
// END PRACTICE ELEMENTS

// START PRACTICE STATE
const practiceState = {
  currentTopic: null,
  currentQuestion: 0,
  score: 0,
  completed: false,
};
// END PRACTICE STATE

// START PRACTICE HELPERS
function getPracticeTopic(topicId) {
  if (typeof getTopicById !== "function") {
    return null;
  }

  return getTopicById(topicId);
}

function resetPracticeState() {
  practiceState.currentTopic = null;
  practiceState.currentQuestion = 0;
  practiceState.score = 0;
  practiceState.completed = false;
}
// END PRACTICE HELPERS

// START PRACTICE BUTTONS
function initializePracticeButtons() {
  practiceStartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const topicId = button.dataset.topicId;

      if (!topicId) {
        event.preventDefault();
        console.info("Practice system is ready for topic-based exercises.");
        return;
      }

      const topic = getPracticeTopic(topicId);

      if (!topic) {
        event.preventDefault();
        console.warn(`Practice topic not found: ${topicId}`);
        return;
      }

      resetPracticeState();
      practiceState.currentTopic = topic.id;

      console.info(`Practice started: ${topic.title}`);
    });
  });
}
// END PRACTICE BUTTONS

// START PRACTICE CARD INTERACTION
function initializePracticeCards() {
  practiceCards.forEach((card) => {
    card.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") {
        return;
      }

      const practiceButton = card.querySelector(".practice-start-button");

      if (!practiceButton) {
        return;
      }

      event.preventDefault();
      practiceButton.click();
    });
  });
}
// END PRACTICE CARD INTERACTION

// START PRACTICE INITIALIZATION
function initializePractice() {
  initializePracticeButtons();
  initializePracticeCards();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializePractice);
} else {
  initializePractice();
}
// END PRACTICE INITIALIZATION
