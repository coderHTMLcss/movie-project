export default class LocalStorage {
  constructor() {
    this.keyName = "movie";
  }
  getMovie() {
    const product = localStorage.getItem(this.keyName);
    return product ? JSON.parse(localStorage.getItem(this.keyName)) : [];
  }

  putMovie(movies) {
    localStorage.setItem(this.keyName, JSON.stringify(movies));
  }
}
