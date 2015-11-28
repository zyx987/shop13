/**
 * Created by Rene.Jasmin on 28.11.2015.
 */

(function () {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('restService', []);

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

})();
