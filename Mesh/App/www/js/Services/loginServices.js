angular.module('app')
    .factory('loginService', function(sessionService, $state, $ionicHistory, $ionicPopup, $translate) {

        var loginUser = function(username, password) {
            var params = [username, password, sessionService.getDevice().platform, sessionService.getDevice().model, sessionService.getDevice().version];
            sessionService.sendPostRequest("login", params)
                .then(function(response) {
                    if(isAuthenticated(response)) {
                        handleLogin(response);
                    } else {
                        $state.go("login");
                    }
                });
        };

        var isAuthenticated = function(data) {
            //Check if the user is authenticated
            //data if no server to be checked
            if (data.id === undefined || data.id === null) {
                $translate(['title', 'invalid_user_message']).then(function(translations) {
                    var alertPopup = $ionicPopup.alert({
                        title: translations.title,
                        template: translations.invalid_user_message
                    });
                });
                return false;
            }
            return true;
        };

        var handleLogin = function(data) {
            $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true
            }); 
            sessionService.setUserId(data.id);
            window.localStorage.setItem('userId', data.id);
            //Send the PushNotification regId
            sessionService.sendPostRequest("updateRegisteredIdForPushNotifications", [sessionService.getPushRegistrationId()]);
            $state.go('tab.dashboard');
        };

        var logout = function() {
            sessionService.sendPostRequest("logout", null);
            window.localStorage.setItem('userId',undefined);
            $ionicHistory.clearCache().then(
                function() {
                    $state.go('login');
                }
            );

        };

        return {
            loginUser: loginUser,
            logout: logout
        };
    });