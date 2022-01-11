const app = angular.module("myApp", []);
const baseUrl = "https://covid19.mathdro.id/api/deaths";

app.controller("nameCtrl", ($scope, $http) => {
    $http.get(baseUrl)
         .then((response) => {
            $scope.items = response.data;
         }, (error) => {
            console.log(error);
         });

   $scope.orderByMe = function(x) {
      $scope.myOrderBy = x;
   }
});