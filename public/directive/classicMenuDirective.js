/**
 * Created by Rene Ulrich on 12.12.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('classicMenuDirective', []);

    app.directive('classicMenu',
        function () {
            return {
                restrict: 'E',
                scope: {
                    menuTree: '=',
                    cartInfo: '='
                },
                templateUrl: 'templates/tmp.classicmenu.html'
            };
        }
    );

})();
