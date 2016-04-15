angular.module('starter')
    .controller('loginCtrl', function($scope, loginService, $ionicPopup, $state) {
        $scope.data = {};

        $scope.login = function() {
            loginService.loginUser($scope.data.username, $scope.data.password).success(function(data) {
                $state.go('tab.dash');
            }).error(function(data) {
                var alertPopup = $ionicPopup.alert({
                    title: 'Login failed!',
                    template: 'Please check your credentials!'
                });
            });
        }
    })



;