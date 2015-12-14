/**
 * Created by Rene Ulrich on 14.12.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('slideDirective', []);

    /**
     * Product view directive
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

})();
