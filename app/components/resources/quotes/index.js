export default class {
  constructor() {
    this.quotes = [{
      "quote": "Do not follow where the path may lead. Go instead where there is no path and leave a trail.",
      "author": "Ralph Waldo Emerson"
    }, {
      "quote": "Some things just take time. You can't produce a baby in one month by getting nine women pregnant.",
      "author": "Warren Buffett"
    }, {
      "quote": "Fun is good",
      "author": "Dr. Seuss"
    }];
  }

  // via http://stackoverflow.com/a/7228322/363448
  randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandom() {
    let randomIndex = this.randomIntFromInterval(0, this.quotes.length - 1);
    return this.quotes[randomIndex];
  }
}