/**
 * Created by Rene.Jasmin on 29.11.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('homeController', []);

    /**
     * Home controller of shop13 application
     * */
    app.controller('HomeController',

        function (productService) {

            /** View Model */
            var vm = this;
            vm.title = 'Hello Home Controller';
            vm.slides = [];
            vm.index = 0;

            function getSlide(target) {
                var i = target.length;
                var url = '';
                switch (i) {
                    case 0:
                        url = 'slide 1';
                        break;
                    case 1:
                        url = 'slide 2';
                        break;
                    case 2:
                        url = 'slide 3';
                        break;
                }
                return {
                    id: (i + 1),
                    url: url
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

})();

