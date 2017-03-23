angular.module('app')
    .controller('MainController', function($scope, GifService,$sce) {
      GifService.getAll().then(function(res) {
            $scope.all = res.data;
            // console.log($scope.all);
            var id = $scope.all.result.webcams[0].id;
            console.log(id);
            var htepe = 'https://api.lookr.com/embed/timelapse/' + id + '/lifetime?autoplay=1';
            $scope.trustSrc = function(src) {
              return $sce.trustAsResourceUrl(src);
            }
            $scope.show = htepe;
            console.log($scope.show);
        });
    });
