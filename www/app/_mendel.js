(() => {
    'use strict';

    angular.module('mendel', [
        'ngMaterial',
        'ngSanitize',
        'ui.router',
        'mendel.home',
        'mendel.layout.navigation',
        'mendel.story'
    ]);
})();