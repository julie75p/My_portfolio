'use strict';

/**
 * @ngdoc overview
 * @name refonteAngularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('angularApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable',
    'afOAuth2'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'index.html',
        controller: 'indexCtrl',
        controllerAs: 'index'
      })
        .when('/settings', {
        templateUrl: 'components/user_settings/settings.html',
        controller: 'SettingsCtrl',
        controllerAs: 'settings'

      })
      .otherwise({
        redirectTo: '/'
      });
  });
