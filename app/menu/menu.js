angular.module('myApp.menu', [
  'ui.router',
  'ngMessages'
]);

angular
  .module('myApp.menu')
  .controller('menuCtrl', function($scope) {
    this.menu = [
      { name: 'Список', item: 'list' },
      { name: 'Добавить нового', item: 'createNewPokemon' },
      { name: 'Мой аккаунт', item: 'myaccount' }
    ]
  });