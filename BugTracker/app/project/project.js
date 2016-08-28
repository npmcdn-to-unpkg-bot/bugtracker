(function(){
    var ProjectCtrl = function ($scope){
        console.log("ProjectCtrl executed!!!");
        $scope.rowCollection = [
        {name: 'DDS', ASMS: 53510, creationDate: new Date('2016-05-21'), active: true},
        {name: 'DVIM', ASMS: 55510, creationDate: new Date('2016-08-12'), active: false},
        {name: 'GDDS', ASMS: 56510, creationDate: new Date('2016-11-11'), active: true}
    ];
    };
    
    ProjectCtrl.$inject = ['$scope'];
    angular.module('bugTracker').controller('ProjectCtrl',ProjectCtrl);
 }());
