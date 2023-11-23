import CreateElement from "../../utils/CreateElement.js";
import { FIELDS_DATA_LOGIN } from "../../constans/root.js";
import { FIELDS_DATA_REGISTER } from "../../constans/root.js";
import API from "../../utils/Api.js";

export default class Form {
  constructor(parent) {
    this.parent = parent;
  }
  renderFormLogin(urlParams) {
    const form = new CreateElement("form", {
      className: "form-login active",
      dataset: { body: "login" },
    }).render();

    form.addEventListener("submit", this.handleSubmit.bind(this, urlParams));

    FIELDS_DATA_LOGIN.forEach((field) => {
      const input = new CreateElement("input", field);
      form.append(input.render());
    });
    this.parent.append(form);
  }

  renderFormRegistr(urlParams) {
    const form = new CreateElement("form", {
      className: "form-register",
      dataset: { body: "register" },
    }).render();

    form.addEventListener("submit", this.handleSubmit.bind(this, urlParams));

    FIELDS_DATA_REGISTER.forEach((value) => {
      const input = new CreateElement("input", value);
      form.append(input.render());
    });
    this.parent.append(form);
  }

  async handleSubmit(urlParams, event) {
    event.preventDefault();

    const dataFields = {};
    const formFields = event.currentTarget.querySelectorAll(".form-field");

    formFields.forEach((input) => {
      dataFields[input.name] = input.value;
    });

    const api = new API("http://localhost:8080/api/auth/");
    const postReq = await api.postRequest(urlParams, dataFields);

    console.log(postReq);
    // window.location.href = "./home.html";
  }
}
