angular.
  module('travaar').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/', {
          // template: '<dashboard-view><dashboard-view>'
          templateUrl: './dashboard/dashboard-view.template.html'

        }).
        when('/product/:hotelId/:productId', {
            //@TODO Fix this to use angular component
            templateUrl: './products/view-product.template.html'
        }).
        when('/email', {
            //@TODO Fix this to use angular component
            template: '<email-send><email-send>'
        }).
        otherwise('/');
    }
  ]);
