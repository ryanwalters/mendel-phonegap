(() => {
    'use strict';

    angular
        .module('mendel')
        .config(MendelConfig);

    MendelConfig.$inject = ['$mdThemingProvider', '$stateProvider', '$urlRouterProvider'];

    function MendelConfig($mdThemingProvider, $stateProvider, $urlRouterProvider) {


        // --- OS options

        StatusBar.hide();

        //cordova.InAppBrowser.open('http://britannica.com', '_blank', 'location=no');


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