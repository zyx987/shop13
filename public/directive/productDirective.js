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
                    //element.on('mouseenter', function (e) {
                    //    if (!element.find('p').hasClass('product-item-description')) {
                    //        element.find('p').addClass('product-item-description');
                    //    }
                    //    e.stopPropagation();
                    //    e.preventDefault();
                    //});
                    //element.on('mouseleave', function (e) {
                    //    if (element.find('p').hasClass('product-item-description')) {
                    //        element.find('p').removeClass('product-item-description');
                    //    }
                    //    e.stopPropagation();
                    //    e.preventDefault();
                    //});
                }
            }
        }
    );

})();
