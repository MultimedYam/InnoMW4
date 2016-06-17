angular.module('app.routes', [])

    .config(function ($ionicConfigProvider,$stateProvider, $urlRouterProvider) {
        $ionicConfigProvider.tabs.position('bottom');

        $stateProvider
        // setup an abstract state for the tabs directive
            .state('tab', {
                url: '/tab',
                abstract: true,
                templateUrl: 'templates/tabs.html'
            })

            // Each tab has its own nav history stack:
            .state('tab.mesh', {
                url: '/mesh',
                views: {
                    'tab-mesh': {
                        templateUrl: 'templates/tab-mesh.html',
                        controller: 'meshCtrl'
                    }
                }
            })
            .state('tab.friends', {
                url: '/friends',
                views: {
                    'tab-friends': {
                        templateUrl: 'templates/tab-friends.html',
                        controller: 'friendsCtrl'
                    }
                }
            })

            .state('tab.search', {
                url: '/search',
                views: {
                    'tab-search': {
                        templateUrl: 'templates/tab-search.html',
                        controller: 'searchCtrl'
                    }
                }
            })

            .state('tab.profile', {
                url: '/profile',
                views: {
                    'tab-profile': {
                        templateUrl: 'templates/tab-profile.html',
                        controller: 'profileCtrl'
                    }
                }
            })

            //new views
            .state('register', {
                url: '/register',
                templateUrl: 'templates/register.html',
                controller: 'registerCtrl'
            })

            .state('login', {
                url: '/login',
                templateUrl: 'templates/login.html',
                controller: 'loginCtrl',
                data: {
                  css: 'css/login.style.css'
                }
            })

            .state('home', {
                url: '/home',
                templateUrl: 'templates/home.html',
                controller: 'homeCtrl'
            });

        // if none of the above states are matched, use this as the fallback
        $urlRouterProvider.otherwise('home');

    })
;
