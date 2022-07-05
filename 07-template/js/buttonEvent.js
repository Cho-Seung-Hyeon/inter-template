
const button = document.querySelector('.button');
const menu = document.querySelector('.gnb');
const icon = document.querySelector('.util');

console.log("hello");

button.addEventListener("click", () => {
  menu.classList.toggle("view");
  console.log("click")
});