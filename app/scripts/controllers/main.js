'use strict';

/**
 * @ngdoc function
 * @name techscanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the techscanApp
 */
angular.module('techscanApp')
  .controller('MainCtrl', function ($scope, $location, githubService) {
    $scope.repos = [];
    githubService.languages().then(function (d) {
      $scope.repos = d;
    });

    $scope.go = function (lang) {
      $location.path('/techscan/repo/' + lang);
    };
  });
