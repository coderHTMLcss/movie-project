import API from "./utils/Api";
import { modalWindow } from "./components/Modal/Modal";
import { API_URL, API_ROUTING } from "./constans/root";
import { pageForm } from "./components/Form/Form";
import { switchBody } from "./constans/root";
import Switch from "./components/Switch/Switch";

const modalBtnOpen = document.getElementById("modal-open");

(async () => {
  const api = new API(API_URL);
  const data = await api.getRequest(API_ROUTING);
  console.log(data);
})();

const switchToggle = new Switch();
switchToggle.toggle(switchBody);

// modalWindow.render(modalBtnOpen);
