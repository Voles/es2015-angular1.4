export default function routesConfig($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'HomePageCtrl',
      controllerAs: 'vm',
      templateUrl: 'components/pages/home/home.html'
    })
    .otherwise({
      redirectTo: '/'
    });
}

routesConfig.$inject = ['$routeProvider'];
