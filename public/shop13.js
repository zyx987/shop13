/**
 * Created by rene.ulrich on 30.09.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var $urlRouterProviderRef = null;
    var $stateProviderRef = null;

    /** Inject all used modules */
    var app = angular.module('shop13', [
        'ui.router',
        'ngResource',
        'angular-carousel',
        'shop13Controller',
        'productService',
        'restService',
        'productDirective',
        'helpers'
    ]);

    /**
     * Application configuration
     * */
    app.config(
        function ($urlRouterProvider,
                  $stateProvider) {

            $urlRouterProviderRef = $urlRouterProvider;
            $stateProviderRef = $stateProvider;
        }
    );

    /**
     * Application is now ready to run
     * */
    app.run(
        function (productService,
                  $state) {

            /**
             * Define the static urls
             * */
            $stateProviderRef.state('home', {
                "url": "/home",
                "templateUrl": "templates/tmp.home.html",
                "controller": '',
                "controllerAs": 'vm'
            });

            /** start application at home */
            $state.go("home");

            /** if url is falsely, go home */
            $urlRouterProviderRef.otherwise("home");

            /**
             * Define the dynamic urls from database
             * */

            /** Load product tree from api and create the urls */
            productService.getCategoryTree(function (tree) {
                angular.forEach(tree,
                    function (value) {
                        var state = {
                            "url": "/" + value.category,
                            "templateUrl": 'templates/tmp.products.html',
                            "controller": function () {
                                var vm = this;
                                productService.getByCategory(value.category, function (products) {
                                    vm.products = products;
                                });
                            },
                            "controllerAs": 'vm'
                        };
                        $stateProviderRef.state(value.category, state);
                        angular.forEach(value.subcategories,
                            function (entry) {
                                var state = {
                                    "url": "/" + value.category + "/" + entry,
                                    "templateUrl": 'templates/tmp.products.html',
                                    "controller": function () {
                                        var vm = this;
                                        productService.getBySubCategory(entry, function (products) {
                                            vm.products = products;
                                        });
                                    },
                                    "controllerAs": 'vm'
                                };
                                $stateProviderRef.state(entry, state);
                            }
                        );
                    }
                );
            });

            /** Load the brands from api and create the urls */
            productService.getBrands(function (brands) {
                angular.forEach(brands,
                    function (value) {
                        var state = {
                            "url": "/" + value.name,
                            "templateUrl": 'templates/tmp.products.html',
                            "controller": function () {
                                var vm = this;
                                productService.getByBrand(value.name, function (products) {
                                    vm.products = products;
                                });
                            },
                            "controllerAs": 'vm'
                        };
                        $stateProviderRef.state(value.name, state);
                    }
                );
            });
        }
    );

})();
