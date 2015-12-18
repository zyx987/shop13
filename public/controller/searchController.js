/**
 * Created by Rene Ulrich on 03.12.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('searchController', []);

    /**
     * Main controller of shop13 application
     * */
    app.controller('SearchController',
        function (productService,
                  searchService,
                  $scope) {

            /** View Model */
            var vm = this;
            vm.results = productService.all;
            productService.update();

            // Without this, the search view isn't updated
            $scope.$watch(
                function (scope) {
                    return (searchService.results);
                },
                function (newValue, oldValue) {
                    vm.results = searchService.results;
                },
                true
            );
        }
    );

})(angular);
