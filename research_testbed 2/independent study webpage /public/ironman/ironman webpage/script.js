// Smooth scrolling for nav buttons
document.querySelectorAll(".btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-target");
      document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Fade-in on scroll
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", () => {
    sections.forEach(sec => {
      const rect = sec.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) sec.classList.add("visible");
    });
  });
  
  // Arc reactor sparks
  const hero = document.querySelector(".hero");
  for (let i = 0; i < 25; i++) {
    const spark = document.createElement("div");
    spark.classList.add("spark");
    spark.style.left = Math.random() * 100 + "vw";
    spark.style.animationDuration = 3 + Math.random() * 4 + "s";
    spark.style.animationDelay = Math.random() * 5 + "s";
    hero.appendChild(spark);
  }
  