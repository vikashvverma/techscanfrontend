'use strict';

/**
 * @ngdoc function
 * @name techscanApp.controller:RepoCtrl
 * @description
 * # RepoCtrl
 * Controller of the techscanApp
 */
const limit = 9;
// const lr = [{"id":781028,"login":"node-inspector","starCount":5925,"language":"JavaScript","repoUrl":"https://github.com/node-inspector/node-inspector","description":"Node.js debugger based on Blink Developer Tools"},{"id":4924151,"login":"ExactTarget","starCount":4106,"language":"JavaScript","repoUrl":"https://github.com/ExactTarget/fuelux","description":"Extends Twitter Bootstrap with additional lightweight JavaScript controls. Easy to install, customize, update, and optimize. All functionality covered by live documentation and unit tests."},{"id":2990192,"login":"WhisperSystems","starCount":3242,"language":"Java","repoUrl":"https://github.com/WhisperSystems/TextSecure","description":"A secure text messaging application for Android."},{"id":5152285,"login":"square","starCount":2983,"language":"Java","repoUrl":"https://github.com/square/okhttp","description":"An HTTP+SPDY client for Android and Java applications."},{"id":3016562,"login":"emberjs","starCount":2181,"language":"JavaScript","repoUrl":"https://github.com/emberjs/data","description":"A data persistence library for Ember.js."},{"id":26730195,"login":"cachethq","starCount":420,"language":"JavaScript","repoUrl":"https://github.com/cachethq/Cachet","description":"Cachet, the open source StatusPage.io alternative written in PHP"},{"id":11164718,"login":"mozilla","starCount":407,"language":"Java","repoUrl":"https://github.com/mozilla/MozStumbler","description":"Android Stumbler for Mozilla"},{"id":229738,"login":"jdbi","starCount":377,"language":"Java","repoUrl":"https://github.com/jdbi/jdbi","description":"jDBI is designed to provide convenient tabular data access in Java(tm). It uses the Java collections framework for query results, provides a convenient means of externalizing sql statements, and provides named parameter support for any database being used."},{"id":15286424,"login":"allenhwkim","starCount":330,"language":"JavaScript","repoUrl":"https://github.com/allenhwkim/angularjs-google-maps","description":"The Simplest AngularJS Google Maps V3 Directive "}];
angular.module('techscanApp')
  .controller('RepoCtrl', function ($routeParams, $scope, $location, githubService) {
    $scope.lang = $routeParams.lang;
    $scope.page = 0;
    $scope.last =false;
    $scope.repos = [{"repoCount":217,"language":""},{"repoCount":38,"language":"JavaScript"},{"repoCount":31,"language":"Python"},{"repoCount":25,"language":"Ruby"},{"repoCount":20,"language":"Java"},{"repoCount":18,"language":"C++"},{"repoCount":16,"language":"PHP"},{"repoCount":12,"language":"CSS"},{"repoCount":8,"language":"C#"},{"repoCount":6,"language":"Shell"},{"repoCount":5,"language":"Lua"},{"repoCount":5,"language":"C"},{"repoCount":4,"language":"Go"},{"repoCount":3,"language":"Rust"},{"repoCount":3,"language":"Emacs Lisp"},{"repoCount":3,"language":"Swift"},{"repoCount":2,"language":"Puppet"},{"repoCount":2,"language":"Objective-C"},{"repoCount":2,"language":"DM"},{"repoCount":2,"language":"Haskell"},{"repoCount":2,"language":"Scala"},{"repoCount":2,"language":"CoffeeScript"},{"repoCount":2,"language":"TeX"},{"repoCount":2,"language":"Julia"},{"repoCount":2,"language":"D"},{"repoCount":1,"language":"Clojure"},{"repoCount":1,"language":"F#"},{"repoCount":1,"language":"Perl6"},{"repoCount":1,"language":"SQF"},{"repoCount":1,"language":"Perl"},{"repoCount":1,"language":"FORTRAN"},{"repoCount":1,"language":"Scheme"}];
    githubService.languages().then(function (d) {
      $scope.repos = d;
    });

    $scope.langRepos = [];
    githubService.repos($scope.lang, 0).then(function (d) {
      $scope.langRepos = d;
    });


    $scope.next = function(page){
      githubService.repos($scope.lang, page).then(function (d) {
        $scope.page=page;
        $scope.last=false;
        $scope.langRepos = d;
        if (d.length<limit){
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

