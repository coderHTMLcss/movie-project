import CreateElement from "../../utils/CreateElement";
import LocalStorage from "../../utils/LocalStorage";

export default class Card {
  constructor(moviesList, parent) {
    this.parent = parent;
    this.moviesList = moviesList;
  }

  render() {
    this.moviesList.forEach((movie) => {
      const { id, title, year, images, genre } = movie;

      const movieItem = new CreateElement("li", {
        className: "movie__item",
      }).render();

      const movieLike = new CreateElement("div", {
        className: "movie-like",
      }).render();

      const movieLikeSvg = new CreateElement("figure", {
        className: "movie-like__svg",
      }).render();

      movieLikeSvg.innerHTML = `<svg class="svg-empty active" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.2385 3.62081C12.9358 3.31799 12.5765 3.07778 12.1809 2.91389C11.7854 2.75 11.3615 2.66565 10.9333 2.66565C10.5052 2.66565 10.0812 2.75 9.68571 2.91389C9.29018 3.07778 8.93082 3.31799 8.62815 3.62081L8 4.24895L7.37185 3.62081C6.76048 3.00943 5.93128 2.66597 5.06666 2.66597C4.20205 2.66597 3.37285 3.00943 2.76148 3.62081C2.15011 4.23218 1.80664 5.06138 1.80664 5.92599C1.80664 6.7906 2.15011 7.6198 2.76148 8.23118L3.38963 8.85932L8 13.4697L12.6104 8.85932L13.2385 8.23118C13.5413 7.92851 13.7815 7.56914 13.9454 7.17361C14.1093 6.77808 14.1937 6.35413 14.1937 5.92599C14.1937 5.49785 14.1093 5.0739 13.9454 4.67837C13.7815 4.28284 13.5413 3.92348 13.2385 3.62081V3.62081Z" stroke="#6100C2" stroke-width="1.18519" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          <svg class="svg-full" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.2385 3.62081C12.9358 3.31799 12.5765 3.07778 12.1809 2.91389C11.7854 2.75 11.3615 2.66565 10.9333 2.66565C10.5052 2.66565 10.0812 2.75 9.68571 2.91389C9.29018 3.07778 8.93082 3.31799 8.62815 3.62081L8 4.24895L7.37185 3.62081C6.76048 3.00943 5.93128 2.66597 5.06666 2.66597C4.20205 2.66597 3.37285 3.00943 2.76148 3.62081C2.15011 4.23218 1.80664 5.06138 1.80664 5.92599C1.80664 6.7906 2.15011 7.6198 2.76148 8.23118L3.38963 8.85932L8 13.4697L12.6104 8.85932L13.2385 8.23118C13.5413 7.92851 13.7815 7.56914 13.9454 7.17361C14.1093 6.77808 14.1937 6.35413 14.1937 5.92599C14.1937 5.49785 14.1093 5.0739 13.9454 4.67837C13.7815 4.28284 13.5413 3.92348 13.2385 3.62081Z" fill="#6100C2" stroke="#6100C2" stroke-width="1.18519" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          `;

      movieLike.append(movieLikeSvg);

      const movieImgContainer = new CreateElement("picture", {
        className: "movie__img-container",
      }).render();

      const movieImg = new CreateElement("img", {
        className: "movie__img",
        src: images,
      }).render();

      movieImgContainer.append(movieImg);

      const movieBottomDiv = new CreateElement("div", {
        className: "movie__bottom",
      }).render();

      const movieTitle = new CreateElement("h4", {
        className: "movie__title",
        textContent: title,
      }).render();

      const movieDescription = new CreateElement("p", {
        className: "movie__description",
        textContent: year,
      }).render();

      const movieSpan = new CreateElement("span", {
        textContent: " | " + genre,
      }).render();

      movieDescription.append(movieSpan);
      movieBottomDiv.append(movieTitle, movieDescription);

      movieItem.append(movieImgContainer, movieBottomDiv, movieLike);

      this.parent.append(movieItem);
      movieLike.addEventListener("click", this.toggleSVG.bind(this, movie));
    });
  }

  renderFullCard() {}

  toggleSVG(movie, event) {
    const localStorage = new LocalStorage();
    const movies = localStorage.getMovie();

    if (!movies) {
      const movieList = [movie];
      localStorage.putMovie(movieList);
    } else {
      const movieIndex = movies.findIndex(
        (movieStore) => movieStore.id === movie.id
      );

      if (movieIndex !== -1) {
        movies.splice(movieIndex, 1);
      } else {
        movies.push(movie);
      }

      localStorage.putMovie(movies);
    }

    const svgEmpty = event.currentTarget.querySelector(".svg-empty");
    const svgFull = event.currentTarget.querySelector(".svg-full");

    if (svgEmpty.classList.contains("active")) {
      svgEmpty.classList.remove("active");
      svgEmpty.style.display = "none";

      svgFull.classList.add("active");
      svgFull.style.display = "block";
      console.log("svg1");
    } else {
      svgEmpty.classList.add("active");
      svgEmpty.style.display = "block";

      svgFull.classList.remove("active");
      svgFull.style.display = "none";
    }

    // відправляти запит patch на зміну властивості лайк true or false по даному діваку
  }
}
