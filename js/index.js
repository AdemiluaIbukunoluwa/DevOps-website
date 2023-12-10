
function lightMode() {
  // light mode function sets isdark to false and removes 'dark' from the classname which affects the styling
  localStorage.setItem("isdark", false);
  document.querySelector(".navigation").classList.remove("dark");
  document.querySelector("main").classList.remove("dark");
  document.querySelector("footer").classList.remove("dark");
}
function darkMode() {
  // dark mode function sets isdark to true and adds 'dark' to the classname which affects the styling
  localStorage.setItem("isdark", true);
  document.querySelector(".navigation").classList.add("dark");
  document.querySelector("main").classList.add("dark");
  document.querySelector("footer").classList.add("dark");
}
function changeMode() {
  // get the isdark from the local storage
  let isdark = localStorage.getItem("isdark");
  // is isdark is true, change to lightmode
  if (isdark == "true") {
    lightMode();
  } else {
    darkMode();
  }
}

// when each page loads, check for the value of isdark to know if the page is in dark or light mode
function loadMode() {
  let isdark = localStorage.getItem("isdark");
  if (isdark == "true") {
    darkMode();
  } else {
    lightMode();
  }
}
