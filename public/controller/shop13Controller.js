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

        function (productService) {

            /** View Model */
            var vm = this;
            vm.title = 'shop 13 \\m/ - source of pure tone';
            vm.products = productService;



            //vm.categories = [];
            //vm.test = '';
            //
            //var test = {};

            //productService.update(function () {
            //    test = productService.all;
            //});
            //productService.getCategoryTree(function () {
            //    vm.categories.length = 0;
            //    vm.categories = productService.tree;
            //});
            //productService.getById(100, function (product) {
            //    test = product[0];
            //});
            //productService.getByIds([100, 200, 301], function (product) {
            //    test = product;
            //});
            //productService.getByCategory('effects', function (product) {
            //    test = product;
            //});
            //productService.getBrands(function () {
            //    test = productService.brands;
            //});
            //productService.getByBrand('Gibson', function (product) {
            //    test = product;
            //});
        }
    );

})();
