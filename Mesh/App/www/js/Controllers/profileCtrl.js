angular.module('starter')
    .controller('profileCtrl', function ($scope,$state) {
        $scope.settings = {
            enableFriends: false,
            shoarma: true
        };

        $scope.logout = function(){
            $state.go('login');
        };
    })



;