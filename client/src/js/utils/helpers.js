import API from "./Api";
import Card from "../components/Card/Card";
import InfinityScroll from "../components/InfinityScroll/InfinityScroll";

export async function getAndRenderData() {
  const api = new API("http://localhost:8080/api/");
  const movieList = await api.getRequest("movies");

  const parentTrending = document.querySelector(".movie__list--trending");

  const parentContinue = document.querySelector(".movie__list--continue");

  const filteredTrending = movieList.filter(({ trending }) => trending);

  const filteredContinue = movieList.filter((item) => item.continue);

  const card = new Card(filteredTrending, parentTrending);
  card.render();

  const infinityScroll = new InfinityScroll(
    filteredContinue,
    4,
    parentContinue
  );
  infinityScroll.scroll();

  return movieList;
}

export function changeContent() {
  const movieItems = document.querySelectorAll(".movie__item");
  //   console.log(movieItems);
  if (movieItems) {
    movieItems.forEach((item) => {
      item.addEventListener("click", () => {
        const movieTitle = item.querySelector(".movie__title").textContent;
        const movieDescription = item.querySelector(
          ".movie__description"
        ).textContent;
        const movieImg = item.querySelector(".movie__img").src;

        const header = document.querySelector(".header");
        const headerTitle = document.querySelector(".header-content__title");
        const headerDescription = document.querySelector(
          ".header-content__description"
        );

        header.style.transition = "background-image 1s ease";
        headerTitle.style.transition = "all 1s ease";
        headerDescription.style.transition = "all 1s ease";

        header.style.backgroundImage = `url(${movieImg})`;
        headerTitle.textContent = movieTitle;
        headerDescription.textContent = movieDescription;
      });
    });
  }
}
