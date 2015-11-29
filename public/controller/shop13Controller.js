/**
 * Created by Rene.Jasmin on 28.11.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('shop13Controller', []);

    /**
     * Main controller of shop13 application
     * */
    app.controller('Shop13Controller',

        function (productService,
                  cartService) {

            /** View Model */
            var vm = this;
            vm.title = 'shop 13 \\m/ - source of pure tone';
            vm.products = productService;
            vm.cart = cartService;

        }
    );

})();
