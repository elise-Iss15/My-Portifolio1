// Smooth scroll for links
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});
// Button interaction
document.querySelector(".btn").addEventListener("click", () => {
  alert("Thanks for reaching out, feel free to tell me anything in the message box!");
});

// Contact form
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you! Your message has been sent.");
    this.reset();
  });
// Button interaction
document.querySelector(".btn").addEventListener("click", () => {
  alert("Thanks for reaching out, Elyse will get back to you soon!");
});
