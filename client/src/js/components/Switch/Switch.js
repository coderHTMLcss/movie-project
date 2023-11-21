export default class Switch {
  constructor(switchBody) {
    this.toggleBtn = switchBody;
  }

  toggleTheme() {
    this.toggleBtn.addEventListener("click", () => {
      this.toggleBtn.classList.toggle("off");
      if (localStorage.getItem("theme") === "dark") {
        localStorage.removeItem("theme");
      } else {
        localStorage.setItem("theme", "dark");
      }
      this.addDarkClass();
    });
  }

  addDarkClass() {
    const sideBar = document.querySelector(".sidebar");

    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark");
      sideBar.classList.add("dark");
      this.toggleBtn.classList.add("off");
    } else {
      document.body.classList.remove("dark");
      sideBar.classList.remove("dark");
      this.toggleBtn.classList.remove("off");
    }
  }
}
