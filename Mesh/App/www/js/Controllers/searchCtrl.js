myApp.controller('searchCtrl', function ($scope, $ionicSideMenuDelegate) {

    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };    
    

});//controller