/**
 * Created by Rene Ulrich on 29.11.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('productsController', []);

    /**
     * Products controller of shop13 application
     * */
    app.controller('ProductsController',

        function (productService) {

            /** View Model */
            var vm = this;
            vm.products = [];
            vm.order = '';
            productService.update(function (products) {
                vm.products = products;
            });

        }
    );

})(angular);
