(() => {
    'use strict';

    angular
        .module('mendel.components')
        .component('mendelLinks', {
            controller: () => {
                console.log('in app browser');
            }
        });
})();