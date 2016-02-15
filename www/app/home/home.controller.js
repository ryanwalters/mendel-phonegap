(() => {
    'use strict';

    angular
        .module('mendel.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['_stories'];

    function HomeController(_stories) {

        /*if (angular.isDefined(PushNotification)) {

            const push = PushNotification.init({
                ios: {
                    alert: "true",
                    badge: "true",
                    sound: "true"
                }
            });
        }*/

        this.stories = _stories;
    }
})();