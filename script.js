// ============================
// DARK MODE
// ============================

const darkModeBtn = document.getElementById("darkModeBtn");

if (darkModeBtn) {
darkModeBtn.addEventListener("click", () => {
document.body.classList.toggle("dark-mode");


    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "☀️";
    } else {
        darkModeBtn.textContent = "🌙";
    }
});

}

// ============================
// AUTO FOOTER YEAR
// ============================

const year = document.getElementById("year");

if (year) {
year.textContent = new Date().getFullYear();
}

// ============================
// JOIN US BUTTON
// ============================

const joinBtn = document.querySelector(".hero button");

if (joinBtn) {
joinBtn.addEventListener("click", () => {
document.getElementById("volunteer").scrollIntoView({
behavior: "smooth"
});
});
}

// ============================
// VOLUNTEER REGISTRATION FORM
// ============================

const volunteerForm = document.getElementById("volunteerForm");

if (volunteerForm) {
volunteerForm.addEventListener("submit", async (e) => {

    e.preventDefault();

    const submitBtn =
        volunteerForm.querySelector('button[type="submit"]');

    submitBtn.disabled = true;
    submitBtn.textContent = "Submitting...";

    try {

        const inputs =
            volunteerForm.querySelectorAll("input");

        const select =
            volunteerForm.querySelector("select");

        const volunteer = {
            name: inputs[0].value,
            email: inputs[1].value,
            college: inputs[2].value,
            domain: select.value
        };

        const response = await fetch(
            "https://intership-s66q.onrender.com",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(volunteer)
            }
        );

        const text = await response.text();

        let data;

        try {
            data = JSON.parse(text);
        } catch {
            throw new Error("Backend is not returning JSON");
        }

        alert(data.message || "Registration Successful!");

        volunteerForm.reset();

    } catch (error) {

        console.error("Error:", error);

        alert("Backend error or invalid response.");

    } finally {

        submitBtn.disabled = false;
        submitBtn.textContent = "Register";
    }
});

}

// ============================
// CONTACT FORM
// ============================

const contactForm = document.querySelector("#contact form");

if (contactForm) {

contactForm.addEventListener("submit", (e) => {

    e.preventDefault();

    alert("Thank you for contacting us!");

    contactForm.reset();
});

}