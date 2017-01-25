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
          console.log(response)

        }, function errorCallback(response) {
          // called asynchronously if an error occurs
          // or server returns response with an error status.
        });
    }
  }
