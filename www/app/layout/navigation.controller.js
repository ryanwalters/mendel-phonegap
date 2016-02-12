(() => {
    'use strict';

    angular
        .module('mendel.layout.navigation', [])
        .controller('NavigationController', NavigationController);

    function NavigationController() {

        this.test = 'navigation controller';
    }
})();