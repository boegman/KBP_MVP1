angular.module('emailSend').
  component('emailSend', {
    templateUrl: './email/email.template.html',
    controller: ['$scope', function($scope){
      $scope.test = 'legend';

    }]
  });
