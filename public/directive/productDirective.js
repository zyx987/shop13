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
    app.directive('productView',
        function (cartService) {
            return {
                templateUrl: 'templates/tmp.product.html',
                restrict: 'AE',
                scope: {
                    ctrlModel: '=',
                    quantity: '='
                },
                link: function (scope, element, attrs) {
                    scope.quantity = cartService.getQuantity(scope.ctrlModel.id);
                    element.on('click', function (e) {
                        if (element.hasClass('red')) {
                            element.removeClass('red');
                        } else {
                            element.addClass('red');
                        }
                        e.stopPropagation();
                        e.preventDefault();
                    });
                }
            }
        }
    );

})();
