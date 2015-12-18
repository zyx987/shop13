/**
 * Created by Rene Ulrich on 09.12.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('clientVendorService', []);

    app.service('clientVendor', function () {

        // This function is from: https://davidwalsh.name/vendor-prefix
        var prefix = (function () {
            var styles = window.getComputedStyle(document.documentElement, ''),
                pre = (Array.prototype.slice
                    .call(styles)
                    .join('')
                    .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o'])
                )[1],
                dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
            return {
                dom: dom,
                lowercase: pre,
                css: '-' + pre + '-',
                js: pre[0].toUpperCase() + pre.substr(1)
            };
        })();

        return {
            prefix: prefix
        };
    });

})(angular);
