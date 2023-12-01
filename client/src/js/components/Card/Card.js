import CreateElement from "../../utils/CreateElement";

export default class Card {
  constructor(movies, parent) {
    this.movies = movies;
    this.parent = parent;
    // console.log(this.movies);

    const { title, images, year, genre } = this.movies;
    this.title = title;
    this.images = images?.url || "./img/movie_picture/moonfall.png";
    this.year = year?.textContent || "2022 ";
    this.genre = genre?.textContent || " Action comedy";
  }

  render() {
    const movieItem = new CreateElement("li", {
      className: "movie__item",
    }).render();

    const movieImgContainer = new CreateElement("picture", {
      className: "movie__img-container",
    }).render();

    const movieImg = new CreateElement("img", {
      className: "movie__img",
      src: this.images,
    }).render();

    movieImgContainer.append(movieImg);

    const movieBottomDiv = new CreateElement("div", {
      className: "movie__bottom",
    }).render();

    const movieTitle = new CreateElement("h4", {
      className: "movie__title",
      textContent: this.title,
    }).render();

    const movieDescription = new CreateElement("p", {
      className: "movie__description",
      textContent: this.year,
    }).render();

    const movieSpan = new CreateElement("span", {
      textContent: "|" + this.genre,
    }).render();

    movieDescription.append(movieSpan);
    movieBottomDiv.append(movieTitle, movieDescription);

    movieItem.append(movieImgContainer, movieBottomDiv);
    this.parent.append(movieItem);
  }
}
