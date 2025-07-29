document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("gasForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new URLSearchParams(new FormData(form));
      fetch(
        "https://script.google.com/macros/s/AKfycbzza6mau7sKo0tF0j-V2KaWZ6R0HWceozGriI6aHtM/dev" +
          data,
        {
          method: "GET",
          mode: "no-cors",
        }
      ).then(() => {
        window.location.href = "./index.html";
      });
    });
  }
});
