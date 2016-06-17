
myApp.controller('meshCtrl', function ($scope, $timeout, $ionicSideMenuDelegate, ionicMaterialMotion, ionicMaterialInk,websocket) {

    ionicMaterialInk.displayEffect();

  
        
    $timeout(function(){
         ionicMaterialMotion.ripple();
    },200);
       
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
    var socket = new WebSocket(websocket);
    
});//controller