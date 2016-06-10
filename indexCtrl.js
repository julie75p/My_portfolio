'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:indexCtrl
 * @description
 * # indexCtrl
 * Controller of the angularApp
 */

 angular.module('angularApp', [])
   .controller('indexCtrl', function ($scope, $http) {
     $http.get('index.json')
     .success(function(res){
     
          $scope.main_content = res;       
        })
     .error(function(response){

     });
 


   });
