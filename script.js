const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const menuButton = document.querySelector("[data-menu-button]");
const cartCount = document.querySelector("[data-cart-count]");
const addButtons = document.querySelectorAll("[data-add-to-cart]");
const contactForm = document.querySelector(".contact-form");

let cartItems = 0;

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 12);
};

menuButton.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("menu-open", isOpen);
  menuButton.setAttribute("aria-label", isOpen ? "Menü bezárása" : "Menü megnyitása");
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    nav.classList.remove("is-open");
    document.body.classList.remove("menu-open");
    menuButton.setAttribute("aria-label", "Menü megnyitása");
  }
});

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    cartItems += 1;
    cartCount.textContent = cartItems;
    cartCount.classList.add("is-visible");
    button.textContent = "Hozzáadva";

    window.setTimeout(() => {
      button.textContent = "Kosárba";
    }, 1100);
  });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const button = contactForm.querySelector("button");
  const originalText = button.innerHTML;

  button.textContent = "Üzenet rögzítve";
  contactForm.reset();

  window.setTimeout(() => {
    button.innerHTML = originalText;
  }, 1400);
});

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });
