var app = angular.module("bangular", ['ngRoute'])
            .constant('apiUrl', "http://localhost:8000");

app.config([
    '$interpolateProvider',
    '$httpProvider',
    '$routeProvider',
    function($interpolateProvider, $httpProvider, $routeProvider) {

      $interpolateProvider.startSymbol('((');
      $interpolateProvider.endSymbol('))');

      $httpProvider.defaults.xsrfCookieName = 'csrftoken';
      $httpProvider.defaults.xsrfHeaderName = 'X-CSRFToken';
      $httpProvider.defaults.withCredentials = true;

    $routeProvider.
      when('/products', {
        templateUrl: 'partials/product_list.html',
        controller: 'ProductListCtrl'
      }).
      when('/login', {
        templateUrl: 'partials/login.html',
        controller: 'UserCtrl'
      }).
      when('/register', {
        templateUrl: 'partials/register.html',
        controller: 'UserCtrl'
      });
  }
]);

angular.module('bangular').factory('CustomerFactory', [
  "$http",
  "apiUrl",
  ($http, apiUrl) => {
    const httpGet = $http.get(apiUrl);

    return {
      getApiRoot () {
        return httpGet.then(res => res.data)
      }
    }
  }
]);