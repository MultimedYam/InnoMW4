myApp.controller('profileCtrl', function ($scope,$state) {
        $scope.settings = {
            enableFriends: false,
            shoarma: true
        };

        $scope.logout = function () {
            socket.onclose();
            state.go('login');
        };
    })


;