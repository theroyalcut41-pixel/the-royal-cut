// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

console.log("The Royal Cut Website Loaded Successfully!");
// The Royal Cut by Ali Raza

document.addEventListener("DOMContentLoaded", function () {
  console.log("The Royal Cut website loaded successfully!");

  const btn = document.querySelector(".btn");

  if (btn) {
    btn.addEventListener("click", function () {
      alert("Thank you for choosing The Royal Cut by Ali Raza!\nYou will now be redirected to WhatsApp.");
    });
  }
});
