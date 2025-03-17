document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.querySelector(".mobile-menu");

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!mobileMenu.contains(event.target) && event.target !== menuToggle) {
      menuToggle.checked = false;
    }
  });

  // Close menu when clicking a link
  document.querySelectorAll(".mobile-menu a").forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.checked = false;
    });
  });
});
