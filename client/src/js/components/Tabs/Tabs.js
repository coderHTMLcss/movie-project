import Card from "../Card/Card";
import API from "../../utils/Api";
export default class Tabs {
  constructor(selectorHead, selectorBody) {
    this.buttonsWrapper = document.querySelector(selectorHead);
    this.content = document.querySelector(selectorBody).childNodes;
    this.toggleTabs(this.content);
  }

  toggleTabs() {
    if (this.buttonsWrapper) {
      this.buttonsWrapper?.addEventListener("click", async (event) => {
        console.log(event.target);
        [...this.buttonsWrapper.children].forEach((button) => {
          button.classList.remove("active");
        });
        event.target.classList.add("active");

        this.content.forEach((item) => {
          if (item.dataset.body === event.target.dataset.head) {
            item.classList.add("active");
          } else {
            item.classList.remove("active");
          }
        });
      });
    } else {
      console.log("I didn't find a class");
    }
  }

  init() {
    this.toggleTabs();
  }
}
