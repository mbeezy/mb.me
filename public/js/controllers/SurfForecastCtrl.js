angular.module('SurfForecastCtrl', []).controller('SurfForecastController', ['$scope', 'SurfcastFactory', function($scope, SurfcastFactory) {
      $scope.faveSpot = 'Beacons';
      $scope.currentDate = new Date();
      $scope.selectedSpot = "Hello: ";

      SurfcastFactory.getSdSurfSpots().success(function(data) {
        $scope.sdSpots = data;
      });

      $scope.getSurfSpotForecast = function(spotId) {
        // clear details
        if (document.getElementById('spotDetails') != null) {
          document.getElementById('spotDetails').innerHTML = "";
        }

        // get selected text
        var selected = document.getElementById('surfSpotList');
        $scope.selectedSpot = selected.options[selected.selectedIndex].text;

        SurfcastFactory.getSurfSpotForecast(spotId).success(function(data) {
          $scope.spotForecast = data;
        });
      };
}]);
