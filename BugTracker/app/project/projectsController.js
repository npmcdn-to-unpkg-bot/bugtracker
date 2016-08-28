(function(){
    var ProjectsController = function ($scope, projectsFactory){
        console.log("ProjectsController executed!!!");
        $scope.projects = [];

        function init(){
            projectsFactory.getProjects()
                .then(function(response) {
                    $scope.projects = response.data;
                    console.log("Loaded data from json server :" + response.data);
                }, function(data, status, headers, config) {
                    $log.log(data.error + ' ' + status);
                });
        }
        init();
        
    };

    ProjectsController.$inject = ['$scope','projectsFactory'];
    angular.module('bugTracker').controller('ProjectsController',ProjectsController);
}());
