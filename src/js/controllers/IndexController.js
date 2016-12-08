crudnode.controller("IndexController", [ "$scope", "CharactersService", function($scope, CharactersService) {

    $scope.charactersList = null;

    $scope.reset = function () {
        $scope.name = null;
        $scope.tvshowName = null;
    };

    $scope.update = function (character) {
        CharactersService.update(character).then(
            function (data) {
                console.log(data);
                CharactersService.getList().then(
                    function (data) {
                        $scope.charactersList = data;
                        console.log(data)
                    },
                    function (err) {
                        console.error(err);
                    }
                )
            },
            function (err) {
                alert(err);
            }
        );
    };

    $scope.delete = function (id) {
        console.log(id);
        CharactersService.delete(id).then(
            function (data) {
                console.log(data);
                CharactersService.getList().then(
                    function (data) {
                        $scope.charactersList = data;
                        console.log(data)
                    },
                    function (err) {
                        console.error(err);
                    }
                )
            },
            function (err) {
                alert(err);
            }
        );
    };

    CharactersService.getList().then(
        function (data) {
            $scope.charactersList = data;
            console.log(data)
        },
        function (err) {
            console.error(err);
        }
    )

    $scope.create = function () {
        if ($scope.name && $scope.tvshowName) {
            CharactersService.create($scope.name, $scope.tvshowName).then(
                function (data) {
                    $scope.charactersList.push(data);
                },
                function (err) {
                    console.error(err);
                }
            )
        }
        else {
            alert("Warning ! Not empty field");
        }

    };

}]);