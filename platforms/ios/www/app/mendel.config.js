(() => {
    'use strict';

    angular
        .module('mendel')
        .config(MendelConfig);

    MendelConfig.$inject = ['$mdThemingProvider', '$stateProvider', '$urlRouterProvider'];

    function MendelConfig($mdThemingProvider, $stateProvider, $urlRouterProvider) {


        // --- Material theme setup

        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue', {
                'default': '900'
            });


        // --- Default routing

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('mendel', {
            abstract: true,
            template: '<ui-view />',
            url: '/'
        });
    }
})();