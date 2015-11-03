angular.module('SurfcastFactory', []).factory('SurfcastFactory', ['$http', function($http) {
  var urlBase = 'http://api.spitcast.com/api';
  var factory = {};

  //http://api.spitcast.com/api/county/spots/san-diego/
  factory.getSdSurfSpots = function() {
    return $http.get(urlBase + '/county/spots/san-diego/');
  };

  factory.getSurfSpotForecast = function(id) {
    return $http.get(urlBase + '/spot/forecast/' + id + '/');
  };

  return factory;
}]);
