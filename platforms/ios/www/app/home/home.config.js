(() => {
    'use strict';

    angular
        .module('mendel.home')
        .config(HomeConfig);

    HomeConfig.$inject = ['$stateProvider'];

    function HomeConfig($stateProvider) {

        $stateProvider.state('mendel.home', {
            controller: 'HomeController',
            controllerAs: 'home',
            resolve: {
                _stories: ['ApiService', (ApiService) =>
                    ApiService.getLatestFeatures().then((response) => response.data)]
            },
            templateUrl: 'app/home/home.html',
            url: '^/home'
        });
    }
})();