angular.module('app')
    .service('GifService', function($http) {
            return {
                getAll: function() {
                    return $http.get('https://webcamstravel.p.mashape.com/webcams/list/bbox=48.9021449,2.4699208,48.815573,2.22419', {
                                headers: {
                                    "X-Mashape-Key": "ap9suFIZvbmshaHMD1BGMssRW13yp1OryvHjsn1RplKB42OTdT"}
                            });
                        },
                };
            });
