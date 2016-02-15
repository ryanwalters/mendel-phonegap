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
                _stories: ['$http', ($http) => $http({
                        method: 'GET',
                        params: {
                            n: 5
                        },
                        url: 'http://dev.britannica.com/api/last-news-features'
                    })
                        .then((response) => response.data)
                ]
            },
            templateUrl: 'app/home/home.html',
            url: '^/home'
        });
    }
})();