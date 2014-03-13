'use strict';

angular.module('taskauApp').constant('FIREBASE_URL', 'https://taskau.firebaseio.com/');

angular.module('taskauApp')
  .controller('MainCtrl', function ($rootScope, $scope, $cookieStore, $location, $routeParams, $firebase, FIREBASE_URL) {

    // Get Stored TODOs
    var todoRefs = new Firebase(FIREBASE_URL);
    $scope.todos = $firebase(todoRefs);

    // Update the "completed" status
    $scope.changeStatus = function(item) {
      // Get tje Forenase reference of the item
      var itemRef = new Firebase(FIREBASE_URL + item.id);
      // Firebase : Update the item
      $firebase(itemRef).$set({
        id: item.id,
        name: item.name,
        completed: !item.completed
      });
    };

    $scope.removeItem = function(index, item, event) {
      if (item.id === undefined) {
        return;
      }
      $scope.todos.$remove(item.id);
    };

    $scope.addItem = function() {
      var timestamp = Date.now();
      var itemRef = new Firebase(FIREBASE_URL + timestamp);
      $firebase(itemRef).$set({
        id: timestamp,
        name: $scope.todoName,
        completed: false
      });
      $scope.todoName = '';
    };
  });
