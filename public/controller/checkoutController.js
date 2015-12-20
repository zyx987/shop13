/**
 * Created by Rene Ulrich on 28.11.2015.
 */

;(function (angular) {

    'use strict';

    var app = angular.module('checkoutController', []);

    /**
     * Checkout controller of shop13 application
     * */
    app.controller('CheckoutController',

        function (productService,
                  cartService,
                  $scope,
                  $state) {

            /** View Model */
            var vm = this;
            vm.cart = cartService.cart;
            vm.quantity = cartService.quantity;
            vm.checkoutData = cartService.checkoutData;
            vm.complete = false;

            vm.checkout = function () {
                cartService.checkout();
            };

            /** Watch checkout data if complete */
            $scope.$watch(
                function () {
                    return (vm.checkoutData);
                },
                function (newValue, oldValue) {
                    var countTrue = 0;
                    var countAll = 0;
                    Object.keys(vm.checkoutData).forEach(function (key) {
                        if (vm.checkoutData[key]) {
                            countTrue = countTrue + 1;
                        }
                        countAll = countAll + 1;
                    });
                    vm.complete = (countTrue >= countAll);
                    goCart();
                },
                true
            );

            /** Leave checkout view at construction time, if cart is empty
             *  this could happen if someone type in checkout url in browser */
            function goCart () {
                if (!vm.cart.length) {
                    $state.go('cart');
                }
            }
            goCart();
        }
    );

})(angular);
