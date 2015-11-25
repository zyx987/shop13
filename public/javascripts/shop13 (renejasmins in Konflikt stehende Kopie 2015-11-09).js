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

            var test = {};

            products.update(function(){
                // detect all categories
                products.all.forEach(function(product){
                    var category = new Object([product.category]);
                    vm.categories.push(category);
                });
                // detect all corresponding subcategories
                vm.categories.forEach(function(category, idx){
                    vm.categories[idx] = [];
                });
            });
            products.getByIds(100, function(product){
                test = product;
            });
            products.getByIds([100,200], function(product){
                test = product;
            });
            products.getByCategory('effects', function(product){
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


    Array.prototype.merge = function(/* variable number of arrays */){
        for(var i = 0; i < arguments.length; i++){
            var array = arguments[i];
            for(var j = 0; j < array.length; j++){
                if(this.indexOf(array[j]) === -1) {
                    this.push(array[j]);
                }
            }
        }
        return this;
    };



})();