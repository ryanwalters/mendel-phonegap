(() => {
    'use strict';

    angular
        .module('mendel')
        .config(MendelConfig);

    MendelConfig.$inject = ['$mdThemingProvider', '$stateProvider', '$urlRouterProvider'];

    function MendelConfig($mdThemingProvider, $stateProvider, $urlRouterProvider) {


        // --- OS options

        StatusBar.hide();


        // --- Material theme setup

        $mdThemingProvider.theme('default')
            .primaryPalette('light-blue', {
                'default': '900'
            });


        // --- Default routing

        $urlRouterProvider.otherwise('/home');

        $stateProvider.state('mendel', {
            abstract: true,
            controller: 'MendelController',
            template: '<ui-view />',
            url: '/'
        });
    }
})();