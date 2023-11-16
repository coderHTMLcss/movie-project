import CreateElement from "../../utils/CreateElement.js";
import { FIELDS_DATA } from "../../constans/root.js";

class Form {
  render() {
    FIELDS_DATA.forEach((field) => {
      const label = new CreateElement("label", field).render();
      const input = new CreateElement("input", field);
      label.append(input.render());
      document.body.prepend(label);
    });
    const buttonSbm = new CreateElement("button", {
      textContent: "Надіслати",
      type: "submit",
    });
    document.body.prepend(buttonSbm.render());
  }
}

export const pageForm = new Form();
