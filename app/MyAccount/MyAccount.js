angular.module('myApp')
  .controller('acconutCtrl', function($scope) {
    this.phone = /^([+]?[0-9\s-\(\)]{3,25})*$/i;
  });