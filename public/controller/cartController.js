/**
 * Created by Rene Ulrich on 28.11.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('cartController', []);

    /**
     * Cart controller of shop13 application
     * */
    app.controller('CartController',

        function (productService,
                  cartService) {

            /** View Model */
            var vm = this;
            vm.cart = cartService;
        }
    );

})(angular);
