/**
 * Created by Rene Ulrich on 03.12.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('searchService', []);

    app.factory('searchService',
        function () {
            return {
                results: []
            }
        }
    );

})();
