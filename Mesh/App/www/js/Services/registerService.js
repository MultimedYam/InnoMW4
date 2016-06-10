myApp.service('registerService', function ($q) {
        return {
            registerUser: function (socket, username, password, firstname, lastname, age, sex) {

                var deferred = $q.defer();
                var promise = deferred.promise;
                console.log("username: " + username);
                console.log("password: " + password);
                // const UNDEFINED = 'undefined';
                //Sending the register information to the server
                //TODO: HASH the password
                if(undefined == username || undefined == password){
                    deferred.reject('Wrong fields.');
                }else{
                    deferred.resolve('Registration succesfull');
                    socket.send('{"request":"register","user":[{"username":' + username + ',"password":"' + password + '","firstname":"' + firstname + '","lastname":"' + lastname + '","age":"' + age + '","sex":"' + sex + '"}]}');
                }
                //event for receiving messages from the server
                socket.onmessage = onMessage;

                function onMessage(event) {
                    var data = JSON.parse(event.data);
                    checkValid(data);
                }

                function checkValid(data) {
                    if ('true' == data.Register) {
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