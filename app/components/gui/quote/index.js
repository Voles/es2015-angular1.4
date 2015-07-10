export default class {
  constructor() {
    this.restrict = 'E';
    this.templateUrl = 'components/gui/quote/quote.html';
    this.scope = {
      quote: '@',
      author: '@'
    };
  }
}
