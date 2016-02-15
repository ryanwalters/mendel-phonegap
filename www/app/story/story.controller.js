(() => {
    'use strict';

    angular
        .module('mendel.story')
        .controller('StoryController', StoryController);

    StoryController.$inject = ['_story'];

    function StoryController(_story) {
        this.story = _story;
    }
})();