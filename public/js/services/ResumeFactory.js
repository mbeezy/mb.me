angular.module('ResumeFactory', []).factory('ResumeFactory', ['$http', function($http) {
  var urlBase = 'http://mb-me-api.azurewebsites.net/api';
  var factory = {};

  //http://mb-me-api.azurewebsites.net/api/resume
  factory.getResume = function() {
    return $http.get(urlBase + '/resume/');
  };

  return factory;
}]);
