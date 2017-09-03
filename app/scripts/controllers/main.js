'use strict';

/**
 * @ngdoc function
 * @name techscanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the techscanApp
 */
const r=[{"repoCount":217,"language":""},{"repoCount":38,"language":"JavaScript"},{"repoCount":31,"language":"Python"},{"repoCount":25,"language":"Ruby"},{"repoCount":20,"language":"Java"},{"repoCount":18,"language":"C++"},{"repoCount":16,"language":"PHP"},{"repoCount":12,"language":"CSS"},{"repoCount":8,"language":"C#"},{"repoCount":6,"language":"Shell"},{"repoCount":5,"language":"Lua"},{"repoCount":5,"language":"C"},{"repoCount":4,"language":"Go"},{"repoCount":3,"language":"Rust"},{"repoCount":3,"language":"Emacs Lisp"},{"repoCount":3,"language":"Swift"},{"repoCount":2,"language":"Puppet"},{"repoCount":2,"language":"Objective-C"},{"repoCount":2,"language":"DM"},{"repoCount":2,"language":"Haskell"},{"repoCount":2,"language":"Scala"},{"repoCount":2,"language":"CoffeeScript"},{"repoCount":2,"language":"TeX"},{"repoCount":2,"language":"Julia"},{"repoCount":2,"language":"D"},{"repoCount":1,"language":"Clojure"},{"repoCount":1,"language":"F#"},{"repoCount":1,"language":"Perl6"},{"repoCount":1,"language":"SQF"},{"repoCount":1,"language":"Perl"},{"repoCount":1,"language":"FORTRAN"},{"repoCount":1,"language":"Scheme"}];
angular.module('techscanApp')
  .controller('MainCtrl', function ($scope, $location, githubService) {
    $scope.repos = r;
    githubService.languages().then(function (d) {
      $scope.repos = d;
    });

    $scope.go = function (lang) {
      $location.path('/techscan/repo/' + lang);
    };
  });
