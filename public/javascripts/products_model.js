/**
 * Created by rene.ulrich on 07.11.2015.
 */


(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('model', [
        'ngResource'
    ]);

    var Product = function (data) {
        this.id = data.id;
        this.name = data.name;
        this.brand = data.brand;
        this.category = data.category;
        this.price = data.price;
        this.subCategory = data.subCategory;
        this.short = data.short || 'No short description';
        this.description = data.description || 'No description';
        this.color = data.color || null;
        this.picUrl = data.picUrl;
        return this;
    };

    var TreeEntry = function (data) {
        this.category = data.category;
        this.subcategories = data.subcategories;
        return this;
    };

    var Brands = function (data) {
        this.name = data.name;
        this.quantity = data.quantity || 0;
        return this;
    };

    app.factory('restService',
        function ($resource) {
            /** get data from api */
            var get = function (url, data, query, model, callback) {
                var dataIn = $resource(url, query, {
                    query: {
                        interceptor: {
                            response: function (data) {
                                //console.log(data.status);
                            },
                            responseError: function (data) {
                                console.log("Puh.. you get a " + data.status + " on resource: " + url);
                            }
                        },
                        isArray: true
                    }
                }).query(function () {
                    data.length = 0; // Liste löschen
                    dataIn.forEach(function (entry) {
                        data.push(new model(entry));
                    });
                    if (typeof(callback) === 'function') {
                        callback(data);
                    }
                });
            };
            return {
                /**
                 * get data from api
                 * @param url - api url
                 * @param data - where to store the data
                 * @param query - query data or {}
                 * @param model - data model constructor
                 * @param callback - function to call when data are ready
                 * */
                get: get
            };
        }
    );

    app.factory('products',
        function (restService) {

            /** Public data */
            var products = [],
                categoryTree = [],
                brands = [],

                /** Private data */
                product = [],

            /** Public functions */
                /** Update ALL! Products Model from api: /api/products/ */
                update = function (callback) {
                    restService.get('api/products', products, {}, Product, callback);
                },
                /** Get one Product by id from api: /api/products/x */
                getById = function (id, callback) {
                    restService.get('api/products/:id', product, {id: id}, Product, callback);
                },
                /** Get Products by ids: /api/products?ids=x,x,x */
                getByIds = function (ids, callback) {
                    restService.get('api/products?ids=:ids', product, {ids: ids}, Product, callback);
                },
                /** Get Products by brand: /api/products?brand=brand */
                getByBrand = function (brand, callback) {
                    restService.get('api/products?brand=:brand', product, {brand: brand}, Product, callback);
                },
                /** Get Products by ids: /api/products?category=category */
                getByCategory = function (category, callback) {
                    restService.get('api/products?category=:category', product, {category: category}, Product, callback);
                },
                /** Get Product Tree from api: /api/categories */
                getCategoryTree = function (callback) {
                    restService.get('api/categories', categoryTree, {}, TreeEntry, callback);
                },
                /** Get Product Brands from api: /api/brands */
                getBrands = function (callback) {
                    restService.get('/api/brands', brands, {}, Brands, callback);
                };

            /** Make data and functions public */
            return {
                all: products,
                tree: categoryTree,
                brands: brands,
                /** Update ALL! Products Model from api: /api/products/ */
                update: update,
                getById: getById,
                getByIds: getByIds,
                getByCategory: getByCategory,
                getCategoryTree: getCategoryTree,
                getBrands: getBrands,
                getByBrand: getByBrand
            };
        }
    );

})();