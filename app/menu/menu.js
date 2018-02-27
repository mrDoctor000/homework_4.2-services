angular
  .module('myApp')
  .controller('menuCtrl', function($scope) {
    $scope.menu = [
      { name: 'Список', item: 'list' },
      { name: 'Добавить нового', item: 'createNewPokemon' },
      { name: 'Мой аккаунт', item: 'myaccount' }
    ]
  });