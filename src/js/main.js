const vimberly = document.getElementById("vimberly");
const toggleBtn = document.getElementById("toggle");
const circle = document.getElementById("circle");
const title = document.getElementById("title");

let isDarkMode;

// Helper function to easily switch theme
function switchTheme(theme) {
  if (theme === "light") {
    vimberly.classList.add("theme-light");
    vimberly.classList.remove("theme-dark");
    circle.style.left = "10%";
    isDarkMode = false;
  } else if (theme === "dark") {
    vimberly.classList.add("theme-dark");
    vimberly.classList.remove("theme-light");
    circle.style.left = "55%";
    isDarkMode = true;
  }
}

// Check for browser prefered theme setting
(() => {
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? switchTheme("dark")
    : switchTheme("light");
})();

// Toggle button logic
toggleBtn.addEventListener("click", () => {
  isDarkMode ? switchTheme("light") : switchTheme("dark");
});
