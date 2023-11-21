export const API_URL = "https://moviesdatabase.p.rapidapi.com";
export const API_ROUTING = "/titles";
export const switchBody = document.getElementById("switch");
export const LOGIN_ROOT = document.querySelector(".button__primary--login");

export const FIELDS_DATA = [
  {
    className: "form-field",
    type: "text",
    name: "username",
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
  { className: "form-btn", type: "submit", name: "submit", value: "Login" },
];

export const FIELDS_DATA_REGISTER = [
  {
    className: "form-field",
    type: "text",
    name: "username",
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
    className: "form-field",
    type: "password",
    name: "password",
    placeholder: "Password",
    value: "",
    required: true,
  },
  { className: "form-btn", type: "submit", name: "submit", value: "Sign Up" },
];
