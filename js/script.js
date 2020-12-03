const burgerMenu = document.querySelector(".menuIcon");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".close-icon");
const dropDownMenu = document.querySelector(".burgerMenu");

burgerMenu.addEventListener("click", function () {
  menuIcon.classList.toggle("icon--inactive");
  closeIcon.classList.toggle("icon--inactive");
  if (menuIcon.classList.contains("icon--inactive")) {
    dropDownMenu.classList.add("burgerMenu--active");
  } else {
    dropDownMenu.classList.remove("burgerMenu--active");
  }
});
