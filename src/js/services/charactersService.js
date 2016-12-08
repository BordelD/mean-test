crudnode.service("CharactersService", [ "$http", "$q", function($http, $q) {


    this.getList = function(){
        var deferred = $q.defer();
        var req = {
            method: 'GET',
            url: 'api/characters/',
            data: {}
        };
        $http(req).then(
            function (response) {
                deferred.resolve(response.data);
            },
            function (err) {
                deferred.reject(err.data);
            }
        );
        return deferred.promise;
    };

    this.create = function(name, tvshow){
        var character = {
            name : name,
            tvshowName : tvshow
        };

        var deferred = $q.defer();
        var req = {
            method: 'POST',
            url: 'api/characters/',
            headers: {
                'Content-type': 'application/json',
            },
            data: JSON.stringify(character)
        };
        $http(req).then(
            function (response) {
                deferred.resolve(response.data);
            },
            function (err) {
                deferred.reject(err.data);
            }
        );
        return deferred.promise;
    };

    this.update = function(character){

        var deferred = $q.defer();
        var req = {
            method: 'PUT',
            url: 'api/characters/',
            headers: {
                'Content-type': 'application/json',
            },
            data: JSON.stringify(character)
        };
        $http(req).then(
            function (response) {
                deferred.resolve(response.data);
            },
            function (err) {
                deferred.reject(err.data);
            }
        );
        return deferred.promise;
    };

    this.delete = function(id){
        var character = {
            _id : id
        };

        var deferred = $q.defer();
        var req = {
            method: 'DELETE',
            url: 'api/characters/',
            headers: {
                'Content-type': 'application/json',
            },
            data: JSON.stringify(character)
        };
        $http(req).then(
            function (response) {
                deferred.resolve(response.data);
            },
            function (err) {
                deferred.reject(err.data);
            }
        );
        return deferred.promise;
    };

}]);