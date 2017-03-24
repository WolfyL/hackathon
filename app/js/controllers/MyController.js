angular.module("app")
    .controller('MyController', function($scope, NgMap, googleService, camService) {
        var city = "new york";
        var northLat = "";
        var northLng = "";
        var southLat = "";
        var southLng = "";
        // $scope.lat = "";
        // $scope.lng = "";
        var url = "places.json";
        NgMap.getMap().then(function(map) {
            console.log(map.getCenter());
            // console.log('markers', map.markers);
            // console.log('shapes', map.shapes);
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
            camService.getCam(northLat, northLng, southLat, southLng).then(function(res) {
                $scope.square = res.data;
                console.log($scope.square);




                //  id = $scope.all.result.webcams[1].id;
            });

            //  id = $scope.all.result.webcams[1].id;
        });

      



        //
        //     var markers = [];
        //
        // for(var i=0; i< $scope.clientes.length; i++){
        //     markers.push(crearMarcador(i));
        // }
        //
        // var crearMarcador = function(i){
        //     var marker = {
        //             id: i,
        //             idKey: "id",
        //             latitude: $scope.clientes[i].latitud,
        //             longitude: $scope.clientes[i].longitud,
        //             show: false,
        //             title: "<strong>Cod: </strong>" + $scope.clientes[i].codcliente +
        //                     "<br><strong>Nombre: </strong>" + $scope.clientes[i].razonsocial + "<br><strong>Direccion: </strong>" + $scope.clientes[i].direccion
        //         };
        //       };
    });
