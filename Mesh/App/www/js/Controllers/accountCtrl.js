angular.module('starter')
    .controller('accountCtrl', function ($scope,$state) {
        $scope.settings = {
            enableFriends: false,
            shoarma: true
        };

        $scope.logout = function(){
            // $ionicLoading.show({template:'Logging out....'});
            // $localstorage.set('loggin_state', '');
            $state.go('login');
            // $timeout(function () {
            //     // $ionicLoading.hide();
            //     // $ionicHistory.clearCache();
            //     // $ionicHistory.clearHistory();
            //     // $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
            //
            // }, 30);

        };
    })



;