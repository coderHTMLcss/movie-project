import API from "./utils/Api";
import { API_URL, API_ROUTING } from "./constans/root";
import Switch from "./components/Switch/Switch";
import { switchBody } from "./constans/root";
import { LOGIN_ROOT } from "./constans/root";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import Tabs from "./components/Tabs/Tabs";
import Slider from "./components/Slider/Slider";

const formWrapper = document.querySelector(".tabs__modal-body");

if (switchBody) {
  const switchToggle = new Switch(switchBody);
  switchToggle.toggleTheme();
  switchToggle.addDarkClass();
}

if (formWrapper) {
  const form = new Form(formWrapper);
  form.renderFormLogin("signin");
  form.renderFormRegistr("signup");
}

const modalWindow = new Modal();
modalWindow.render(LOGIN_ROOT);

const slider = new Slider();

const tabs = new Tabs(".tabs__modal-head", ".tabs__modal-body");
