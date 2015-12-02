/**
 * Created by Rene Ulrich on 02.12.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('removeButtonDirective', []);

    app.directive('removeButton',
        function (cartService) {
            return {
                restrict: 'E',
                template: '<button>Remove from cart</button>',
                scope: {
                    productId: '='
                },
                link: function (scope, element, attrs) {
                    element.on('click', function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        cartService.remove(scope.productId);
                        scope.$parent.quantity = cartService.getQuantity(scope.productId);
                        scope.$apply();
                    });
                }
            }
        }
    );

})();


