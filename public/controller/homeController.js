/**
 * Created by Rene Ulrich on 29.11.2015.
 */

;(function (angular) {

    'use strict';

    var app = angular.module('homeController', []);

    /**
     * Home controller of shop13 application
     * Controls the slides on the home direction
     * */
    app.controller('HomeController',

        function ($state) {

            /** View Model */
            var vm = this;
            vm.slides = [];
            vm.index = 0;

            function getSlide(target) {
                var i = target.length;
                var model = {};
                switch (i) {
                    case 0:
                        model = {
                            goTo: 'effects',
                            imgS: 'carousel/mxr_s.jpg',
                            imgM: 'carousel/mxr_s.jpg',
                            imgL: 'carousel/mxr_m.jpg'
                        };
                        break;
                    case 1:
                        model = {
                            goTo: 'amps',
                            imgS: 'carousel/marshall_s.jpg',
                            imgM: 'carousel/marshall_s.jpg',
                            imgL: 'carousel/marshall_m.jpg'
                        };
                        break;
                    case 2:
                        model = {
                            goTo: 'guitars',
                            imgS: 'carousel/fender_s.jpg',
                            imgM: 'carousel/fender_s.jpg',
                            imgL: 'carousel/fender_m.jpg'
                        };
                        break;
                }
                return {
                    id: (i + 1),
                    model: model
                };
            }

            function addSlide(target) {
                target.push(getSlide(target));
            }

            function addSlides(target, qty) {
                for (var i = 0; i < qty; i++) {
                    addSlide(target);
                }
            }
            addSlides(vm.slides, 3);
        }
    );

})(angular);

