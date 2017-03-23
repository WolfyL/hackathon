angular.module('app')
    .controller('MainController', function($scope, GifService) {
      GifService.getAll().then(function(res) {
            $scope.all = res.data;
            console.log($scope.all);
        });
    });
