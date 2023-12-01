export const switchBody = document.getElementById("switch");
export const LOGIN_BTN = document.querySelector(".button__primary--login");
export const MOVIE_ROOT = document.querySelector(".movie__list");

export const FIELDS_DATA_LOGIN = [
  {
    className: "form-field",
    type: "text",
    name: "email",
    placeholder: "Email address",
    value: "",
    required: true,
  },
  {
    className: "form-field",
    type: "password",
    name: "password",
    placeholder: "Password",
    value: "",
    required: true,
  },
  {
    className: "form-btn",
    id: "login",
    type: "submit",
    name: "submit",
    value: "Login",
  },
];

export const FIELDS_DATA_REGISTER = [
  {
    className: "form-field",
    type: "text",
    name: "fullName",
    placeholder: "Enter your nickName",
    value: "",
    required: true,
  },
  {
    className: "form-field",
    type: "password",
    name: "password",
    placeholder: "Password",
    value: "",
    required: true,
  },
  // {
  //   className: "form-field",
  //   type: "password",
  //   name: "password",
  //   placeholder: "Password",
  //   value: "",
  //   required: true,
  // },
  {
    className: "form-field",
    type: "email",
    name: "email",
    placeholder: "Email address",
    value: "",
    required: true,
  },
  {
    className: "form-btn",
    id: "register",
    type: "submit",
    name: "submit",
    value: "Sign Up",
  },
];
