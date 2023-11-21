import API from "./utils/Api";
import { API_URL, API_ROUTING } from "./constans/root";
import Switch from "./components/Switch/Switch";
import { switchBody } from "./constans/root";
import { LOGIN_ROOT } from "./constans/root";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import Tabs from "./components/Tabs/Tabs";

if (switchBody) {
  const switchToggle = new Switch(switchBody);
  switchToggle.toggleTheme();
  switchToggle.addDarkClass();
}

const formWrapper = document.querySelector(".tabs__modal-body");

if (formWrapper) {
  const form = new Form(formWrapper);
  form.renderFormLogin();
  form.renderFormRegistr();
}

const modalWindow = new Modal();
modalWindow.render(LOGIN_ROOT);

const tabs = new Tabs(".tabs__modal-head", ".tabs__modal-body");
