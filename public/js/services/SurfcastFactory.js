angular.module('SurfcastFactory', []).factory('SurfcastFactory', ['$http', function($http) {
  var urlBase = 'http://mb-me-api.azurewebsites.net/api';
  var factory = {};

  //http://api.spitcast.com/api/county/spots/san-diego/
  factory.getSdSurfSpots = function() {
    return $http.get(urlBase + '/surfspots');
  };

  factory.getSurfSpotForecast = function(id) {
    return $http.get(urlBase + '/surfforecast/' + id);
  };

  return factory;
}]);
