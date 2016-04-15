angular.module('app')
    .controller('loginController', function($scope, loginService) {
        $scope.login = {};

        $scope.signin = function() {
            var username = $scope.login.username;
            var password = $scope.login.password;
            loginService.loginUser(username, password);
        };
    });