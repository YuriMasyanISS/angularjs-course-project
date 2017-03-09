/**
 * Created by y.masyan on 06.03.2017.
 */
angular.module('app').service('contactService', function($http) {
  let service = {
    getAllContact: function() {
      return $http.get('http://test-api.javascript.ru/v1/ymasyan/users/').then(function(resp) {
        console.log('getAllContact!');
        console.log(resp);
        return resp.data;
      });
    },
    getPersonById: function(id) {
      return $http.get('http://test-api.javascript.ru/v1/ymasyan/users/'+id).then(function(resp) {
        return resp.data;
      });
    },

    saveUser: function(item) {
      $http.patch('http://test-api.javascript.ru/v1/ymasyan/users/'+item._id, item).then(function(resp) {
        console.log('saved');
        console.log(item);
        alert('saved!');

      });

      // $state.go($state.current, {}, {reload: true})
    },    
    newUser: function(item) {
      console.log('NewUser');
      console.log(item);
      
      $http.post('http://test-api.javascript.ru/v1/ymasyan/users/', item).then(function(resp) {
        console.log('created');
        console.log(item);
        alert('created!');
      });

      // $state.go($state.current, {}, {reload: true})
    },
    deleteUsers : function(items) {
      for (var i = 0; i < items.length; i++) {
        items[i].subject = 'trash';
        $http.patch('http://test-api.javascript.ru/v1/ymasyan/users/'+items[i]._id, items[i]).then(function(resp) {
          console.log('deleted');
          console.log(items);
        });
      }
      // $state.go($state.current, {}, {reload: true})
    },
    restoreUsers : function(items) {
      for (var i = 0; i < items.length; i++) {
        items[i].subject = 'inbox';
        $http.patch('http://test-api.javascript.ru/v1/ymasyan/users/'+items[i]._id, items[i]).then(function(resp) {
          console.log('Restored');
          console.log(items);
        });
      }
      // $state.go($state.current, {}, {reload: true})
    }
    
  };


  return service;
})
