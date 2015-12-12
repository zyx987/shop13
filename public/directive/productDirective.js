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
                    quantity: '=',
                    imgHeight: '=',
                    imgWidth: '='
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

    app.directive('loadImg', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.on('load', function () {
                    var height = element[0].clientHeight;
                    var width = element[0].clientWidth;
                    var ratio = height/width;
                    if (height > 200) {
                        scope.imgHeight = '200px';
                        scope.imgWidth = 200/height*width + 'px';
                    } else if (width > 300) {
                        scope.imgWidth = '300px';
                        scope.imgHeight = 300/width*height + 'px';
                    } else {
                        scope.imgWidth = width;
                        scope.imgHeight = height;
                    }
                    scope.$apply();
                });
            }
        };
    });

})();
