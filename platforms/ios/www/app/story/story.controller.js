(() => {
    'use strict';

    angular
        .module('mendel.story')
        .controller('StoryController', StoryController);

    StoryController.$inject = ['$timeout', '_story', 'Base'];

    function StoryController($timeout, _story, Base) {

        this.story = _story;

        //$timeout(() => {
            angular.element(document.querySelectorAll('a')).on('click', (e) => {

                const href = e.srcElement.getAttribute('href');

                cordova.InAppBrowser.open(href.includes('http') ? href : `${Base.URL}${href}`, '_blank', 'location=no');
            });
        //});
    }
})();