(function() {
    var projectsFactory = function($http) {
    
        var factory = {};
        
        factory.getProjects = function() {
            return $http.get('http://localhost:3000/project');
        };
        
        factory.getProject = function(projectId) {
            return $http.get('http://localhost:3000/project/' + projectId);
        };
        
        return factory;
    };
    
    projectsFactory.$inject = ['$http'];
        
    angular.module('bugTracker').factory('projectsFactory', projectsFactory);
                                           
}());