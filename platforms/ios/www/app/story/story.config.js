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
                _story: ['$stateParams', 'ApiService', ($stateParams, ApiService) =>
                    ApiService.getFeature($stateParams.id).then((response) => response.data)]
            },
            templateUrl: 'app/story/story.html',
            url: '^/story/:id'
        });
    }
})();