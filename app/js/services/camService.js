angular.module('app')
    .service('camService', function($http) {
            return {
                getAll: function() {
                    return $http.get('https://webcamstravel.p.mashape.com/webcams/list/bbox=48.9021449,2.4699208,48.815573,2.22419', {
                                headers: {
                                    "X-Mashape-Key": "ap9suFIZvbmshaHMD1BGMssRW13yp1OryvHjsn1RplKB42OTdT"}
                            });
                        },
                        //
                        //     getX: function(n) {
                        //         return $http.get('http://api.giphy.com/v1/gifs/search?q=sexy+girl&api_key=dc6zaTOxFJmzC&limit=' + n);
                        //     },
                        //     getOne: function(id) {
                        //         return $http.get('http://api.giphy.com/v1/gifs/search?q=sexy+girl&api_key=dc6zaTOxFJmzC' + id);
                        //     },
                        //     getSearch : function(search){
                        //         return $http.get('http://api.giphy.com/v1/gifs/search?q=' + search + '&api_key=dc6zaTOxFJmzC&limit=100');
                        //     },
                        //     getLucky: function() {
                        //         return $http.get('http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC');
                        //     },
                        //     update: function(id, user) {
                        //         return $http.put('http://api.giphy.com/v1/gifs/search?q=sexy+girl&api_key=dc6zaTOxFJmzC' + id, user);
                        //     },
                        //     delete: function(id) {
                        //         return $http.delete('http://api.giphy.com/v1/gifs/search?q=sexy+girl&api_key=dc6zaTOxFJmzC' + id);
                        //     }
                };
            });
