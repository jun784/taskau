'use strict';

angular.module('taskauApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'angularfire.firebase',
  'angularfire.login',
  'simpleLoginTools'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/parties/index.html',
        controller: 'MainCtrl'
      })
      .when('/parties/new/:pid', {
        templateUrl: 'views/parties/new.html',
        controller: 'MainCtrl'
      })
      .when('/parties/:pid', {
        templateUrl: 'views/parties/view.html',
        controller: 'MainCtrl'
      })
      .when('/parties/join/:pid', {
        templateUrl: 'views/parties/join.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
