crudnode.controller("IndexController", [ "$scope", "CharactersService", function($scope, CharactersService) {

    $scope.charactersList = null;

    CharactersService.getList().then(
        function (data) {
            $scope.charactersList = data;
            console.log(data)
        },
        function (err) {
            console.error(err);
        }
    )



}]);