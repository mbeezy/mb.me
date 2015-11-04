angular.module('ResumeCtrl', []).controller('ResumeController', ['$scope', 'ResumeFactory', function($scope, ResumeFactory) {

    ResumeFactory.getResume().success(function(data) {
      $scope.resume = data;
    });

}]);
