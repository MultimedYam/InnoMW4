myApp.controller('profileCtrl', function ($scope,$state,$ionicSideMenuDelegate) {
        
    $scope.toggleLeft = function() {
        $ionicSideMenuDelegate.toggleLeft();
    };    
    
});