angular.module('DigiFactory', []).factory('DigiFactory', ['$http', function($http) {
  var urlBase = 'http://mb-me-api.azurewebsites.net/api';
  var factory = {};

  //http://mb-me-api.azurewebsites.net/api/digi/trackid/123/cookie/PHPSESSID=5f1c0d5e5967f7cc01fc0e9d31d40bff
  factory.getMp3Link = function(trackid, cookie) {
    return $http.get(urlBase + '/digi/trackid/' + trackid + '/cookie/' + cookie);
  };

  return factory;
}]);
