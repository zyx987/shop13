/**
 * Created by Rene Ulrich on 02.12.2015.
 */

(function (angular) {

    'use strict';

    var filters = angular.module('shop13Filters', []);

    /**
     * This filter trims the length of a text for views
     * */
    filters.filter('trim', function () {
        return function (text, length, end) {
            if (isNaN(length)) {
                length = 10;
            }
            if (end === undefined) {
                end = "...";
            }
            if (text.length <= length || text.length - end.length <= length) {
                return text;
            }
            else {
                return String(text).substring(0, length - end.length) + end;
            }
        };
    });


})(angular);
