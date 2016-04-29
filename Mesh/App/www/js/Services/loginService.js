angular.module('starter')

.service('loginService', function ($q) {
        return {
            loginUser: function (name, pw) {
                var deferred = $q.defer();
                var promise = deferred.promise;

                if (name == 'user' && pw == 'secret') {
                    deferred.resolve('Welcome ' + name + '!');
                } else {
                    deferred.reject('Wrong credentials.');
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
            },

            logoutUser: function(){
                return true;

            }
            ,
        // onOpen : function (ws) {
        //
        //     console.log('socket connection opened properly');
        //     // var myObject = {
        //     //     message: 'Hello World!'
        //     // };
        //     // socket.emit()
        //     // ws.('testEvent', JSON.stringify(myObject));
        //     ws.send('I am the client and I\'m listening!');
        //     console.log('message sent');
        // },

        onLogin : function () {
            // var net = require('net');
            //
            // var client = net.connect(4224, '145.93.144.148');
            //
            // client.write('Hello from node.js');
            //
            // client.end();
                var websocket = new WebSocket('wss://145.93.144.148:4224/');
                websocket.onopen = function(){processOpen()};
                websocket.onmessage = function(message){processMessage(message)};
                websocket.onclose = function(message){processClose(message)};
                websocket.onerror = function(message){processError(message)};

                function processOpen(){
                    console.log('server connecting....');
                    sendMessage('je moeder');

                }
                function sendMessage(message){
                    console.log(JSON.stringify(message));
                    websocket.send(JSON.stringify(message));
                    websocket.onclose;
                }
                function processClose(){
                    websocket.send('Client disconnect');
                }
                function processMessage(message){
                    console.log('message: ' + message)
                }
                function processError(){
                    console.log('Error')
                }

            // console.log("Message received = " + evt.data);
            // ws.onMessage = function(e) { console.log(e.data); };
            // ws.onOpen = function(e) {
            //     console.log("Connection established!");
            //     conn.send('Hello Me!');
            //     ws.onClose()
            // };
        }
        
        // onClose : function () {
        //     // websocket is closed.
        //     console.log("Connection closed...");
        // }

        }
    })
;