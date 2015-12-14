/**
 * Created by Rene Ulrich on 02.12.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('checkoutButtonDirective', []);

    app.directive('checkoutButton',
        function ($state) {
            return {
                restrict: 'E',
                template: '<button class="checkout-button">Check out!</button>',
                scope: {},
                link: function (scope, element, attrs) {
                    element.on('click', function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        $state.go("checkout");
                    });
                }
            }
        }
    );

})();


