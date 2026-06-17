const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");
const contactForm = document.getElementById("contactForm");
const formMsg = document.getElementById("formMsg");

menuBtn.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  });
});

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  formMsg.hidden = false;
  contactForm.reset();

  setTimeout(() => {
    formMsg.hidden = true;
  }, 4000);
});
