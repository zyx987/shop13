/**
 * Created by Rene Ulrich on 29.11.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('cartService', []);

    var CartEntry = function (data) {
        this.quantity = data.quantity || 1;
        this.product = data.product || {};
        return this;
    };

    var ProductOrder = function (data) {
        this.quantity = data.quantity;
        this.id = data.product.id;
        this.price = data.product.price;
        return this;
    };

    var CheckoutData = function (data, cart) {
        var cartData = [];
        this.id = Date.now();
        this.name = data.name;
        this.address = data.address;
        this.postalCode = data.postalCode;
        this.city = data.city;
        this.country = data.country;
        this.payment = data.payment;
        this.status = 'pending';
        cart.forEach(function (product) {
            cartData.push(new ProductOrder(product));
        });
        this.cart = cartData;
        return this;
    };

    /**
     * Cart service with all related function incl. api calls
     * */
    app.factory('cartService',
        function (restService,
                  productService) {

            /** Public data and functions */
            var cart = [],
                quantity = {
                    inCart: 0,
                    totalPrice: 0,
                    totalProducts: 0,
                    shipping: 0
                },
                checkoutData = {
                    name: '',
                    address: '',
                    postalCode: '',
                    city: '',
                    country: '',
                    payment: ''
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
                },
                checkoutCart = function () {
                    var order = new CheckoutData(checkoutData, cart);
                    restService.put('api/orders', {order: order}, function () {
                        cart.length = 0;
                        Object.keys(checkoutData).forEach(function (key) {
                            checkoutData[key] = '';
                        });
                        count();
                    });
                };

            /** Private data and functions */
            var count = function () {
                quantity.inCart = 0;
                quantity.totalPrice = 0;
                quantity.totalProducts = 0;
                quantity.shipping = 0;
                cart.forEach(function (item) {
                    quantity.inCart += item.quantity;
                    quantity.totalProducts += (item.quantity * item.product.price);
                });
                if (quantity.totalProducts < 300 && quantity.inCart) {
                    quantity.shipping = 18;
                }
                quantity.totalPrice = quantity.totalProducts + quantity.shipping;
            };

            return {
                cart: cart,
                quantity: quantity,
                checkoutData: checkoutData,
                create: createCart,
                add: add,
                remove: remove,
                getQuantity: getQuantity,
                checkout: checkoutCart
            };
        }
    );

})(angular);
