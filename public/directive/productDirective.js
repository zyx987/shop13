/**
 * Created by Rene Ulrich on 28.11.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('productDirective', []);

    /**
     * Product view directive
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


    /**
     * This directive fits the product img in both dimensions into the product view
     * html/css does not support this functionality as I know
     * This is usefull that maybe the shopkeeper / database maintenance does not proper fit the pics in size
     * Maybe it could be done in the database too with imagemagik or so...
     * */
    app.directive('loadImg', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.on('load', function () {
                    var height = element[0].clientHeight;
                    var width = element[0].clientWidth;
                    var ratio = height / width;
                    if (ratio < 0.643) {
                        if (width > 280) {
                            scope.imgWidth = '280px';
                            scope.imgHeight = 280 / width * height + 'px';
                        } else {
                            scope.imgWidth = width;
                            scope.imgHeight = height;
                        }
                    } else if (ratio < 1.556) {
                        if (height > 180) {
                            scope.imgHeight = '180px';
                            scope.imgWidth = 180 / height * width + 'px';
                        } else if (width > 280) {
                            scope.imgWidth = '280px';
                            scope.imgHeight = 280 / width * height + 'px';
                        } else {
                            scope.imgWidth = width;
                            scope.imgHeight = height;
                        }
                    } else {
                        if (height > 180) {
                            scope.imgHeight = '180px';
                            scope.imgWidth = 180 / height * width + 'px';
                        } else {
                            scope.imgWidth = width;
                            scope.imgHeight = height;
                        }
                    }
                    scope.$apply();
                });
            }
        };
    });

})();
