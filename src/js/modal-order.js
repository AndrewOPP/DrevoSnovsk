  const elements = {
    openMenuBtn: document.querySelector('.hero-button'),
    closeMenuBtn: document.querySelector('.modal-order-form-close-button'),
    openMenuBtnSec: document.querySelector('.header-modal-information-button'),
    menu: document.querySelector('.modal-order-backdrop'),
};
if (elements.openMenuBtn)
elements.openMenuBtn.addEventListener("click", () => {
  elements.menu.style.display = "flex"
})
elements.closeMenuBtn.addEventListener("click", () => {
  elements.menu.style.display = "none"
})

elements.openMenuBtnSec.addEventListener("click", () => {
  elements.menu.style.display = "flex"
})

