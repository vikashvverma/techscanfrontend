'use strict';

/**
 * @ngdoc overview
 * @name techscanApp
 * @description
 * # techscanApp
 *
 * Main module of the application.
 */
const app = angular
  .module('techscanApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngMaterial'
  ])
  .config(function ($mdIconProvider, $locationProvider, $routeProvider, $httpProvider) {
    $mdIconProvider.fontSet('fa', 'fontawesome');
    // $locationProvider.html5Mode(true).hashPrefix('!');;
    $routeProvider
      .when('/techscan/technologies', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      }).when('/techscan/repo/:lang', {
        templateUrl: 'views/repo.html',
        controller: 'RepoCtrl',
        controllerAs: 'repo'
      })
      .otherwise({
        redirectTo: '/techscan/technologies'
      });

    $httpProvider.interceptors.push(function ($rootScope) {
      return {
        'request': function (config) {
          config.url = config.url.match(/api/g) ? ($rootScope.apiPath || "http://localhost:3333") + config.url : config.url;
          return config;
        }

      }
    });

  }).run(function ($rootScope, $location, $http) {
    $rootScope.home=function () {
      $location.path('/');
    };
    $http.get("config.json").then(function (response) {
      console.log(response);
      $rootScope.apiPath=response.data.apiPath;
    })
  });

app.config(function ($mdThemingProvider) {
  var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });
  $mdThemingProvider.definePalette('customBlue', customBlueMap);

  //default theme
  $mdThemingProvider.theme('default')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
    .accentPalette('pink');
  $mdThemingProvider.theme('input', 'default')
    .primaryPalette('grey');

  //forest theme
  $mdThemingProvider.theme('forest')
    .primaryPalette('brown')
    .accentPalette('green');
});
