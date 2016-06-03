myApp.controller('loginCtrl', function ($scope, loginService, $ionicPopup, $state, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

    $scope.data = {};
    $scope.user = {};

    var websocket = new WebSocket("ws://145.93.144.250:8080/MeshServer/serverConnection");
    // var websocket = new WebSocket("ws://localhost/MeshServer/serverConnection");
    $scope.login = function () {
        console.log($scope.user.username);
        console.log($scope.user.password);
        loginService.loginUser($scope.user.username, $scope.user.password, websocket).success(function (data) {
            $state.go('tab.mesh');
        }).error(function (data) {
            var alertPopup = $ionicPopup.alert({
                title: 'Login failed!',
                template: 'Please check your credentials!'
            });
        });
    };

    $scope.logout = function () {

        $ionicLoading.show({template: 'Logging out....'});
        $localstorage.set('loggin_state', '');

        $timeout(function () {
            $ionicLoading.hide();
            $ionicHistory.clearCache();
            $ionicHistory.clearHistory();
            $ionicHistory.nextViewOptions({disableBack: true, historyRoot: true});
            $state.go('login');
        }, 30);

    };
})


;