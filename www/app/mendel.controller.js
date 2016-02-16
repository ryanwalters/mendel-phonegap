(() => {
    'use strict';

    angular
        .module('mendel')
        .controller('MendelController', MendelController);

    MendelController.$inject = ['$rootScope', '$window'];

    function MendelController($rootScope, $window) {


        // --- Global state change operations

        $rootScope.$on('$stateChangeSuccess', () => document.querySelector('md-content').scrollTop = 0);
    }
})();