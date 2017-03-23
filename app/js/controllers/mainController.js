angular.module('app')
    .controller('MainController', function($scope, GifService) {
        GifService.getAll().then(function(res) {
            $scope.all = res.data;
            $scope.id = $scope.all.result.webcams[0].id;
            $scope.show = 'https://api.lookr.com/embed/timelapse/' + id + '/lifetime?autoplay=1';
        });
    });
