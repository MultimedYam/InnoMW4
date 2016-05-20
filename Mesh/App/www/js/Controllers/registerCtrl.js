angular.module('starter')
    .controller('registerCtrl', function($scope, registerService, $ionicPopup, $state) {
        $scope.data = {};
        var websocket = new WebSocket("ws://145.93.145.49:8080/MeshServer/serverConnection");
        $scope.register = function() {
            registerService.registerUser(websocket, $scope.data.username, $scope.data.password,$scope.data.firstname,$scope.data.lastname,$scope.data.age,$scope.data.sex).success(function(data) {
                $state.go('login');
            }).error(function(data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Register failed!',
                    template: 'Please fill in all information'
                });
            });
        };
    })



;