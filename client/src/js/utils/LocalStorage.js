export default class LocalStorage {
  constructor() {
    this.keyName = "movie";
  }
  getMovie() {
    const product = localStorage.getItem(this.keyName);
    if (product) {
      return JSON.parse(localStorage.getItem(this.keyName));
    } else {
      return [];
    }
  }

  putMovie(movies) {
    // console.log(storedMovies);
    const storedMovies = this.getMovie();
    movies.forEach((movie) => {
      const index = storedMovies.findIndex((film) => film.id === movie.id);
      //   console.log(index);

      if (index !== -1) {
        // storedMovies.splice(index, 1);
      } else {
        storedMovies.push(movie);
        console.log(movie);
        localStorage.setItem(this.keyName, JSON.stringify(storedMovies));
      }
    });

    return {
      movies,
    };
  }
}
