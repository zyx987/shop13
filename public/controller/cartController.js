/**
 * Created by Rene Ulrich on 28.11.2015.
 */

(function () {

    /** Not a Global Scope inside here */

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
            vm.items = cartService.cart;
            //cartService.add(101);
            //cartService.add(300);

        }
    );

})();
