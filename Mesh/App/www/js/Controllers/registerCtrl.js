myApp.controller('registerCtrl', function($scope, registerService, $ionicPopup, $state) {
        

        
        $scope.data = {};

        $scope.register = function() {
            registerService.registerUser($scope.data.email, $scope.data.username, $scope.data.password).success(function(data) {
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