angular.module('myApp.menu', [
  'ui.router',
  'ngMessages'
]);

angular
<<<<<<< HEAD
  .module('myApp')
=======
  .module('myApp.menu')
>>>>>>> f13859825f1526f84c1cd0cee7e00624d497016d
  .controller('menuCtrl', function($scope) {
    $scope.menu = [
      { name: 'Список', item: 'list' },
      { name: 'Добавить нового', item: 'createNewPokemon' },
      { name: 'Мой аккаунт', item: 'myaccount' }
    ]
  });