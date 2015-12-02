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
                    var addButton = '#add_'+scope.ctrlModel.id;
                    var removeButton = '#remove_'+scope.ctrlModel.id;
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
                    //element.find('button').on('click', function(e){
                    //    //e.stopPropagation();
                    //    //e.preventDefault();
                    //    if (element.hasClass('add')) {
                    //        // add to cart
                    //        cartService.add(scope.ctrlModel.id, function () {
                    //            scope.quantity = cartService.getQuantity(scope.ctrlModel.id);
                    //        });
                    //    } else if (element.hasClass('remove')) {
                    //        // remove from cart
                    //        cartService.remove(scope.ctrlModel.id);
                    //        scope.quantity = cartService.getQuantity(scope.ctrlModel.id);
                    //    }
                    //    // this is needed as the cart view is not
                    //    // updated with the updated model
                    //    scope.$apply();
                    //    e.stopPropagation();
                    //    e.preventDefault();
                    //});
            }
            }
        }
    );

})();
