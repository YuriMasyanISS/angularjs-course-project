/**
 * Created by y.masyan on 06.03.2017.
 */
angular.module('app').service('mailService', function($http,$state) {
  let mailService = {
    getAllMails : function() {
      return $http.get(' http://test-api.javascript.ru/v1/ymasyan').then(function(resp) {
        console.log('resp');
        console.log(resp);
        return resp.data.letters;
      });
    },
    getTrashMails : function() {
      return $http.get(' http://test-api.javascript.ru/v1/ymasyan').then(function(resp) {
        console.log('resp');
        console.log(resp);
        let response =[];
        resp.data.letters.forEach(function (item) {
          if (item.subject == 'trash') {response.push(item)}
        });
        return response;
      });
    },
    deleteMails : function(items) {
      for (var i = 0; i < items.length; i++) {
        items[i].subject = 'trash';
        $http.patch('http://test-api.javascript.ru/v1/ymasyan/letters/'+items[i]._id, items[i]).then(function(resp) {
          console.log('deleted');
          console.log(items);
        });
      }
      // $state.go($state.current, {}, {reload: true})
    },
    restoreMails : function(items) {
      for (var i = 0; i < items.length; i++) {
        items[i].subject = 'inbox';
        $http.patch('http://test-api.javascript.ru/v1/ymasyan/letters/'+items[i]._id, items[i]).then(function(resp) {
          console.log('Restored');
          console.log(items);
        });
      }
      // $state.go($state.current, {}, {reload: true})
    },
    newMail: function(item) {
      console.log('newMail');
      console.log(item);

      $http.post('http://test-api.javascript.ru/v1/ymasyan/letters/', item).then(function(resp) {
        console.log('sent');
        console.log(item);
        alert('sent!');
      });

      // $state.go($state.current, {}, {reload: true})
    },

  };


  return mailService;
})
