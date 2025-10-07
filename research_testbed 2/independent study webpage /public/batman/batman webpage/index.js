// Smooth scroll for navigation buttons
document.getElementById("btnOrigin").addEventListener("click", () => {
  document.getElementById("origin").scrollIntoView({ behavior: "smooth" });
});
document.getElementById("btnRogues").addEventListener("click", () => {
  document.getElementById("rogues").scrollIntoView({ behavior: "smooth" });
});

// Section fade-in on scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach((sec) => {
    const rect = sec.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      sec.classList.add("visible");
    }
  });
});
