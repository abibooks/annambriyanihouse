document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".current-year").forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  if (window.AOS) {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 75,
      anchorPlacement: "top-bottom"
    });
  }

  const dateInput = document.querySelector("#date");
  if (dateInput) {
    const today = new Date();
    const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10);
    dateInput.min = localDate;
  }
});