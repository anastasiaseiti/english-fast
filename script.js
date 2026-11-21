const menuButton = document.querySelector(".menu-button");
const mainNav = document.querySelector(".main-nav");

menuButton.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const modal = document.getElementById("demo-modal");
const openModal = document.getElementById("watch-demo");
const closeModal = modal.querySelector(".modal-close");

openModal.addEventListener("click", () => {
  modal.hidden = false;
  closeModal.focus();
});

closeModal.addEventListener("click", () => {
  modal.hidden = true;
  openModal.focus();
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.hidden = true;
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !modal.hidden) {
    modal.hidden = true;
    openModal.focus();
  }
});
