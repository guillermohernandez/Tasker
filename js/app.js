// angular module with the firebase dependency
angular.module('scheduleApp', ['firebase'])

// main controller with access to firebase
.controller('mainController', function ($scope, $firebase) {

    // connect to firebase 
    var ref = new Firebase("https://scorching-torch-8537.firebaseio.com/days");
    var fb = $firebase(ref);

    // sync as object 
    var syncObject = fb.$asObject();

    // three way data binding
    syncObject.$bindTo($scope, 'days');

    // function to set the default data
    $scope.reset = function () {

        fb.$set({
            monday: {
                name: 'Monday',
                slots: {
                    0700: {
                        time: '7:00am',
                        booked: false
                    },
                    0900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    }
                }
            },
            tuesday: {
                name: 'Tuesday',
                slots: {
                    0900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    }
                }
            },
            wednesday: {
                name: 'Wednesday',
                slots: {
                    0900: {
                        time: '9:00am',
                        booked: false
                    },
                    0110: {
                        time: '11:00am',
                        booked: false
                    }
                }
            }
        });
    };
});