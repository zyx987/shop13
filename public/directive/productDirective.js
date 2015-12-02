/**
 * Created by Rene Ulrich on 28.11.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('productDirective', []);

    /**
     *
     * */
    app.directive('product',
        function (cartService) {
            return {
                templateUrl: 'templates/tmp.product.html',
                restrict: 'AE',
                scope: {
                    ctrlModel: '=',
                    cart: '='
                },
                link: function (scope, element, attrs) {
                    element.on('click', function () {
                        if (element.hasClass('red')) {
                            element.removeClass('red');
                        } else {
                            element.addClass('red');
                        }
                    });
                    var button = '#add_'+scope.ctrlModel.id;
                    element.find('button').on('click', function(e){
                        e.stopPropagation();
                        e.preventDefault();
                        if (!scope.cart) {
                            // add to cart
                            cartService.add(scope.ctrlModel.id);
                        } else {
                            // remove from cart
                        }
                    });
                }
            }
        }
    );

})();
