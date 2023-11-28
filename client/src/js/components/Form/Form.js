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
      // input.value = "";
    });

    const api = new API("http://localhost:8080/api/auth/");
    const postReq = await api.postRequest(urlParams, dataFields);

    switch (urlParams) {
      case "signup":
        if (postReq.statusText === "Такой email уже существует") {
          const errorRegister = new CreateElement("span", {
            className: "error-register",
            textContent: postReq.statusText + " !",
          }).render();

          const formRegister = document.querySelector(".form-register");

          formRegister.insertAdjacentElement("afterbegin", errorRegister);
          setTimeout(() => {
            errorRegister.remove();
          }, 1000);
        } else if (postReq.statusText === "Thanks for registering.") {
          setTimeout(() => {
            window.location.href = "./home.html";
          }, 500);
        }
        break;
      case "signin":
        if (postReq.message) {
          const errorLogin = new CreateElement("span", {
            className: "error-login",
            textContent: postReq.message,
          }).render();
          const formLogin = document.querySelector(".form-login");
          formLogin.insertAdjacentElement("afterbegin", errorLogin);

          setTimeout(() => {
            errorLogin.remove();
          }, 1000);
        } else {
          const userData = {
            id: postReq.data._id,
            fullName: postReq.data.fullName,
          };
          sessionStorage.setItem("userData", JSON.stringify(userData));
          setTimeout(() => {
            window.location.href = "./home.html";
          }, 500);
        }
        break;
    }
  }
}
