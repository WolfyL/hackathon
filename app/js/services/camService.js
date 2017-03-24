angular.module('app')
    .service('camService', function($http) {
        return {
            getAll: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/list/bbox=48.9021449,2.4699208,48.815573,2.22419', {
                    headers: {
                        "X-Mashape-Key": "ap9suFIZvbmshaHMD1BGMssRW13yp1OryvHjsn1RplKB42OTdT"
                    }

                });
            },
            getList: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/list/limit=50,0', {
                    headers: {
                        "X-Mashape-Key": "ap9suFIZvbmshaHMD1BGMssRW13yp1OryvHjsn1RplKB42OTdT"
                    }

                });
            },
            getExclude: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/list//exclude={webcamid}', {
                    headers: {
                        "X-Mashape-Key": "ap9suFIZvbmshaHMD1BGMssRW13yp1OryvHjsn1RplKB42OTdT"
                    }

                });
            },
            getCam: function() {
                return $http.get('https://webcamstravel.p.mashape.com/webcams/map/{ne_lat},{ne_lng},{sw_lat},{sw_lng},4', {
                    headers: {
                        "X-Mashape-Key": "ap9suFIZvbmshaHMD1BGMssRW13yp1OryvHjsn1RplKB42OTdT"
                    }

                });
            },

        };

    });
