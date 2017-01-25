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
    var vm = this;


    vm.search = function(){
      var userInput = vm.newSearch
      console.log(userInput);
      $http({
        method: 'GET',
        url: 'https://api.github.com/search/repositories?q='+userInput
      }).then(function(response) {
        var reposArray = response.data.items
          console.log(reposArray)
        }, function(err) {
          console.log(err)
        });
    }
  }
