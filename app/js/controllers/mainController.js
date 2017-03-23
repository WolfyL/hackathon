angular.module('app')
    .controller('MainController', function($scope, GifService, $sce) {
        GifService.getAll().then(function(res) {
            $scope.all = res.data;
            var id = $scope.all.result.webcams[0].id;
            $scope.trustSrc = function(src) {
              return $sce.trustAsResourceUrl(src);
            };
            $scope.show = 'https://api.lookr.com/embed/timelapse/' + id + '/lifetime?autoplay=1';
        });
    });
