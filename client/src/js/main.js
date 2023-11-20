import API from "./utils/Api";

import { API_URL, API_ROUTING } from "./constans/root";
import { switchBody } from "./constans/root";
import Switch from "./components/Switch/Switch";
import { LOGIN_ROOT } from "./constans/root";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import Tabs from "./components/Tabs/Tabs";

const formWrapper = document.querySelector(".tabs__modal-body");
const form = new Form(formWrapper);
form.renderFormLogin();
form.renderFormRegistr();

const modalWindow = new Modal();
modalWindow.render(LOGIN_ROOT);

const tabs = new Tabs(".tabs__modal-head", ".tabs__modal-body");

if (switchBody) {
  const switchToggle = new Switch();
  switchToggle.toggle(switchBody);
}