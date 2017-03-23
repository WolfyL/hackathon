angular.module('app')

    .controller('MainController', function($scope, camService, googleService, $sce, ngMap) {
        camService.getAll().then(function(res) {
            $scope.all = res.data;
            console.log($scope.all);
            var id = $scope.all.result.webcams[0].id;

            console.log(id);
            $scope.show = 'https://api.lookr.com/embed/timelapse/' + id + '/lifetime?autoplay=1';
            $scope.trustSrc = function(src) {
                return $sce.trustAsResourceUrl(src);
            };
        });

        googleService.getMap().then(function(res) {
            $scope.map = res.data;
            console.log($scope.map);

        });
        NgMap.getMap().then(function(map) {
            console.log(map.getCenter());
            console.log('markers', map.markers);
            console.log('shapes', map.shapes);
        });
        angular.module('ngMaps').controller('MyCtrl', function() {
    var vm=this;
    vm.data =[
      {foo:1, bar:1},
      {foo:2, bar:2},
      {foo:3, bar:3},
      {foo:4, bar:4},
      {foo:5, bar:5},
      {foo:6, bar:6},
      {foo:7, bar:7}
    ];
    vm.positions =[
      {pos:[40.71, -74.21]},
      {pos:[40.72, -74.20]},
      {pos:[40.73, -74.19]},
      {pos:[40.74, -74.18]},
      {pos:[40.75, -74.17]},
      {pos:[40.76, -74.16]},
      {pos:[40.77, -74.15]}
    ];
    vm.showData = function() {
      alert(this.data.foo);
    }
  });

    });
