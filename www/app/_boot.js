(() => {
    'use strict';

    document.addEventListener('deviceready', () => {
        angular.element(document).ready(() => {
            angular.bootstrap(document, ['mendel']);
        });
    }, true);
})();