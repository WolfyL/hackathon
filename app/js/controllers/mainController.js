angular.module('app')
    .controller('MainController', function($scope, camService, googleService, $sce) {
        var id = 0;

        camService.getAll().then(function(res) {
            $scope.all = res.data;
            console.log($scope.all);
             id = $scope.all.result.webcams[1].id;

            console.log(id);
            $scope.show = 'https://api.lookr.com/embed/timelapse/' + id + '/lifetime?autoplay=1';
            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            };

        camService.getList().then(function(res) {
            $scope.list = res.data;
            console.log($scope.list);
        });
    });
});
