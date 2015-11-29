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
        'ngTouch',
        'angular-carousel',
        'shop13Controller',
        'cartController',
        'productsController',
        'homeController',
        'productService',
        'cartService',
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
             * Define the static routes
             * */

            /** create home route */
            $stateProviderRef.state('home', {
                "url": "/home",
                "templateUrl": "templates/tmp.home.html",
                "controller": 'HomeController',
                "controllerAs": 'home'
            });

            /** create products route (if someone really wants to view all products) */
            $stateProviderRef.state('products', {
                "url": "/products",
                "templateUrl": "templates/tmp.products.html",
                "controller": function () {
                    var vm = this;
                    productService.update(function (products) {
                        vm.products = products;
                    });
                },
                "controllerAs": 'vm'
            });

            /** create cart route */
            $stateProviderRef.state('cart', {
                "url": "/cart",
                "templateUrl": "templates/tmp.cart.html",
                "controller": 'CartController',
                "controllerAs": 'cart'
            });

            /** start application at home */
            $state.go("home");

            /** if url is falsely, go home */
            $urlRouterProviderRef.otherwise("home");

            /**
             * Define the dynamic routes from database
             * */

            /** Load product tree from api and create the routes */
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
                /** when the product tree is loaded, load the brands from api and create the routes */
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
            });
        }
    );

})();
