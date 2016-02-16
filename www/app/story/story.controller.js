(() => {
    'use strict';

    angular
        .module('mendel.story')
        .controller('StoryController', StoryController);

    StoryController.$inject = ['$state', '$timeout', '_story', 'Base'];

    function StoryController($state, $timeout, _story, Base) {

        this.story = _story;

        this.goHome = () => $state.go('mendel.home');


        // --- Open links within the story using the in-app browser

        $timeout(() => {
            angular.element(document.querySelectorAll('a')).on('click', (e) => {

                const href = e.srcElement.getAttribute('href');

                cordova.InAppBrowser.open(href.includes('http') ? href : `${Base.URL}${href}`, '_blank', 'location=no');
            });
        });
    }
})();