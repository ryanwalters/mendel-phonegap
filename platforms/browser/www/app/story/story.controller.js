(() => {
    'use strict';

    angular
        .module('mendel.story')
        .controller('StoryController', StoryController);

    StoryController.$inject = ['_story'];

    function StoryController(_story) {

        angular.element(document).find('a').on('click', () => {
            console.log('click');
        });

        this.story = _story;
    }
})();