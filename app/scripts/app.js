'use strict';

/**
 * @ngdoc overview
 * @name userAnalyticsApp
 * @description
 * # userAnalyticsApp
 *
 * Main module of the application.
 */
angular
  .module('userAnalyticsApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
