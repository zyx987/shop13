/**
 * Created by Rene Ulrich on 28.11.2015.
 */


(function (angular) {

    /** Not a Global Scope inside here */

    'use strict';

    var app = angular.module('helpers', []);

    Array.prototype.merge = function (/* variable number of arrays */) {
        for (var i = 0; i < arguments.length; i++) {
            var array = arguments[i];
            for (var j = 0; j < array.length; j++) {
                if (this.indexOf(array[j]) === -1) {
                    this.push(array[j]);
                }
            }
        }
        return this;
    };

    var root = angular.element(document.getElementsByTagName('body'));

    var countWatchers_ = function (element, scopes, count) {
        var scope;
        scope = element.data().$scope;
        if (scope && !(scope.$id in scopes)) {
            scopes[scope.$id] = true;
            if (scope.$$watchers) {
                count += scope.$$watchers.length;
            }
        }
        scope = element.data().$isolateScope;
        if (scope && !(scope.$id in scopes)) {
            scopes[scope.$id] = true;
            if (scope.$$watchers) {
                count += scope.$$watchers.length;
            }
        }
        angular.forEach(element.children(), function (child) {
            count = countWatchers_(angular.element(child), scopes, count);
        });
        return count;
    };

    window.countWatchers = function () {
        return countWatchers_(root, {}, 0);
    };

    setInterval(function () {
        //console.log('Watchers: ' + window.countWatchers());
    }, 5000);


})(angular);
