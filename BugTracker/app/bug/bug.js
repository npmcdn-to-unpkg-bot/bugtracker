(function(){
    var BugCtrl = function ($scope){
        console.log("BugCtrl executed!!!");
    };
    BugCtrl.$inject = ['$scope'];
    angular.module('bugTracker').controller('BugCtrl',BugCtrl);
 }());

