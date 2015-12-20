/**
 * Created by Rene Ulrich on 28.11.2015.
 */

(function (angular) {

    'use strict';

    var app = angular.module('restService', []);

    /**
     * All low level api calls
     * */
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
                },
                post = function (url, id, data, callback) {
                    data = JSON.stringify(data);
                    $resource(url + ':id', {id: id}, {
                        update: {
                            method: 'POST', interceptor: {
                                response: function (data) {
                                    //console.log(data.status);
                                },
                                responseError: function (data) {
                                    //console.log(data.status);
                                }
                            }
                        }
                    }).update(data, function () {
                        if (typeof(callback) === 'function') {
                            callback(data);
                        }
                    });
                },
                put = function (url, data, callback) {
                    data = JSON.stringify(data);
                    $resource(url, {}, {
                        update: {
                            method: 'PUT', interceptor: {
                                response: function (data) {
                                    //console.log(data.status);
                                },
                                responseError: function (data) {
                                    //console.log(data.status);
                                }
                            }
                        }
                    }).update(data, function () {
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
                get: get,
                post: post,
                put: put
            };
        }
    );

})(angular);
