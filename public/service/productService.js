/**
 * Created by rene.ulrich on 07.11.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('productService', []);

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

    app.factory('productService',
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