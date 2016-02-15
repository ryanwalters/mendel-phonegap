(() => {
    'use strict';

    angular
        .module('mendel.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['_stories'];

    function HomeController(_stories) {

        console.log(angular.isDefined(StatusBar));

        this.stories = _stories;
    }
})();