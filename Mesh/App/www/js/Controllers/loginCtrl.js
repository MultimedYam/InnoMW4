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
        };

        $scope.logout = function(){
            $ionicLoading.show({template:'Logging out....'});
            $localstorage.set('loggin_state', '');

            $timeout(function () {
                $ionicLoading.hide();
                $ionicHistory.clearCache();
                $ionicHistory.clearHistory();
                $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
                $state.go('login');
            }, 30);

        };
    })



;