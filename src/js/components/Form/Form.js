import CreateElement from "../../utils/CreateElement.js";
import { FIELDS_DATA } from "../../constans/root.js";
import { FIELDS_DATA_REGISTER } from "../../constans/root.js";

export default class Form {
  constructor(parent) {
    this.parent = parent;
  }
  renderFormLogin() {
    const form = new CreateElement("form", {
      className: "form-login",
    }).render();

    FIELDS_DATA.forEach((field) => {
      const input = new CreateElement("input", field);
      form.append(input.render());
    });
    this.parent.append(form);
  }

  renderFormRegistr() {
    const form = new CreateElement("form", {
      className: "form-register",
    }).render();
    FIELDS_DATA_REGISTER.forEach((value) => {
      const input = new CreateElement("input", value);
      form.append(input.render());
    });
    this.parent.append(form);
  }
}
