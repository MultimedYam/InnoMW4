myApp.service('loginService', function ($q) {
        return {
            loginUser: function (username, password, socket) {

                var deferred = $q.defer();
                var promise = deferred.promise;
                console.log("username: " + username);
                console.log("password: " + password);
                //Sending the login information to the server
                //TODO: HASH the password
                socket.send('{"request":"login","user":[{"username":"' + username + '","password":"' + password + '"}]}');
                //event for receiving messages from the server
                socket.onmessage = onMessage;


                function onMessage(event) {
                    var data = JSON.parse(event.data);
                    checkCredentials(data);
                }

                function checkCredentials(data) {
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