
myApp.controller('friendsCtrl', function ($scope, $timeout, $ionicSideMenuDelegate, ionicMaterialMotion, ionicMaterialInk) {

    ionicMaterialInk.displayEffect();

    $timeout(function(){
         ionicMaterialMotion.ripple();
    },200);

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };

    


});//controller
