/**
 * Created by Rene Ulrich on 03.12.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('searchService', []);

    /**
     * Service for exchanging search data
     * */
    app.factory('searchService',
        function () {
            return {
                results: []
            }
        }
    );

})(angular);
