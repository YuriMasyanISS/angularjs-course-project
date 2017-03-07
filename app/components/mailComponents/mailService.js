/**
 * Created by y.masyan on 06.03.2017.
 */
angular.module('app').service('mailService', function($http) {
  let service = {
    getAllMails : function() {
      return $http.get(' http://test-api.javascript.ru/v1/ymasyan').then(function(resp) {
        console.log('resp');
        console.log(resp);
        return resp.data.letters;
      });
    },
    getPersonById: function(id) {
      return $http.get('http://test-api.javascript.ru/v1/iliakan/users/'+id).then(function(resp) {
        return resp.data;
      });
    },

    getPerson: function(id) {
      function personMatchesParam(person) {
        return person.id === id;
      }

      return service.getAllMail().then(function (mail) {
        return mail.find(personMatchesParam)
      });
    }
  };


  return service;
})
