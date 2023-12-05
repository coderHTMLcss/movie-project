import API from "./utils/Api";
import Switch from "./components/Switch/Switch";
import { switchBody } from "./constans/root";
import { LOGIN_BTN, MOVIE_ROOT } from "./constans/root";
import Modal from "./components/Modal/Modal";
import Form from "./components/Form/Form";
import Tabs from "./components/Tabs/Tabs";
import Slider from "./components/Slider/Slider";
import Card from "./components/Card/Card";

const formWrapper = document.querySelector(".tabs__modal-body");

if (window.location.pathname === "/") {
  if (formWrapper) {
    const form = new Form(formWrapper);
    form.renderFormLogin("signin");
    form.renderFormRegistr("signup");
  }

  if (LOGIN_BTN) {
    const modalWindow = new Modal();
    modalWindow.render(LOGIN_BTN);
  }

  const tabs = new Tabs(".tabs__modal-head", ".tabs__modal-body");
}

window.addEventListener("DOMContentLoaded", async () => {
  const userData = JSON.parse(sessionStorage.getItem("userData"));
  if (userData) {
    const userName = document.querySelector(".user");
    userName.textContent = userData.fullName;
  }

  // const api = new API("http://localhost:8080/api/auth/");
  // const postReq = await api.postRequest("signin");

  // console.log(postReq);
  // const popup = document.querySelector(".popup");
  // popup.textContent = postReq.statusText;
  // popup.classList.add("active");
});

if (switchBody) {
  const switchToggle = new Switch(switchBody);
  switchToggle.toggleTheme();
  switchToggle.addDarkClass();
}

if (window.location.pathname === "/home.html") {
  const slideCount = 3;
  const slider = new Slider(slideCount);
  slider.initSlider();

  (async () => {
    // const api = new API("http://localhost:8080/api/");
    // const movieList = await api.getRequest("movies");
    const movieList = [
      {
        id: 1,
        title: "Tokyo Train",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2022",
        genre: "Action comedy",
        runtime: "2h 38m",
        rating: 7.9,
        images: "./img/movie_picture/tokyo.png",
        trending: true,
        continue: false,
      },
      {
        id: 2,
        title: "Moonfall",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2022",
        genre: "Sci-fi",
        runtime: "1h 16m",
        rating: 7.2,
        images: "./img/movie_picture/moonfall.png",
        trending: true,
        continue: false,
      },
      {
        id: 3,
        title: "Life in Paris",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2023",
        genre: "Documentary series",
        runtime: "1h 24m",
        rating: 6.8,
        images: "./img/movie_picture/life-paris.png",
        trending: true,
        continue: false,
      },
      {
        id: 4,
        title: "House of Gucci",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2022",
        genre: "Drama",
        runtime: "1h 54m",
        rating: 7.8,
        images: "./img/movie_picture/house-gucci.png",
        trending: true,
        continue: false,
      },
      {
        id: 5,
        title: "Bullet science",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2023",
        genre: "Action comedy",
        runtime: "1h 42m",
        rating: 6.7,
        images: "./img/movie_picture/bullet-science.png",
        trending: true,
        continue: false,
      },
      {
        id: 6,
        title: "House of Wealth",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2023",
        genre: "Drama",
        runtime: "2h 38m",
        rating: 7.8,
        images: "./img/movie_picture/house-gucci.png",
        trending: true,
        continue: false,
      },
      {
        id: 7,
        title: "Bullet science",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2023",
        genre: "Action comedy",
        runtime: "1h 42m",
        rating: 6.7,
        images: "./img/movie_picture/bullet-science.png",
        trending: true,
        continue: false,
      },
      {
        id: 8,
        title: "Moonfall",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2022",
        genre: "Sci-fi",
        runtime: "1h 16m",
        rating: 7.2,
        images: "./img/movie_picture/moonfall.png",
        trending: true,
        continue: false,
      },
      {
        id: 9,
        title: "Life in Paris",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2023",
        genre: "Documentary series",
        runtime: "1h 24m",
        rating: 6.8,
        images: "./img/movie_picture/life-paris.png",
        trending: true,
        continue: false,
      },
      {
        id: 10,
        title: "Tokyo Train",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2022",
        genre: "Action comedy",
        runtime: "2h 38m",
        rating: 7.9,
        images: "./img/movie_picture/tokyo.png",
        trending: true,
        continue: false,
      },
      {
        id: 11,
        title: "Happy Family",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2022",
        genre: "Drama",
        runtime: "1h 38m",
        rating: 6.5,
        images: "./img/movie_picture/family.png",
        trending: false,
        continue: true,
      },
      {
        id: 12,
        title: "Our Life",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2021",
        genre: "Action comedy",
        runtime: "1h 59m",
        rating: 5.7,
        images: "./img/movie_picture/life.png",
        trending: false,
        continue: true,
      },
      {
        id: 13,
        Title: "Planet",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2021",
        genre: "Documentary series",
        runtime: "1h 11m",
        rating: 5.7,
        images: "./img/movie_picture/planet.png",
        trending: false,
        continue: true,
      },
      {
        id: 14,
        title: "Bullet science",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2023",
        genre: "Action comedy",
        runtime: "1h 42m",
        rating: 6.7,
        images: "./img/movie_picture/bullet-science.png",
        trending: false,
        continue: true,
      },
      {
        id: 15,
        title: "Tokyo Train",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2022",
        genre: "Action comedy",
        runtime: "2h 38m",
        rating: 7.9,
        images: "./img/movie_picture/tokyo.png",
        trending: false,
        continue: true,
      },
      {
        id: 16,
        title: "Moonfall",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2022",
        genre: "Sci-fi",
        runtime: "1h 16m",
        rating: 7.2,
        images: "./img/movie_picture/moonfall.png",
        trending: false,
        continue: true,
      },
      {
        id: 17,
        title: "House of Wealth",
        description:
          "The movie follows the lives of a wealthy family, the Johnsons, who appear to have it all: a grand mansion, luxurious cars, and expensive designer clothing. However, behind the facade of their lavish lifestyle, there are deep-seated tensions and secrets that threaten to tear the family apart.",
        year: "2023",
        genre: "Drama",
        runtime: "2h 38m",
        rating: 7.8,
        images: "./img/movie_picture/house-gucci.png",
        trending: false,
        continue: true,
      },
    ];
    // movieList.forEach((movie) => {
    //   if (movie.trending === true) {
    //   }
    // });

    const card = new Card(movieList, MOVIE_ROOT);
    card.render();
  })();
}

(() => {
  const movieItems = document.querySelectorAll(".movie__item");
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
})();
