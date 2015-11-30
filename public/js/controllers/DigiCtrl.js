angular.module('DigiCtrl', []).controller('DigiController', ['$scope', 'DigiFactory', function($scope, DigiFactory) {

    $scope.tagline = 'digiwaxx';
    $scope.cookie = 'PHPSESSID=5f1c0d5e5967f7cc01fc0e9d31d40bff';

    $scope.initializeDownload = function(trackid, cookie) {
      console.log(trackid);
      console.log(cookie);

      DigiFactory.getMp3Link(trackid, cookie).success(function(data){
          $scope.mp3Links = data;
        });

    };

}]);
