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

    //Search function that runs when button is clicked
    vm.search = function(){
      //Text user enters
      var userInput = vm.newSearch
      console.log(userInput);

      //api call with parameter to search repos based on user text input
      $http({
        method: 'GET',
        url: 'https://api.github.com/search/repositories?q='+userInput
      }).then(function(response) {
        vm.repos = response.data.items
        console.log(vm.repos)
        }, function(err) {
          console.log(err)
        });
    }
  }
