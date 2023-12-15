import CreateElement from "../../utils/CreateElement";
import LocalStorage from "../../utils/LocalStorage";
import { changeContent } from "../../utils/helpers";

export default class Card {
  constructor(moviesList, parent) {
    this.parent = parent;
    this.moviesList = moviesList;
  }

  render() {
    this.moviesList.forEach((movie) => {
      const { id, title, year, images, genre } = movie;

      const movieItem = new CreateElement("li", {
        className: "movie__item active",
        dataset: { id: id },
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

    changeContent();
  }

  renderFullCard(movie, parent) {
    const { id, title, year, images, genre, description, rating, runtime } =
      movie;

    const movieItem = new CreateElement("li", {
      className: "movie-card__item",
      dataset: { id: id },
    }).render();

    const movieImg = new CreateElement("img", {
      className: "movie-card__img",
      src: images,
    }).render();

    const movieContainer = new CreateElement("div", {
      className: "movie-card__container",
    }).render();

    const movieTitleContainer = new CreateElement("div", {
      className: "movie-card__title-container",
    }).render();

    const movieTitle = new CreateElement("h3", {
      className: "movie-card__title",
      textContent: title,
    }).render();

    const movieRatingContainer = new CreateElement("div", {
      className: "movie-card__svg-container",
    }).render();

    const movieSvg = new CreateElement("svg", {
      className: "movie-card__svg",
    }).render();

    movieSvg.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" fill="#FFC01E"/>
    </svg>
    `;

    const movieRating = new CreateElement("span", {
      className: "movie-card__rating",
      textContent: rating + "/10",
    }).render();

    movieRatingContainer.append(movieSvg, movieRating);
    movieTitleContainer.append(movieTitle, movieRatingContainer);

    const movieInfo = new CreateElement("div", {
      className: "movie-card__info",
    }).render();

    const movieYear = new CreateElement("span", {
      className: "movie-card__year",
      textContent: year,
    }).render();

    const movieGenre = new CreateElement("span", {
      className: "movie-card__genre",
      textContent: genre,
    }).render();

    const movieRuntime = new CreateElement("span", {
      className: "movie-card__time",
      textContent: runtime,
    }).render();

    movieInfo.append(movieYear, movieGenre, movieRuntime);

    const movieDescription = new CreateElement("p", {
      className: "movie-card__description",
      textContent: description,
    }).render();

    const movieButtons = new CreateElement("div", {
      className: "movie-card__buttons",
    }).render();

    const movieButtonPrime = new CreateElement("button", {
      className: "button button__primary",
      textContent: "Watch now",
    }).render();

    const movieButtonSecondary = new CreateElement("button", {
      className: "button button__secondary",
    }).render();

    movieButtonSecondary.innerHTML = `<svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_b_204_397)">
      <rect x="1" y="1" width="54" height="54" rx="14" fill="url(#paint0_linear_204_397)"/>
      <rect x="0.5" y="0.5" width="55" height="55" rx="14.5" stroke="url(#paint1_linear_204_397)"/>
      <path d="M36.84 20.61C36.3292 20.099 35.7228 19.6936 35.0554 19.4171C34.3879 19.1405 33.6725 18.9982 32.95 18.9982C32.2275 18.9982 31.5121 19.1405 30.8446 19.4171C30.1772 19.6936 29.5708 20.099 29.06 20.61L28 21.67L26.94 20.61C25.9083 19.5783 24.509 18.9987 23.05 18.9987C21.591 18.9987 20.1917 19.5783 19.16 20.61C18.1283 21.6417 17.5487 23.041 17.5487 24.5C17.5487 25.959 18.1283 27.3583 19.16 28.39L20.22 29.45L28 37.23L35.78 29.45L36.84 28.39C37.351 27.8792 37.7563 27.2728 38.0329 26.6053C38.3095 25.9379 38.4518 25.2225 38.4518 24.5C38.4518 23.7775 38.3095 23.0621 38.0329 22.3946C37.7563 21.7272 37.351 21.1208 36.84 20.61V20.61Z" stroke="#6100C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
      <defs>
      <filter id="filter0_b_204_397" x="-20" y="-20" width="96" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feGaussianBlur in="BackgroundImageFix" stdDeviation="10"/>
      <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_204_397"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_204_397" result="shape"/>
      </filter>
      <linearGradient id="paint0_linear_204_397" x1="4.5" y1="-8.00001" x2="147.569" y2="14.2874" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      <linearGradient id="paint1_linear_204_397" x1="52" y1="65.5" x2="-4" y2="-18" gradientUnits="userSpaceOnUse">
      <stop stop-color="white"/>
      <stop offset="1" stop-color="white" stop-opacity="0"/>
      </linearGradient>
      </defs>
      </svg>
      `;

    movieButtons.append(movieButtonPrime, movieButtonSecondary);
    movieContainer.append(
      movieTitleContainer,
      movieInfo,
      movieDescription,
      movieButtons
    );
    movieItem.append(movieImg, movieContainer);

    parent.append(movieItem);
  }

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
    } else {
      svgEmpty.classList.add("active");
      svgEmpty.style.display = "block";

      svgFull.classList.remove("active");
      svgFull.style.display = "none";
    }

    // відправляти запит patch на зміну властивості лайк true or false по даному діваку
  }
}
