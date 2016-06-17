myApp.controller('loginCtrl', function ($scope, loginService, $ionicPopup, $state, ionicMaterialInk,websocket) {
    ionicMaterialInk.displayEffect();

    $scope.user = {};
    console.log(websocket);
    var socket = new WebSocket(websocket);
    console.log(socket);

    $scope.login = function () {
        console.log($scope.user);
        // loginService.loginUser($scope.user.username, $scope.user.password, socket).success(function (data) {
            $state.go('tab.mesh');
        // }).error(function (data) {
        //     var alertPopup = $ionicPopup.alert({
        //         title: 'Login failed!',
        //         template: 'Please check your credentials!'
        //     });
        // });
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
