// START NAVIGATION ELEMENTS
const navigationGroups = document.querySelectorAll(".topic-navigation-group");
const topicNavigationLinks = document.querySelectorAll(
  ".topic-navigation-link",
);
// END NAVIGATION ELEMENTS

// START NAVIGATION GROUPS
navigationGroups.forEach((group) => {
  const groupButton = group.querySelector(".navigation-group-title");
  const groupContent = group.querySelector(".navigation-group-content");
  const groupArrow = groupButton?.querySelector(
    ".fa-chevron-up, .fa-chevron-down",
  );

  if (!groupButton || !groupContent) {
    return;
  }

  groupButton.addEventListener("click", () => {
    const isExpanded = groupButton.getAttribute("aria-expanded") === "true";

    groupButton.setAttribute("aria-expanded", String(!isExpanded));
    groupContent.hidden = isExpanded;

    if (groupArrow) {
      groupArrow.classList.toggle("fa-chevron-up", !isExpanded);
      groupArrow.classList.toggle("fa-chevron-down", isExpanded);
    }
  });

  const initialState = groupButton.getAttribute("aria-expanded") === "true";
  groupContent.hidden = !initialState;
});
// END NAVIGATION GROUPS

// START ACTIVE TOPIC
function setActiveTopic(currentLink) {
  topicNavigationLinks.forEach((link) => {
    link.classList.remove("active");
    link.removeAttribute("aria-current");
  });

  currentLink.classList.add("active");
  currentLink.setAttribute("aria-current", "page");
}

topicNavigationLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setActiveTopic(link);
  });
});
// END ACTIVE TOPIC

// START CURRENT PAGE DETECTION
function highlightCurrentPage() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  topicNavigationLinks.forEach((link) => {
    const linkPage = link.getAttribute("href")?.split("/").pop();

    if (linkPage === currentPage) {
      setActiveTopic(link);

      const parentGroup = link.closest(".topic-navigation-group");
      const parentButton = parentGroup?.querySelector(
        ".navigation-group-title",
      );
      const parentContent = parentGroup?.querySelector(
        ".navigation-group-content",
      );
      const parentArrow = parentButton?.querySelector(
        ".fa-chevron-up, .fa-chevron-down",
      );

      if (parentButton && parentContent) {
        parentButton.setAttribute("aria-expanded", "true");
        parentContent.hidden = false;

        if (parentArrow) {
          parentArrow.classList.remove("fa-chevron-down");
          parentArrow.classList.add("fa-chevron-up");
        }
      }
    }
  });
}

highlightCurrentPage();
// END CURRENT PAGE DETECTION

// START KEYBOARD NAVIGATION
topicNavigationLinks.forEach((link) => {
  link.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      link.click();
    }
  });
});
// END KEYBOARD NAVIGATION
