(() => {
    'use strict';

    angular.element(document).ready(() => {

        window.cordova ?
            document.addEventListener('deviceready', () => {
                angular.bootstrap(document.body, ['mendel']);
            }) :
            angular.bootstrap(document.body, ['mendel']);
    });
})();