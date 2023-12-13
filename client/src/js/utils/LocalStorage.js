export default class LocalStorage {
  constructor() {
    this.keyName = "movie";
  }
  getMovie() {
    const movie = localStorage.getItem(this.keyName);
    return movie ? JSON.parse(localStorage.getItem(this.keyName)) : [];
  }

  putMovie(movies) {
    localStorage.setItem(this.keyName, JSON.stringify(movies));
  }
}
