(() => {
    'use strict';

    angular
        .module('mendel.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['_stories'];

    function HomeController(_stories) {
        this.stories = _stories;
    }
})();