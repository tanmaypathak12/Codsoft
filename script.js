document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");

  const fadeInOnScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      const triggerBottom = window.innerHeight - 100;

      if (rect.top < triggerBottom) {
        el.classList.add("visible");
      }
    });
  };

  window.addEventListener("scroll", fadeInOnScroll);
  fadeInOnScroll(); // initial check
});
