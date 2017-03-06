/**
 * Created by y.masyan on 06.03.2017.
 */

angular.module('app').factory('authService', function($cookies, $http, $state,userService) {
  'use strict';
  let authService = {};

  authService.status = {
    authorized: false,
    role: false
  };
  authService.loginByToken = function(token) {
    $http.defaults.headers.common['X-Token'] = token;

    return Restangular.all('sessions').get(token)
      .then(function(response) {
        $cookies.accessToken = token;
        authService.status.authorized = true;
        return response;
      });
  };

  authService.loginByCredentials = function(username, password) {
    // return Restangular.all('sessions').post({ email: username, password: password })
    //   .then(function(response) {
    //     return self.loginByToken(response.contents);
    //   });
    console.log(username + ': '+ password);

    if (!userService.users.some(function (item,i) {
        if (username==item.login && password==item.password){
          authService.status.authorized = true;
          authService.status.role = 'admin';
          console.log('Login success');
          $state.go('gmail');
          return true
        }
      })){
      alert("Ошибка авторизации")
    }

    // else if (userService.users.length-1 == i){}

  };
  authService.logout = function() {
    authService.status.authorized = false;
    $cookies.accessToken = '';

    Restangular.all('sessions').remove();
  };

  return authService;
})
