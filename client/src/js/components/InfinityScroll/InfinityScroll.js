import Card from "../Card/Card";

export default class InfinityScroll {
  constructor(data, count, parentElem) {
    this.data = data;
    this.count = count;
    this.parentElem = parentElem;
    this.start = 0;
    this.end = this.count;
  }

  render() {
    const data = this.data.slice(this.start, this.end);

    const card = new Card(data, this.parentElem);
    card.render();

    this.start = this.end;
    this.end += this.count;

    return data;
  }

  scroll() {
    window.addEventListener("scroll", () => {
      const scrolledY = window.scrollY;
      //   console.log(scrolledY);
      const pageHeight = document.documentElement.scrollHeight;
      //   console.dir(document);
      //   console.log(pageHeight);
      const viewportHeight = window.innerHeight;
      //   console.log(viewportHeight);

      const scrollToEnd = scrolledY + viewportHeight >= pageHeight - 50;

      if (scrollToEnd) {
        this.render();
      }
    });

    this.render();
  }
}
