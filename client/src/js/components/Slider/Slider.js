export default class Slider {
  constructor() {
    this.imageList = document.querySelector(".movie__list");
    this.slideButtons = document.querySelectorAll(
      ".slider-wrapper .slide-button"
    );

    this.maxScrollLeft =
      this.imageList.scrollWidth - this.imageList.clientWidth;

    this.init();
  }

  initSlider() {
    this.slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const direction = button.id === "prev-slide" ? -1 : 1;
        const scrollAmount = this.imageList.clientWidth * direction;
        this.imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });
  }

  handleSlideButtons() {
    this.slideButtons[0].style.display =
      this.imageList.scrollLeft <= 0 ? "none" : "block";
    this.slideButtons[1].style.display =
      this.imageList.scrollLeft >= this.maxScrollLeft ? "none" : "block";
  }

  init() {
    this.imageList.addEventListener("scroll", () => {
      this.handleSlideButtons();
    });
  }
}
