/**
 * Created by rene.ulrich on 30.09.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    /** Inject all used modules */
    var app = angular.module('shop13', [
        'ngRoute',
        'ngResource',
        'shop13Controller',
        'productService',
        'restService',
        'productDirective',
        'helpers'
    ]);

    app.run(

        function (productService) {

            /** Application is now ready to run */

            /** Load product tree from api */
            productService.getCategoryTree(function () {});

            /** Load all products, available in productsService.all array */
            productService.update();
        }
    );

})();
