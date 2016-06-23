myApp.controller('meshCtrl', function ($scope, $ionicSideMenuDelegate, websocket) {

    var socket = new WebSocket(websocket);
    console.log(socket); 

    socket.onopen = function(){
    socket.send('{"request":"getMyInterests"}');
    socket.onmessage = onMessage;

};

    function onMessage(event) {
        console.log("onmessage");

        console.log(event);
        var data = JSON.parse(event.data);
        console.log(data);
        // var JSONList = data["myInterests"];
    }


    // for (var prop in JSONList) {
    //     console.log("Interest " + prop + " / Category " + JSONList[prop]);
    // }

    //for each interest in interests
    $scope.interests = {
        hex1: {
            category: 'balance',
            interest: 'balance'
        }, hex2: {
            category: 'photography',
            interest: 'photography'
        }, hex3: {
            category: 'writing',
            interest: 'writing'
        },  hex5: {
            category: 'balance',
            interest: 'balance'
        }, hex6: {
            category: 'balance',
            interest: 'balance'
        }, hex7: {
            category: 'balance',
            interest: 'balance'
        }
    };

    $scope.toggleLeft = function () {
        $ionicSideMenuDelegate.toggleLeft();
    };

    angular.element(document).ready(function () {
        console.log("test");
    });
});//controller
