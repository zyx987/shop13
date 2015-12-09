/**
 * Created by Rene Ulrich on 28.11.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('checkoutController', []);

    /**
     * Cart controller of shop13 application
     * */
    app.controller('CheckoutController',

        function (productService,
                  cartService) {

            /** View Model */
            var vm = this;
            vm.hello = 'Hello Checkout!';
            vm.products = cartService.cart;
        }
    );

})();
