/**
 * Created by Rene Ulrich on 02.12.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('removeButtonDirective', []);

    /**
     * Remove item from cart directive
     * */
    app.directive('removeButton',
        function (cartService) {
            return {
                restrict: 'E',
                template: '<button class="remove-button" ' +
                'ng-bind="displayText"></button>',
                scope: {
                    productId: '=',
                    displayText: '@'
                },
                link: function (scope, element, attrs) {
                    element.on('click', function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        cartService.remove(scope.productId);
                        scope.$parent.quantity = cartService.getQuantity(scope.productId);
                        // this is needed as the cart view is not
                        // updated with the updated model otherwise
                        scope.$apply();
                    });
                }
            }
        }
    );

})(angular);
