/* Pillsette landing page interactions.
   Connect the form to your Loops signup form before launch. */
(() => {
  const menuButton = document.querySelector(".menu-toggle");
  const mobileNav = document.querySelector("#mobile-nav");

  if (menuButton && mobileNav) {
    menuButton.addEventListener("click", () => {
      const isOpen = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!isOpen));
      menuButton.setAttribute("aria-label", isOpen ? "Open navigation" : "Close navigation");
      mobileNav.hidden = isOpen;
    });
  }

  const form = document.querySelector("#hero-waitlist-form");
  const emailInput = document.querySelector("#hero-email");
  const message = document.querySelector("#form-message");

  if (form && emailInput && message) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const email = emailInput.value.trim();

      if (!emailInput.checkValidity()) {
        message.textContent = "Please enter a valid email address.";
        emailInput.focus();
        return;
      }

      // Replace this client-side placeholder with your Loops form action or
      // embed code. Do not put a private Loops API key in browser JavaScript.
      const loopsFormAction = window.PILLSETTE_LOOPS_FORM_ACTION || "";

      if (!loopsFormAction) {
        message.textContent = "The waitlist form is ready for setup. Please add the Loops form URL before publishing.";
        return;
      }

      const payload = new FormData();
      payload.append("email", email);

      fetch(loopsFormAction, {
        method: "POST",
        body: payload,
        mode: "no-cors"
      }).then(() => {
        message.textContent = "Thanks — please check your inbox for confirmation.";
        form.reset();
      }).catch(() => {
        message.textContent = "We couldn't submit your email just now. Please try again.";
      });
    });
  }
})();
