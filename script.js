// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const text = "I am a ServiceNow Admin and Developer";
    const el = document.getElementById("typed-text");
    let idx = 0;
    const speed = 100; // speed in ms
  
    function typeWriter() {
      if (idx < text.length) {
        el.textContent += text.charAt(idx);
        idx++;
        setTimeout(typeWriter, speed);
      }
    }
  
    typeWriter();
  });
  