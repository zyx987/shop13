/**
 * Created by Rene Ulrich on 29.11.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('cartService', []);

    var CartEntry = function (data) {
        this.quantity = data.quantity || 1;
        this.product = data.product || {};
        return this;
    };

    app.factory('cartService',
        function (restService,
                  productService) {

            /** Public data and functions */
            var cart = [],
                quantity = {
                    inCart: 0,
                    totalPrice: 0
                },
                createCart = function (ids) {
                    if (ids) {
                        productService.getByIds(ids, function (products) {
                            products.forEach(function (product) {
                                var entry = {
                                    quantity: 1,
                                    product: product
                                };
                                cart.push(new CartEntry(entry));
                            });
                        });
                        count();
                    }
                },
                add = function (id, callback) {
                    if (id) {
                        productService.getByIdsNoUpdate(id, function (product) {
                            var productFound = false;
                            cart.forEach(function (entry) {
                                if (entry.product.id === product[0].id) {
                                    entry.quantity += 1;
                                    productFound = true;
                                }
                            });
                            if (productFound === false) {
                                var entry = {
                                    quantity: 1,
                                    product: product[0]
                                };
                                cart.push(new CartEntry(entry));
                            }
                            count();
                            if (typeof(callback) === 'function') {
                                callback();
                            }
                        });
                    }
                },
                remove = function (id) {
                    cart.forEach(function (entry, idx) {
                        if (entry.product.id === id) {
                            entry.quantity -= 1;
                            if (!entry.quantity) {
                                cart.splice(idx, 1);
                            }
                        }
                    });
                    count();
                },
                getQuantity = function (id) {
                    var quantity = 0;
                    cart.forEach(function (entry) {
                        if (entry.product.id === id) {
                            quantity = entry.quantity;
                        }
                    });
                    return quantity;
                };

            /** Private data and functions */
            var count = function () {
                quantity.inCart = 0;
                quantity.totalPrice = 0;
                cart.forEach(function (item) {
                    quantity.inCart += item.quantity;
                    quantity.totalPrice += (item.quantity * item.product.price);
                });
            };

            return {
                cart: cart,
                quantity: quantity,
                create: createCart,
                add: add,
                remove: remove,
                getQuantity: getQuantity
            };
        }
    );

})();
