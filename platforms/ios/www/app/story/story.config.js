(() => {
    'use strict';

    angular
        .module('mendel.story')
        .config(StoryConfig);

    StoryConfig.$inject = ['$stateProvider'];

    function StoryConfig($stateProvider) {

        $stateProvider.state('mendel.story', {
            controller: 'StoryController',
            controllerAs: 'story',
            resolve: {
                _story: ['$http', '$stateParams', ($http, $stateParams) => $http({
                    method: 'GET',
                    url: 'http://dev.britannica.com/api/story',
                    params: {
                        featureId: $stateParams.id
                    }
                })
                    .then((response) => response.data)]
            },
            templateUrl: 'app/story/story.html',
            url: '^/story/:id'
        });
    }
})();