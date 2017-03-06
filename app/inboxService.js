/**
 * Created by y.masyan on 06.03.2017.
 */

angular.module('app').factory('inboxService', function ($http) {
  let inboxService = {};

  inboxService.data = [];
  inboxService.getData = function () {
    $http({
      method: 'GET',
      url: 'https://learn.javascript.ru/courses/groups/api/participants?key=1gvlw0r'
    }).then(function (response) {
      console.log('Данные получены!');
      inboxService.data = response.data;
      for (let i = 0; i < inboxService.data.length; i++) {
        inboxService.data[i].messageReceived = new Date(3600 * 24 * 365 * 47 * 1000 * Math.random());
      }
    });
  };
  inboxService.getData();

  return inboxService;
})
