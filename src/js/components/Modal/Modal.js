import CreateElement from "../../utils/CreateElement.js";
import { MODAL_CONTENT } from "../../constans/root.js";

class Modal {
  render(btn) {
    btn.addEventListener("click", () => {
      const wrapper = new CreateElement("div", {
        className: "wrapper",
      }).render();
      const modal = new CreateElement("div", {
        className: "modal",
      }).render();
      const modalContent = new CreateElement("span", {
        className: "modal__content",
        textContent: `${MODAL_CONTENT}`,
      }).render();
      const modalCloseBtn = new CreateElement("button", {
        textContent: "X",
        className: "modal__close",
      }).render();

      modal.append(modalCloseBtn, modalContent);
      wrapper.append(modal);
      document.body.prepend(wrapper);

      wrapper.addEventListener("click", (event) => {
        if (event.target.classList.contains("wrapper")) {
          event.target.remove();
        } else if (event.target.classList.contains("modal__close")) {
          event.target.parentElement.parentElement.remove();
        }
      });
    });
  }
}

export const modalWindow = new Modal();
