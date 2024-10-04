document.addEventListener("DOMContentLoaded", function () {
  const nameForm = document.getElementById("name-form");
  const introBox = document.querySelector(".intro-box");
  const welcomeMessage = document.getElementById("welcome-message");
  const namePrompt = document.getElementById("name-prompt");
  const nameInput = document.querySelector("#name-input");

  setTimeout(() => {
    introBox.classList.add("visible");
  }, 300);

  if (nameForm) {
    nameForm.onsubmit = function (event) {
      event.preventDefault();

      introBox.classList.add("fade-out");

      setTimeout(() => {
        const nameValue = document.getElementById("name-input").value;
        localStorage.setItem("username", nameValue);

        namePrompt.style.display = "none";
        welcomeMessage.style.display = "block";

        setTimeout(() => {
          window.location.href = "index.html";
        }, 2000);
      }, 1000);
    };
  }
});
