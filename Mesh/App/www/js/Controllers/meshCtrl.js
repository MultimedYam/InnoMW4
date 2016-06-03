
angular.module('starter')
    .controller('meshCtrl', function ($scope, $timeout, $ionicSideMenuDelegate, ionicMaterialMotion, ionicMaterialInk) {

    ionicMaterialInk.displayEffect();
        
    $timeout(function(){
         ionicMaterialMotion.ripple();
    },2000);
       
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };
});//controller