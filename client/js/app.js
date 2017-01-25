angular.module('github-api', ['ui.router'])

  .config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider
      .state('search', {
        url: '/',
        templateUrl: 'templates/search.html'
      })
    })

  .controller('SearchController', SearchController)

  SearchController.$inject = ['$http']

  function SearchController($http){
    var vm = this

    vm.search = function(){
      $http.post('/api/contact', JSON.stringify(vm.newMessage))
    }
  }
