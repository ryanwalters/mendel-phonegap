(() => {
    'use strict';

    angular
        .module('mendel')
        .config(MendelConfig);

    MendelConfig.$inject = ['$mdThemingProvider'];

    function MendelConfig($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue');
    }
})();