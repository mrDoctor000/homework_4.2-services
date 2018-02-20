angular.module('myApp.menu', [
    'ui.router',
    'ngMessages'
  ])
  .config(function($stateProvider) {

    $stateProvider
      .state({
        name: 'list',
        url: '/list',
        templateUrl: 'PokemonList/PokemonList.html',
        controller: 'PokemonListCtrl as vm'
      })
      .state({
        name: 'createNewPokemon',
        url: '/new',
        templateUrl: 'CreatePokemon/CreatePokemon.html',
        controller: 'CreatePokemonCtrl as vm'
      })
      .state({
        name: 'detail',
        url: '/pokemons/:pokemonId',
        templateUrl: 'PokemonDetail/PokemonDetail.html',
        controller: 'PokemonDetailCtrl as vm'
      })
      .state({
        name: 'detail.edit',
        url: '/edit',
        parent: 'detail',
        templateUrl: 'PokemonDetail/PokemonDetailEdit.html',
        controller: function() {}
      })
      .state({
        name: 'myaccount',
        url: '/myaccount',
        templateUrl: 'MyAccount/MyAccount.html',
        controller: 'acconutCtrl as vm'
      });
  });


angular.module('myApp.menu')
  .controller('menuCtrl', function($scope) {
    this.menu = [
      { name: 'Список', item: 'list' },
      { name: 'Добавить нового', item: 'createNewPokemon' },
      { name: 'Мой аккаунт', item: 'myaccount' }
    ]
  });