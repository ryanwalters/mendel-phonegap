(() => {
    'use strict';

    angular
        .module('mendel.navigation', [])
        .controller('NavigationController', NavigationController);

    function NavigationController() {

        this.test = 'navigation controller';
    }
})();