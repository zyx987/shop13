/**
 * Created by Rene Ulrich on 02.12.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('checkoutButtonDirective', []);

    /**
     * This directive is for checking out the cart
     * */
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

})(angular);


