myApp.service('registerService', function ($q) {
        return {
            registerUser: function (email, name, pw) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                if (email != null && name != null && pw != null) {
                    deferred.resolve('Welcome ' + name + '!');
                } else {
                    deferred.reject('Please fill in all information.');
                }
                promise.success = function (fn) {
                    promise.then(fn);
                    return promise;
                }
                promise.error = function (fn) {
                    promise.then(null, fn);
                    return promise;
                }
                return promise;
            },
        }
    })
;