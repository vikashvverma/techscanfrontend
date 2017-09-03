'use strict';

/**
 * @ngdoc service
 * @name techscanApp.githubService
 * @description
 * # githubService
 * Service in the techscanApp.
 */
angular.module('techscanApp')
  .service('githubService', function ($http) {
    var langPromise;
    return {
      languages: function () {
        if (!langPromise) {
          langPromise = $http.get('/api/techscan').then(function (response) {
            return response.data;
          });
        }
        return langPromise;
      },
      repos: function (lang, page) {
        page = page ? '/' + page : '';
        return $http.get('/api/techscan/' + lang + page).then(function (response) {
          return response.data;
        });
      }
    };
  });
