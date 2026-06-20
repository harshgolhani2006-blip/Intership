const form = document.getElementById("volunteerForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const inputs = form.querySelectorAll("input");
  const select = form.querySelector("select");

  const volunteer = {
    name: inputs[0].value,
    email: inputs[1].value,
    college: inputs[2].value,
    domain: select.value
  };

  const response = await fetch("https://intership-d8m7.onrender.com/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(volunteer)
  });

  const data = await response.json();

  alert(data.message);

  form.reset();
});