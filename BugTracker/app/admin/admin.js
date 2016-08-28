(function(){
    var AdminCtrl = function ($scope){
        console.log("AdminCtrl executed!!!");
    };
    BugCtrl.$inject = ['$scope'];
    angular.module('bugTracker').controller('AdminCtrl',AdminCtrl);
 }());

