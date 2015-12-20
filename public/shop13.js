/**
 * Created by Rene Ulrich on 30.09.2015.
 *
 * This is the final thesis of CAS FEE 2015 of Group 13 -> SHOP 13 \m/
 * ===================================================================
 *
 * This is an e-shop application for guitar and related stuff:
 * - The menu is generated according to database entries -> a request to 'api/categories'
 *   will return the menu tree with categories and their corresponding subcategories (menu is two steps
 *   deep). So if the shopkeeper / database maintenance clean up the database, unused (sub)categories won't
 *   be displayed anymore automatically
 * - JQUERY denied :) This application does not use Jquery (only jqlite from angularjs) just load libraries
 *   you really need!
 * - Cool / easy checkout with no unnecessary stuff
 * - Shopping-cart with all info's including shipping
 * - Responsive design for desktop / mobile
 * - Quick search function
 *
 */

(function (angular) {

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
        'searchController',
        'checkoutController',
        'productService',
        'cartService',
        'restService',
        'searchService',
        'clientVendorService',
        'productDirective',
        'addButtonDirective',
        'removeButtonDirective',
        'checkoutButtonDirective',
        'sideMenuDirective',
        'slideDirective',
        'classicMenuDirective',
        'productDetailDirective',
        'helpers',
        'shop13Filters'
    ]);

    /**
     * Application configuration
     * */
    app.config(
        function ($urlRouterProvider,
                  $stateProvider,
                  $locationProvider) {

            $urlRouterProviderRef = $urlRouterProvider;
            $stateProviderRef = $stateProvider;
            // This did not work correctly, made some errors in api calls:
            //$locationProvider.html5Mode({enabled: true, requireBase: false});
        }
    );

    /**
     * Application is now ready to run
     * Configure all routes inside here
     * */
    app.run(
        function (productService,
                  cartService,
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
                "controller": 'ProductsController',
                "controllerAs": 'vm'
            });

            /** create cart route */
            $stateProviderRef.state('cart', {
                "url": "/cart",
                "templateUrl": "templates/tmp.cart.html",
                "controller": 'CartController',
                "controllerAs": 'cart'
            });

            /** create search route */
            $stateProviderRef.state('search', {
                "url": "/search",
                "templateUrl": "templates/tmp.search.html",
                "controller": 'SearchController',
                "controllerAs": 'search'
            });

            /** create search route */
            $stateProviderRef.state('checkout', {
                "url": "/checkout",
                "templateUrl": "templates/tmp.checkout.html",
                "controller": 'CheckoutController',
                "controllerAs": 'checkout'
            });

            /** create search route */
            $stateProviderRef.state('about', {
                "url": "/about",
                "templateUrl": "templates/tmp.about.html"
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
                    /** when the brands are loaded and the routes are created,
                     *  load the products from api and create the routes */
                    productService.update(function () {
                        angular.forEach(productService.all,
                            function (product) {
                                var state = {
                                    "url": "/product/" + product.id,
                                    "template": '<product-detail ctrl-model="vm.product" ' +
                                    'quantity="vm.quantity"></product-detail>',
                                    "controller": function () {
                                        var vm = this;
                                        productService.getById(product.id, function (product) {
                                            vm.product = product[0];
                                            vm.quantity = cartService.getQuantity(product[0].id);
                                        });
                                    },
                                    "controllerAs": 'vm'
                                };
                                $stateProviderRef.state("product_" + product.id, state);
                            }
                        );
                    });
                });
            });
        }
    );

})(angular);
