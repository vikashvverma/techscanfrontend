'use strict';

/**
 * @ngdoc function
 * @name techscanApp.controller:RepoCtrl
 * @description
 * # RepoCtrl
 * Controller of the techscanApp
 */
const limit = 9;
angular.module('techscanApp')
  .controller('RepoCtrl', function ($routeParams, $scope, $location, githubService) {
    $scope.lang = $routeParams.lang;
    $scope.page = 0;
    $scope.last = false;
    $scope.repos = [];
    $scope.searchTerm = "";
    githubService.languages().then(function (d) {
      $scope.repos = d;
    });

    $scope.langRepos = [];
    githubService.repos($scope.lang, 0).then(function (d) {
      $scope.last = false;
      $scope.langRepos = d;
      if (d.length < limit) {
        $scope.last = true;
      }
    });


    $scope.next = function (page, lang) {
      githubService.repos(lang || $scope.lang, page).then(function (d) {
        $scope.page = page;
        $scope.last = false;
        $scope.lang = lang || $scope.lang;
        $scope.langRepos = d;
        if (d.length < limit) {
          $scope.last = true;
        }
      }, function (response) {
        console.log(response);
      });
    };

    $scope.go = function (lang) {
      $location.path('/techscan/repo/' + lang);
    };

  });

