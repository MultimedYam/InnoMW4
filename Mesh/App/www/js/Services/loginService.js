angular.module('starter')

.service('loginService', function ($q) {
        return {
            loginUser: function (name, pw, socket) {
             
                var deferred = $q.defer();
                var promise = deferred.promise;
                //Sending the login information to the server
                //TODO: HASH the password
                socket.send('{"request":"login","user":[{"username":"'+name+'","password":"'+pw+'"}]}');
                //event for receiving messages from the server
                socket.onmessage = onMessage;


                function onMessage(event)
                {
                    var data = JSON.parse(event.data);
                    checkCredentials(data);
                }

                function checkCredentials(data){
                    if ('true' == data.Login) {
                        deferred.resolve('Welcome ' + name + '!');
                    } else {
                        deferred.reject('Wrong credentials.');
                    }

                }
                promise.success = function (fn) {
                    promise.then(fn);
                    return promise;
                };
                promise.error = function (fn) {
                    promise.then(null, fn);
                    return promise;
                };
                return promise;
            }
        }
    })
;