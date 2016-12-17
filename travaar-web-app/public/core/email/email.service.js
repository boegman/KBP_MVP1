  'use strict';

  angular.
    module('core.email').
    factory('Email', ['$resource',
      function($resource) {
        return $resource('products/:phoneId.json', {}, {
          query: {
            method: 'GET',
            params: {phoneId: 'phones'},
            isArray: true
          }
        });
      }
    ]);
