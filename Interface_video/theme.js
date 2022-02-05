let darkMode = localStorage.getItem("darkMode");
const darkModeToggle = document.querySelector('#dark-mode-toggle');

console.log(darkMode);

const enableDarkMode = () => {
  // add the class darkmode to the body
  document.body.classList.add("darkMode")
  var button = document.getElementById("button-switch-theme");
  button.classList.add('bx-rotate-180');
  // update darkMode in the localStorage
  localStorage.setItem("darkMode", "enable");
};

const disableDarkMode = () => {
  // add the class darkmode to the body
  document.body.classList.remove("darkMode", "bx-rotate-180");
  var button = document.getElementById("button-switch-theme");
  button.classList.remove('bx-rotate-180');
  // update darkMode in the localStorage
  localStorage.setItem("darkMode", null);
};

if (darkMode === "enable") {
  enableDarkMode();
}

darkModeToggle.addEventListener('click', () => {
  darkMode = localStorage.getItem('darkMode');
  if (darkMode !== "enable") {
    enableDarkMode();
    console.log(darkMode);
  } else {
    disableDarkMode();
    console.log(darkMode);
  }
});





/*var count = 0;
sessionStorage.setItem('count', count);
console.log(sessionStorage.getItem('count'));

document.querySelector('.switch_theme').addEventListener
('click', () => {
  var header = document.getElementById("header");
  header.classList.toggle('dark');
  var body = document.getElementById("body");
  body.classList.toggle('dark');
  var main = document.getElementById("main");
  main.classList.toggle('dark');
  var button = document.getElementById("button-switch-theme");
  button.classList.toggle('bx-rotate-180')
  count ++;
});*/

/*window.onload = function() {
  var header = document.getElementById("header");
  header.classList.toggle('dark');
  var body = document.getElementById("body");
  body.classList.toggle('dark');
  var main = document.getElementById("main");
  main.classList.toggle('dark');
  var button = document.getElementById("button-switch-theme");
  button.classList.toggle('bx-rotate-180')
};*/
