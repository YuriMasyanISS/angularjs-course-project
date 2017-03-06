/**
 * Created by y.masyan on 06.03.2017.
 */
angular.module('app').service('PeopleService', function($http) {
  let service = {
    getAllPeople: function() {
      return $http.get('http://test-api.javascript.ru/v1/iliakan/users/', { cache: true }).then(function(resp) {
        console.log(resp);
        return resp.data;
      });
    },
    getPersonById: function(id) {
      return $http.get('http://test-api.javascript.ru/v1/iliakan/users/'+id, { cache: true }).then(function(resp) {
        return resp.data;
      });
    },

    getPerson: function(id) {
      function personMatchesParam(person) {
        return person.id === id;
      }

      return service.getAllPeople().then(function (people) {
        return people.find(personMatchesParam)
      });
    }
  }

  return service;
})
