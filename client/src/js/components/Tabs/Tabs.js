export default class Tabs {
  constructor(selectorHead, selectorBody) {
    this.buttonsWrapper = document.querySelector(selectorHead);
    this.content = document.querySelector(selectorBody).childNodes;

    this.toggleTabs();
  }

  toggleTabs() {
    if (this.buttonsWrapper) {
      this.buttonsWrapper?.addEventListener("click", (event) => {
        [...this.buttonsWrapper.children].forEach((button) => {
          button.classList.remove("active");
        });
        event.target.classList.add("active");

        this.content.forEach((item) => {
          if (item.getAttribute("data-body") === event.target.dataset.head) {
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
