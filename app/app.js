import routesConfig from 'components/app/router';
import runConfig from 'components/app/run';
import HomePageCtrl from 'components/pages/home';
import QuotesService from 'components/resources/quotes';
import Quote from 'components/gui/quote';

angular
  .module('app', ['ngRoute'])
  .config(routesConfig)
  .run(runConfig)

  .controller('HomePageCtrl', HomePageCtrl)
  .service('QuotesService', QuotesService)
  .directive('quote', function () {
    return new Quote();
  });
