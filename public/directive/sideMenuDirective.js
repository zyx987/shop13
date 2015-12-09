/**
 * Created by Rene Ulrich on 09.12.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('sideMenuDirective', []);

    app.directive('sideMenu',
        function (clientVendor) {

            var dir = 'open';

            return {
                restrict: 'E',
                template: '<div class="side-menu">Side Menu</div>',
                link: function (scope, element, attrs) {
                    element.on('click', function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        // side menu aufklappen
                        if (dir === 'open') {
                            element.parent().find('nav').css( clientVendor.prefix.css + "transform", "translateX(100%)" );
                            dir = 'close';
                        } else if (dir === 'close') {
                            element.parent().find('nav').css( clientVendor.prefix.css + "transform", "translateX(0)" );
                            dir = 'open';
                        }
                    });
                }
            };
        }
    );

})();
