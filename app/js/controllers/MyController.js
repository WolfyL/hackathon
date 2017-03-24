angular.module("app")
    .controller('MyController', function($scope, NgMap, googleService, camService) {
        var city = "paris";
        var northLat = "";
        var northLng = "";
        var southLat = "";
        var southLng = "";
        $scope.mark = "";
        $scope.lng = "";
        var url = "places.json";
        NgMap.getMap().then(function(map) {
            console.log(map.getCenter());

        });
        googleService.getCoordo(city).then(function(res) {
            $scope.coord = res.data;
            console.log($scope.coord);
            $scope.lat = $scope.coord.results[0].geometry.location.lat.toFixed(3);
            $scope.lng = $scope.coord.results[0].geometry.location.lng.toFixed(3);
            console.log($scope.lat);
            northLat = $scope.coord.results[0].geometry.viewport.northeast.lat.toFixed(3);
            northLng = $scope.coord.results[0].geometry.viewport.northeast.lng.toFixed(3);
            southLat = $scope.coord.results[0].geometry.viewport.southwest.lat.toFixed(3);
            southLng = $scope.coord.results[0].geometry.viewport.southwest.lng.toFixed(3);
            recup();
        });

        function recup() {
            camService.getCam(northLat, northLng, southLat, southLng).then(function(res) {
                $scope.square = res.data;

                var i;
                $scope.marks = $scope.square.result.webcams[i];
                console.log($scope.mark);

                console.log($scope.square);

            });
        }
    });
