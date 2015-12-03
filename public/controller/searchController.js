/**
 * Created by Rene Ulrich on 03.12.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('searchController', []);

    /**
     * Search controller
     * */
    app.controller('SearchController',
        function (productService) {

            /** View Model */
            var vm = this;
            vm.results = productService.all;
            productService.update();
        }
    );

})();
