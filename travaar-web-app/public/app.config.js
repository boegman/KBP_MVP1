angular.
  module('travaar').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          template: '<dashboard-view><dashboard-view>'
        }).
        when('/product/:productId', {
            //@TODO Fix this to use angular component
            templateUrl: './products/view-product.template.html'
        }).
        otherwise('/');
    }
  ]);
