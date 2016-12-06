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

}]);