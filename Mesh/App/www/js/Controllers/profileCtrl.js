myApp.controller('profileCtrl', function ($scope,$state,$user,websocket) {
    var socket = new WebSocket(websocket);
    console.log($scope);

    



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