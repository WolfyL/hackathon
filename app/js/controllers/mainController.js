angular.module('app')
    .controller('MainController', function($scope, camService, googleService,$sce) {
      camService.getAll().then(function(res) {
            $scope.all = res.data;
            // console.log($scope.all);
            var id = $scope.all.result.webcams[0].id;
            console.log(id);
            $scope.show = 'https://api.lookr.com/embed/timelapse/' + id + '/lifetime?autoplay=1';
            $scope.trustSrc = function(src) {
              return $sce.trustAsResourceUrl(src);
            };
            GifService.getAll().then(function(res) {
                  $scope.all = res.data;

        });
    });
  });
