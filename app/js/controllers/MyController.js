angular.module("app")
    .controller('MyController', function(NgMap) {
        NgMap.getMap().then(function(map) {
            console.log(map.getCenter());
            // console.log('markers', map.markers);
            // console.log('shapes', map.shapes);
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
