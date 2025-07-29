document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("gasForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const data = new URLSearchParams(new FormData(form));
      fetch(
        "https://script.google.com/macros/s/AKfycbzc9_EEADMKLglusl31eEtQ-3yNCguT973dXgoDBDuKqHvMa_q4_iaAQk7pP1ZsbfcX/exec" +
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
