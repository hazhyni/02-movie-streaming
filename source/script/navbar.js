document.addEventListener("DOMContentLoaded", function () {
  var element = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      element.classList.add("scrolled");
    } else {
      element.classList.remove("scrolled");
    }
  });
});
