import API from "./utils/Api";
import Switch from "./components/Switch/Switch";
import { switchBody } from "./constans/root";
import { LOGIN_BTN } from "./constans/root";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import Tabs from "./components/Tabs/Tabs";
import Slider from "./components/Slider/Slider";

const formWrapper = document.querySelector(".tabs__modal-body");

if (window.location.pathname === "/") {
  if (formWrapper) {
    const form = new Form(formWrapper);
    form.renderFormLogin("signin");
    form.renderFormRegistr("signup");
  }

  if (LOGIN_BTN) {
    const modalWindow = new Modal();
    modalWindow.render(LOGIN_BTN);
  }

  const tabs = new Tabs(".tabs__modal-head", ".tabs__modal-body");
}

window.addEventListener("DOMContentLoaded", async () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData) {
    const userName = document.querySelector(".user");
    userName.textContent = userData.fullName;
  }

  // const api = new API("http://localhost:8080/api/auth/");
  // const postReq = await api.postRequest("signin");

  // console.log(postReq);
  // const popup = document.querySelector(".popup");
  // popup.textContent = postReq.statusText;
  // popup.classList.add("active");
});

if (switchBody) {
  const switchToggle = new Switch(switchBody);
  switchToggle.toggleTheme();
  switchToggle.addDarkClass();
}

const slider = new Slider();
slider.initSlider();
