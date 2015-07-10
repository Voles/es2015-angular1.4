export default class HomePageCtrl {
  constructor(QuotesService) {
    this.quote = QuotesService.getRandom();

    this.reloadQuote = () => {
      this.quote = QuotesService.getRandom();
    }
  }
}

HomePageCtrl.$inject = ['QuotesService'];
