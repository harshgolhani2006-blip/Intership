const darkModeBtn = document.getElementById("darkModeBtn");

darkModeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

const form = document.getElementById("volunteerForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  alert("Volunteer Registration Successful!");

  form.reset();
});