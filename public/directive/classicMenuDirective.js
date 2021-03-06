/**
 * Created by Rene Ulrich on 12.12.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('classicMenuDirective', []);

    /**
     * This directive shows the classic menu
     * */
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

})(angular);
