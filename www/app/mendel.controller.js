(() => {
    'use strict';

    angular
        .module('mendel')
        .controller('MendelController', MendelController);

    MendelController.$inject = ['$rootScope', '$window'];

    function MendelController($rootScope, $window) {


        // --- Global state change operations

        $rootScope.$on('$stateChangeSuccess', () => {
            console.log('complete');
            $window.scrollTo(0, 0)
        });
    }
})();