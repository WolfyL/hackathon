angular.module('app')
    .controller('MainController', function($scope, GifService) {
      GifService.getAll().then(function(res) {
            $scope.all = res.data;
            // console.log($scope.all);
            var id = $scope.all.result.webcams[0].id;
            console.log(id);
            $scope.show = 'https://api.lookr.com/embed/timelapse/' + id + '/lifetime?autoplay=1';
            console.log($scope.show);
        });
    });
