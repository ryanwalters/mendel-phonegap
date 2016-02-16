(() => {
    'use strict';

    angular
        .module('mendel.services')
        .factory('ApiService', ApiService);

    ApiService.$inject = ['$http', 'Api'];

    function ApiService($http, Api) {

        return {
            getLatestFeatures: getLatestFeatures,
            getFeature: getFeature
        };


        /**
         * @method getLatestFeatures
         * @param {Number} n - number of features to retrieve
         * @returns {Promise}
         */

        function getLatestFeatures(n = 5) {

            return $http({
                method: 'GET',
                params: {
                    n: n
                },
                url: `${Api.BASE_URL}${Api.GET_LATEST_FEATURES}`
            });
        }


        /**
         * @method getStory
         * @param {Number} featureId
         * @returns {Promise}
         */

        function getFeature(featureId) {

            return $http({
                method: 'GET',
                params: {
                    featureId: featureId
                },
                url: `${Api.BASE_URL}${Api.GET_FEATURE}`
            });
        }
    }
})();