angular.module('app')
    .controller('MainController', function($scope, GifService, $sce) {
        GifService.getAll().then(function(res) {
            $scope.all = res.data;
            var id = $scope.all.result.webcams[0].id;
            $scope.trustSrc = function(src) {
              return $sce.trustAsResourceUrl(src);
            };
            $scope.show = 'https://api.lookr.com/embed/timelapse/' + id + '/lifetime?autoplay=1';
            // $scope.show = htepe;
            // console.log($scope.show);
// =======
//     .controller('MainController', function($scope, GifService,$sce) {
//       GifService.getAll().then(function(res) {
//             $scope.all = res.data;
//             // console.log($scope.all);
//             var id = $scope.all.result.webcams[0].id;
//             console.log(id);
//             var htepe = 'https://api.lookr.com/embed/timelapse/' + id + '/lifetime?autoplay=1';
//
// >>>>>>> fc14b2e880a55787f751e92befe8fdaf607a383d
        });
    });
