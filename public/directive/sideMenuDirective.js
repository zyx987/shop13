/**
 * Created by Rene Ulrich on 09.12.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('sideMenuDirective', []);

    app.directive('sideMenu',
        function (clientVendor) {

            var dir = 'open';

            return {
                restrict: 'E',
                scope: {
                    menuTree: '=',
                    cartInfo: '='
                },
                templateUrl: 'templates/tmp.sidemenu.html',
                link: function (scope, element, attrs) {
                    element.children().on('click', function (e) {
                        if (dir === 'open') {
                            // open side menu
                            element.children().css( clientVendor.prefix.css + "transform", "translateX(100%)" );
                            dir = 'close';
                        } else if (dir === 'close') {
                            // close side menu
                            element.children().css( clientVendor.prefix.css + "transform", "translateX(0)" );
                            dir = 'open';
                        }
                    })
                }
            };
        }
    );

})(angular);
