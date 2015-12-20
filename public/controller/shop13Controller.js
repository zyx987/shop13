/**
 * Created by Rene Ulrich on 28.11.2015.
 */

;(function (angular) {

    'use strict';

    var app = angular.module('shop13Controller', []);

    /**
     * Main controller of shop13 application
     * Overall data is defined here
     * */
    app.controller('Shop13Controller',

        function (productService,
                  cartService,
                  searchService,
                  $scope,
                  $filter,
                  $state) {

            /** View Model */
            var vm = this;
            vm.products = productService;
            vm.cart = cartService;
            vm.search = '';

            // This way if you enter a search text in the input field,
            // the router automatically changes to search view
            $scope.$watch(
                function () {
                    return (vm.search);
                },
                function (newValue, oldValue) {
                    if (newValue !== oldValue) {
                        searchService.results = $filter('filter')(productService.all, {$: vm.search});
                        $state.go("search");
                    }
                },
                true
            );

        }
    );

})(angular);
