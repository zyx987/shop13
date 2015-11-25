/**
 * Created by rene.ulrich on 30.09.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('shop13', [
        'ngRoute',
        'ngResource',
        'model'
    ]);

    app.controller('Shop13Controller',

        function (products) {

            var vm = this;
            vm.title = 'shop 13 \\m/ - source of pure tone';
            vm.products = products;
            vm.categories = [];
            vm.test = '';

            var test = {};

            products.update(function(){
                test = products.all;
            });
            products.getCategoryTree(function(){
                vm.categories.length = 0;
                vm.categories = products.tree;
            });
            products.getById(100, function (product) {
                test = product[0];
            });
            products.getByIds([100, 200, 301], function (product) {
                test = product;
            });
            products.getByCategory('effects', function (product) {
                test = product;
            });
            products.getBrands(function(){
                test = products.brands;
            });
            products.getByBrand('Gibson', function (product) {
                test = product;
            });
        }
    );

    app.directive('product', function () {
        return {
            templateUrl: 'templates/product_tmpl.html',
            restrict: 'AE',
            scope: {
                ctrlModel: '=',
                ctrlChange: '&'
            },
            link: function (scope, element, attrs) {
                element.on('click', function () {
                    if (element.hasClass('red')) {
                        element.removeClass('red');
                    } else {
                        element.addClass('red');
                    }

                })
            }
        }
    });


    Array.prototype.merge = function (/* variable number of arrays */) {
        for (var i = 0; i < arguments.length; i++) {
            var array = arguments[i];
            for (var j = 0; j < array.length; j++) {
                if (this.indexOf(array[j]) === -1) {
                    this.push(array[j]);
                }
            }
        }
        return this;
    };


})();