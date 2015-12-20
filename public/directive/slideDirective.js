/**
 * Created by Rene Ulrich on 14.12.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('slideDirective', []);

    /**
     * Slide view directive on home direction
     * */
    app.directive('shop13Slide',
        function () {
            return {
                restrict: 'E',
                templateUrl: 'templates/tmp.slide.html',
                scope: {
                    slideModel: '='
                },
                link: function (scope) {
                    var test = scope;
                }
            };
        }
    );

})(angular);
