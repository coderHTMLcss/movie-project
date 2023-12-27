import Form from "../Form/Form";

export default class Modal {
  render(btn) {
    const modal = document.querySelector(".modal");

    btn.addEventListener("click", () => {
      modal.classList.add("active");

      document.querySelector(".modal").addEventListener("click", (event) => {
        if (event.target.classList.contains("modal")) {
          modal.classList.remove("active");
        } else if (event.target.classList.contains("modal__close")) {
          modal.classList.remove("active");
        }
      });
    });
  }
}
