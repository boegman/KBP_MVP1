'use strict';

angular.
  module('core.email').
  factory('Email', ['$resource',
    function($resource) {
      return $resource('phones/:phoneId.json', {}, {
        query: {
          method: 'PUT',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
