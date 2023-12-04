export default class Slider {
  constructor(slideCount) {
    this.slideButtons = document.querySelectorAll(".slide-button");
    this.slideCount = slideCount || 1;

    this.init();
  }

  initSlider() {
    this.slideButtons.forEach((button) => {
      button.addEventListener("click", () => {
        this.imageItem = this.imageList.querySelector(".movie__item");
        this.imageList = document.querySelector(".movie__list");

        let direction = button.id === "prev-slide" ? -1 : 1;

        let scrollAmount = 0;

        if (button.id === "prev-slide") {
          scrollAmount =
            this.imageItem.clientWidth * direction * this.slideCount -
            40 * this.slideCount;
        } else {
          scrollAmount =
            this.imageItem.clientWidth * direction * this.slideCount +
            40 * this.slideCount;
        }

        this.imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
      });
    });
  }

  handleSlideButtons() {
    this.maxScrollLeft =
      this.imageList.scrollWidth - this.imageList.clientWidth;

    this.slideButtons[0].style.display =
      this.imageList.scrollLeft <= 0 ? "none" : "block";
    this.slideButtons[1].style.display =
      this.imageList.scrollLeft >= this.maxScrollLeft ? "none" : "block";
  }

  init() {
    this.imageList = document.querySelector(".movie__list");

    this.imageList.addEventListener("scroll", () => {
      this.handleSlideButtons();
    });

    if (this.imageList.children.length) {
      this.initSlider();
    }
  }
}

const slideCount = 2;
const slider = new Slider(slideCount);
slider.initSlider();
