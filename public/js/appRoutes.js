angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

$routeProvider

    // home page
    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    // about page
    .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
    })

    // resume page
    .when('/resume', {
        templateUrl: 'views/resume.html',
        controller: 'ResumeController'
    });

$locationProvider.html5Mode(true);

}]);
