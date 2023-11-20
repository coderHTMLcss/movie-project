export default class Switch {
  toggle(switchBody) {
    switchBody.addEventListener("click", () => {
      switchBody.classList.toggle("off");

      const elemToMod = document.querySelector(".ligth-theme");

      document.body.style.transition = "background-color 1s, all 1s";
      elemToMod.style.transition = "background-color 1s, all 1s";

      if (switchBody.classList.contains("off")) {
        document.body.style.backgroundImage =
          "linear-gradient(357deg, #37312a -5.36%, #191817 70.82%, #191817 78.81%)";

        document.body.style.backgroundColor = "#1a1a1a";

        elemToMod.style.backgroundColor = "#21201e";
      } else {
        elemToMod.style.backgroundColor = "#969696";
        document.body.style.backgroundColor = "#969696";
        document.body.style.backgroundImage =
          "linear-gradient(357deg, #969696 -5.36%, #969696 70.82%, #969696 78.81%)";
      }
    });
  }
}
