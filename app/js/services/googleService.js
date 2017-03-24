angular.module('app')
    .service('googleService', function($http) {
        return {
            getMap: function() {
                return $http.get('https://maps.googleapis.com/maps/api/js?key=AIzaSyBIGTb6ZS-IOh6w-_XyU7Of4bKdFZ_LCjQ&callback=initMap' );
            },
            getCoordo: function(city) {
                return $http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + city +'&key=AIzaSyBIGTb6ZS-IOh6w-_XyU7Of4bKdFZ_LCjQ&callbac');
            },
            update: function(id, user) {
                return $http.put('/users/' + id, user);
            },
            delete: function(id) {
                return $http.delete('/users/' + id);
            }
        };
    });
