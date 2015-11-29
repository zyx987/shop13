/**
 * Created by Rene.Jasmin on 28.11.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('productDirective', []);

    /**
     *
     * */
    app.directive('product',
        function () {
            return {
                templateUrl: 'templates/product_tmpl.html',
                restrict: 'AE',
                scope: {
                    ctrlModel: '='
                },
                link: function (scope, element, attrs) {
                    element.on('click', function () {
                        if (element.hasClass('red')) {
                            element.removeClass('red');
                        } else {
                            element.addClass('red');
                        }

                    })
                }
            }
        }
    );

})();
