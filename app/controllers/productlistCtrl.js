app.controller('ProductListCtrl', function($scope, $http, $location) {
  $scope.products = [];

  $http.get('http://localhost:8000/products')
    .then(
      (res) => {
        console.log("data", res.data);
        $scope.products = res.data;
      }
    )

});