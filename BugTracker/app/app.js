(function() {
    
    var app = angular.module('bugTracker', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/project', {
                controller: 'ProjectsController',
                templateUrl: 'project/project.html'
            })
               .when('/bug', {
                controller: 'BugCtrl',
                templateUrl: 'bug/bug.html'
            })
            .otherwise( { redirectTo: '/project' } );
    });
    
}());