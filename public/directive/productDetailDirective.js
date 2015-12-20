/**
 * Created by Rene Ulrich on 18.12.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('productDetailDirective', []);

    /**
     * This directive is for product detailed view
     * The rating function should only be possible for logged on persons!
     * As there is no login yet, rating is possible for guest too
     * */
    app.directive('productDetail',
        function (cartService,
                  productService) {

            var Rating = function () {
                this.user = 'guest';
                this.stars = 4;
                this.comment = '';
                this.time = Date.now();
                return this;
            };

            return {
                restrict: 'E',
                templateUrl: 'templates/tmp.product-detail.html',
                controller: function ($scope) {
                    $scope.rateThis = new Rating();
                    $scope.setRating = function (value) {
                        $scope.rateThis.stars = value;
                    };
                    $scope.sendRating = function (id) {
                        $scope.rateThis.time = Date.now();
                        productService.setRating(id, $scope.rateThis, function () {
                            productService.getById(id, function (product) {
                                $scope.ctrlModel = product[0];
                                $scope.rateThis.length = 0;
                                $scope.rateThis = new Rating();
                            })
                        })
                    };
                },
                scope: {
                    ctrlModel: '=',
                    quantity: '=',
                    rateThis: '='
                }
            };
        }
    );

    /**
     * This directive is for the star rating in product detail view
     * */
    app.directive('starRating', function () {
        return {
            restrict: 'EA',
            template: '<ul class="star-rating" ng-class="{readonly: readonly}">' +
            '<li ng-repeat="star in stars" class="star" ng-class="{filled: star.filled}" ng-click="toggle($index)">' +
            '&#9733' +
            '</li>' +
            '</ul>',
            scope: {
                ratingValue: '=ngModel',
                onRatingSelect: '&?',
                readonly: '=?'
            },
            link: function (scope, element, attributes) {
                function updateStars() {
                    scope.stars = [];
                    for (var i = 0; i < 5; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                }

                scope.toggle = function (index) {
                    if (scope.readonly === undefined || scope.readonly === false) {
                        scope.ratingValue = index + 1;
                        scope.onRatingSelect({
                            rating: index + 1
                        });
                    }
                };
                scope.$watch('ratingValue', function (oldValue, newValue) {
                    if (newValue) {
                        updateStars();
                    }
                });
            }
        };
    });

})(angular);
