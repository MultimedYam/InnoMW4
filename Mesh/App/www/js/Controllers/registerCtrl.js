myApp.controller('registerCtrl', function ($scope, registerService, $ionicPopup, $state,websocket) {
    $scope.data = {};
    $scope.user = {};

    // var websocket = new WebSocket("ws://145.93.144.134:8080/Server_MESH/server");
    $scope.register = function () {
        registerService.registerUser(
            websocket,
            $scope.user.username,
            $scope.user.password,
            $scope.user.firstname,
            $scope.user.lastname,
            $scope.user.age,
            $scope.user.sex
        )
            .success(function (data) {
                $state.go('login');
            })
            .error(function (data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Register failed!',
                    template: 'Please fill in all information'
                });
            });
    };
})


;