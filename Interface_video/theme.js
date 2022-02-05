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
});

document.querySelector('.')
