document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.getElementById("navbtn");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
  });

  // Image Slider Logic
  const slides = document.querySelectorAll(".slide");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      if (i === index) slide.classList.add("active");
    });
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  if (slides.length > 0) {
    showSlide(current); // Show first slide initially
    setInterval(nextSlide, 3000); // Change every 3 seconds
  }

  // Back to Top Button
  const backToTopBtn = document.getElementById("backToTop");

  // Show/hide button on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  });

  // Smooth scroll to top
  backToTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

