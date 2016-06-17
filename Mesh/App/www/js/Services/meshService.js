myApp.service('loginService', function ($q) {
        return {
            allInterests: function (socket) {

                //Returns a list with json objects containing Category-Interest per object.
                socket.send('{"request":"getMyInterests"}');

                //To read the serverresponse in onMessage(event)
                var data = JSON.parse(event.data);
                var interests = data["myInterests"];

                for (var item in interests)
                {
                     console.log("Interest " + item + " / Category " + interests[item]);
                }
            }
        }
    })
;