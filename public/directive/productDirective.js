/**
 * Created by Rene Ulrich on 28.11.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('productDirective', []);

    /**
     * Product view directive
     * */
    app.directive('productView',
        function (cartService,
                  $state) {
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
                    element.on('click', function () {
                        $state.go('product_' + scope.ctrlModel.id);
                    });
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
    app.directive('fitImg', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                element.on('load', function () {
                    var w = window.innerWidth;
                    var height = element[0].clientHeight;
                    var width = element[0].clientWidth;
                    var ratio = height / width;
                    var fitHeight = Number(attrs.fitHeight);
                    var fitWidth = 280;
                    if (Number(attrs.fitWidth)) {
                        fitWidth = Number(attrs.fitWidth);
                    } else if (attrs.fitWidth === 'client') {
                        fitWidth = w;
                    }
                    if (ratio < 0.643) {
                        if (width > fitWidth) {
                            scope.imgWidth = fitWidth;
                            scope.imgHeight = fitWidth / width * height;
                        } else {
                            scope.imgWidth = width;
                            scope.imgHeight = height;
                        }
                    } else if (ratio < 1.556) {
                        if (height > fitHeight) {
                            scope.imgHeight = fitHeight;
                            scope.imgWidth = fitHeight / height * width;
                        } else if (width > fitWidth) {
                            scope.imgWidth = fitWidth;
                            scope.imgHeight = fitWidth / width * height;
                        } else {
                            scope.imgWidth = width;
                            scope.imgHeight = height;
                        }
                    } else {
                        if (height > fitHeight) {
                            scope.imgHeight = fitHeight;
                            scope.imgWidth = fitHeight / height * width;
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

})(angular);
