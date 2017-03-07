/**
 * Created by y.masyan on 06.03.2017.
 */
angular.module('app').service('contactService', function($http) {
  let service = {
    getAllContact: function() {
      return $http.get('http://test-api.javascript.ru/v1/ymasyan/users/').then(function(resp) {
        console.log(resp);
        return resp.data;
      });
    },
    getPersonById: function(id) {
      return $http.get('http://test-api.javascript.ru/v1/ymasyan/users/'+id).then(function(resp) {
        return resp.data;
      });
    },

    getPerson: function(id) {
      function personMatchesParam(person) {
        return person.id === id;
      }

      return service.getAllContact().then(function (contact) {
        return contact.find(personMatchesParam)
      });
    }
  };


  return service;
})
