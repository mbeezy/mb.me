angular.module('DigiCtrl', []).controller('DigiController', ['$scope', 'DigiFactory', function($scope, DigiFactory) {

    $scope.tagline = 'digiwaxx';
    $scope.cookie = 'PHPSESSID=blahreplacemeblah';

    $scope.initializeDownload = function(trackid, cookie) {
      console.log(trackid);
      console.log(cookie);

      DigiFactory.getMp3Link(trackid, cookie)
        .success(function(data){
          $scope.mp3Links = data;
        })
        .error(function(data) {
          $scope.mp3Links = data;
        });
    };

}]);
