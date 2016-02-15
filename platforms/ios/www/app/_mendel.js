(() => {
    'use strict';

    angular.module('mendel', [
        'ngMaterial',
        'ngSanitize',
        'ui.router',
        'mendel.components',
        'mendel.home',
        'mendel.layout.navigation',
        'mendel.story'
    ]);
})();