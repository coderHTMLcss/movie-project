import Card from "../Card/Card";
import { getDataFromApi } from "../../utils/helpers";

export default class Search {
  constructor() {
    this.parentTrending = document.querySelector(".movie__list--trending");
    this.parentContinue = document.querySelector(".movie__list--continue");
  }
  showInput() {
    const toggleItem = document.getElementById("search-svg");
    const showElement = document.querySelector(".searchBar");

    toggleItem.addEventListener("click", () => {
      showElement.classList.toggle("active");
    });
  }

  async searchMovie() {
    const formSearch = document.querySelector(".searchBar");
    const movieList = await getDataFromApi();

    const filteredTrending = movieList.filter(({ trending }) => trending);
    const filteredContinue = movieList.filter((item) => item.continue);

    formSearch.addEventListener("keyup", (event) => {
      const inputValue = event.target.value.trim().toLowerCase();

      const filteredData = this.filterByTitle(filteredTrending, inputValue);
      const filteredData1 = this.filterByTitle(filteredContinue, inputValue);

      if (filteredData.length || filteredData1.length) {
        this.clearParentMovie();

        this.renderMovies(filteredData, this.parentTrending);
        this.renderMovies(filteredData1, this.parentContinue);

        if (inputValue) {
          localStorage.setItem(
            "updatedContinue",
            JSON.stringify(filteredData1)
          );
        } else {
          localStorage.setItem("updatedContinue", JSON.stringify([]));
        }
      }
    });
  }

  clearParentMovie() {
    this.parentTrending.innerHTML = "";
    this.parentContinue.innerHTML = "";
  }

  filterByTitle(movieList, value) {
    return movieList.filter((movieItem) =>
      movieItem.title.toLowerCase().includes(value)
    );
  }

  renderMovies(data, parentElem) {
    const card = new Card(data, parentElem);
    card.render();
  }
}
