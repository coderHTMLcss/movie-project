export const MODAL_CONTENT =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio incidunt minima veritatis officia omnis dignissimos unde possimus, est doloremque iste error eius aut. Quasi dolorum delectus quam autem cum nobis!";

export const API_URL = "https://moviesdatabase.p.rapidapi.com";
export const API_ROUTING = "/titles";
export const switchBody = document.getElementById("switch");

export const FIELDS_DATA = [
  {
    type: "text",
    name: "username",
    placeholder: "Email address",
    value: "",
    required: true,
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
    value: "",
    required: true,
  },
  { type: "submit", name: "submit", value: "Login" },
];

export const FIELDS_DATA_REGISTER = [
  {
    type: "text",
    name: "username",
    placeholder: "Email address",
    value: "",
    required: true,
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
    value: "",
    required: true,
  },
  {
    type: "password",
    name: "password",
    placeholder: "Password",
    value: "",
    required: true,
  },
  { type: "submit", name: "submit", value: "Sign Up" },
];

export const LOGIN_ROOT = document.querySelector(".button__primary--login");
