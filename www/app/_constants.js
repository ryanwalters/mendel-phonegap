(() => {
    'use strict';

    angular
        .module('mendel.constants', [])
        .constant('Api', {
            BASE_URL: 'http://dev.britannica.com/api',
            GET_LATEST_FEATURES: '/latest-features',
            GET_FEATURE: '/feature'
        });
})();