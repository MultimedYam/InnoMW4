angular.module('starter')
    .service('registerService', function ($q) {
        return {
            registerUser: function (socket, username, pw,firstname,lastname,age,sex) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                //TODO: HASH the password
                socket.send('{"request":"register","user":[{"username":'+username+',"password":"'+pw+'","firstname":"'+firstname+'","lastname":"'+lastname+'","age":"'+age+'","sex":"'+sex+'"}]}');
                //event for receiving messages from the server
                socket.onmessage = onMessage;


                function onMessage(event) {
                    var data = JSON.parse(event.data);
                    validateRegister(data);
                }

                function validateRegister(data) {
                    if ('true' == data.Register) {
                        deferred.resolve('Register succesvol');
                    } else {
                        deferred.reject('Wrong register.');
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