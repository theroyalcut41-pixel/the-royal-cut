// ===== THE ROYAL CUT PREMIUM =====

// Loading Animation
window.addEventListener("load", () => {
  document.body.style.opacity = "1";
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

// Navbar Shadow
window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 80) {
    header.style.boxShadow = "0 0 20px rgba(255,215,0,.4)";
  } else {
    header.style.boxShadow = "none";
  }
});

// Gallery Animation
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
});

cards.forEach(card => {
  card.style.opacity = "0";
  card.style.transform = "translateY(50px)";
  card.style.transition = ".8s";
  observer.observe(card);
});

// Welcome Message
setTimeout(() => {
  alert("👑 Welcome to THE ROYAL CUT BY ALI RAZA");
}, 1500);
