import API from "./Api";
import Card from "../components/Card/Card";
import InfinityScroll from "../components/InfinityScroll/InfinityScroll";

export async function getDataFromApi() {
  const api = new API("http://localhost:8080/api/");
  const data = await api.getRequest("movies");
  // const wishlist = await api.getRequest("wishlist");
  // console.log(wishlist);
  return data;
}

export async function getAndRenderData() {
  const movieList = await getDataFromApi();

  const filteredTrending = movieList.filter(({ trending }) => trending);
  const filteredContinue = movieList.filter((item) => item.continue);

  const parentTrending = document.querySelector(".movie__list--trending");
  const parentContinue = document.querySelector(".movie__list--continue");
  const parentTrendingPage = document.querySelector(
    ".movie__list--trendingPage"
  );

  if (window.location.pathname === "/home.html") {
    const card = new Card(filteredTrending, parentTrending);
    card.render();

    localStorage.removeItem("updatedContinue");

    const infinityScroll = new InfinityScroll(
      filteredContinue,
      4,
      parentContinue
    );
    infinityScroll.scroll();
  } else if (window.location.pathname === "/trending.html") {
    const infinityScroll = new InfinityScroll(
      filteredTrending,
      4,
      parentTrendingPage
    );
    infinityScroll.scroll();
  }

  return movieList;
}

export function changeContent() {
  const movieItems = document.querySelectorAll(".movie__item");

  if (window.location.pathname === "/home.html") {
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
}

export async function showFullCard() {
  if (window.location.pathname === "/trending.html") {
    const movieList = await getDataFromApi();

    const filteredTrending = movieList.filter(({ trending }) => trending);

    const parentFullCard = document.querySelector(".movie-card__list");
    const itemsWrapper = document.querySelector(".movie__list--trendingPage");

    itemsWrapper.addEventListener("click", (event) => {
      const clickedMovieItem = event.target.closest(".movie__item");
      const allItems = document.querySelectorAll(".movie__item");

      allItems.forEach((item) => {
        item.classList.remove("active");
      });

      clickedMovieItem.classList.add("active");

      if (clickedMovieItem) {
        const selectedMovieId = +clickedMovieItem.dataset.id;

        const selectedMovie = filteredTrending.find(
          (movie) => movie.id === selectedMovieId
        );

        if (selectedMovie) {
          const movieCardList = document.querySelector(
            ".movie-card__list.visible"
          );

          movieCardList.classList.remove("visible");
          movieCardList.style.opacity = 0;

          setTimeout(() => {
            parentFullCard.innerHTML = "";
            const card = new Card();
            card.renderFullCard(selectedMovie, movieCardList);

            const movieCardList1 = document.querySelector(".movie-card__list");
            movieCardList1.classList.add("visible");
            movieCardList1.style.opacity = 1;
          }, 500);

          parentFullCard.addEventListener("click", (event) => {
            if (event.target.classList.contains("movie-card__item")) {
              event.target.remove();
            }
          });
        }
      }
    });
  }
}
