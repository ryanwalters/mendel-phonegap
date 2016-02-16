(() => {
    'use strict';

    angular.module('mendel', [
        'ngMaterial',
        'ngSanitize',
        'ui.router',
        'mendel.components',
        'mendel.constants',
        'mendel.home',
        'mendel.layout.navigation',
        'mendel.services',
        'mendel.story'
    ]);
})();