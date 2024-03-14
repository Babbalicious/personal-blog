// Access toggle switch HTML element
const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

// Set default mode to light
let mode = "light";

// Listen for a click event on toggle switch
themeSwitcher.addEventListener("click", function () {
  console.log("clicked it");
  // If mode is dark, apply light background
  if (mode === "dark") {
    mode = "light";
    container.setAttribute("class", "light");
    themeSwitcher.setAttribute("src", "./assets/images/sun-icon.png");
  }
  // If mode is light, apply dark background
  else {
    mode = "dark";
    container.setAttribute("class", "dark");
    themeSwitcher.setAttribute("src", "./assets/images/moon-icon.png");
  }
});
