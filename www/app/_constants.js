(() => {
    'use strict';

    const DOMAIN = 'http://dev.britannica.com';

    angular
        .module('mendel.constants', [])
        .constant('Api', {
            BASE_URL: `${DOMAIN}/api`,
            GET_LATEST_FEATURES: '/latest-features',
            GET_FEATURE: '/feature'
        })
        .constant('Base', {
            URL: DOMAIN
        });
})();