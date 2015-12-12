/**
 * Created by Rene Ulrich on 02.12.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('addButtonDirective', []);

    app.directive('addButton',
        function (cartService) {
            return {
                restrict: 'E',
                template: '<button class="add-button">Add to cart</button>',
                scope: {
                    productId: '='
                },
                link: function (scope, element, attrs) {
                    element.on('click', function (e) {
                        e.stopPropagation();
                        e.preventDefault();
                        cartService.add(scope.productId, function () {
                            scope.$parent.quantity = cartService.getQuantity(scope.productId);
                        });
                    });
                }
            }
        }
    );

})();


