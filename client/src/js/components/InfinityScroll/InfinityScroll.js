import Card from "../Card/Card";

export default class InfinityScroll {
  constructor(data, count, parentElem) {
    this.data = data;

    this.count = count;
    this.parentElem =
      parentElem || document.querySelector(".movie__list--trendingPage");

    this.start = 0;
    this.end = this.count;
    this.isLoading = false;
  }

  render(listData) {
    let data = [];
    if (listData) {
      data = listData.slice(this.start, this.end);
      const card = new Card(data, this.parentElem);
      card.render();
    } else {
      data = this.data.slice(this.start, this.end);
      const card = new Card(data, this.parentElem);
      card.render();
    }

    this.start = this.end;
    this.end += this.count;
  }

  scroll() {
    window.addEventListener("scroll", () => {
      const { scrollY, innerHeight } = window;
      const pageHeight = document.documentElement.scrollHeight;
      const scrollToEnd = scrollY + innerHeight >= pageHeight - 50;

      const updatedContinue = JSON.parse(
        localStorage.getItem("updatedContinue")
      );

      const loader = document.querySelector(".loader");

      if (scrollToEnd && !this.isLoading) {
        this.isLoading = true;
        loader.classList.remove("hidden");
        setTimeout(() => {
          this.render(updatedContinue);
          this.isLoading = false;
          loader.classList.add("hidden");
        }, 500);
      }
    });

    this.render();
  }
}
