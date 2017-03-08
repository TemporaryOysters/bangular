app.controller('UserCtrl', function($scope, $http, $location) {

  $scope.user = {
    username: "admin",
    password: "birdbrain",
    email: "steve@steve.com",
    first_name: "Steve",
    last_name: "Brownlee"
  };

  $scope.register = function() {
      $http({
        url: "http://localhost:8000/register/",
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password,
          "email": $scope.user.email,
          "first_name": $scope.user.first_name,
          "last_name": $scope.user.last_name
        }
      }).then(
        res => {
          if (res.data.success === true) {
              $location.path('/products');
          }
        },
        console.error
      );
  };


  $scope.login = function() {
      $http({
        url: "http://localhost:8000/login",
        method: "POST",
        withCredentials: false,
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        data: {
          "username": $scope.user.username,
          "password": $scope.user.password
        }
      }).then(
        res => {
          if (res.data.success === true) {
              $location.path('/products');
          }
        },
        () => {

        }
      );
  };

});