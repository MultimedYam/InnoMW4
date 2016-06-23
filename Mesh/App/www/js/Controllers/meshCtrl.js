myApp.controller('meshCtrl', function ($scope, $ionicSideMenuDelegate, websocket) {
    var interests = [];
    var socket = new WebSocket(websocket);
    console.log($scope);
    //for each interest in interests
    $scope.interests = {
        hex1: {
            category: 'placeholder',
            interest: 'placeholder'
        }, hex2: {
            category: 'placeholder',
            interest: 'placeholder'
        }, hex3: {
            category: 'placeholder',
            interest: 'placeholder'
        }, hex5: {
            category: 'placeholder',
            interest: 'placeholder'
        }, hex6: {
            category: 'placeholder',
            interest: 'placeholder'
        }, hex7: {
            category: 'placeholder',
            interest: 'placeholder'
        }
    };

    socket.onopen = function () {
        socket.send('{"request":"getMyInterests","id" :"' + 2 + '" }');
        socket.onmessage = onMessage;
    };


    function onMessage(event) {
        var data = JSON.parse(event.data);
        interests = data["myInterests"];
        var $i = 1;
        for (value in interests) {
            if ($i == 4) {
                $i++;
            }

            $scope['interests']['hex'+$i]['category'] = value;
            $scope['interests']['hex'+$i]['interest'] = interests[value];
            $i = $i +1 ;
        }
    }


    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    angular.element(document).ready(function () {
    });
})
;
