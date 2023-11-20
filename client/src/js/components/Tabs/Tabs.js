export default class Tabs {
  constructor() {
    this.buttons = document.querySelectorAll(".tabs__modal-btn");
    this.forms = document.querySelectorAll(".tabs__modal-body form");

    this.buttons.forEach((button) => {
      button.addEventListener("click", () => this.toggleForms(button));
    });
  }

  toggleForms(selectedButton) {
    this.buttons.forEach((button) => {
      button.classList.remove("active");
      selectedButton.classList.add("active");
    });

    const selectedForm = selectedButton.getAttribute("data-head");

    this.forms.forEach((form) => {
      if (form.getAttribute("data-body") === selectedForm) {
        form.classList.add("active");
      } else {
        form.classList.remove("active");
      }
    });
  }
}
