/**
 * Created by y.masyan on 06.03.2017.
 */

angular.module('app').factory('menuToggleService', function ($http) {
  let menuToggleService={mailBox : {current:{},boxes:[]}};
  // menuToggleService.mailBox = {current:{},boxes:[]};

  menuToggleService.getData = function () {
    $http({
      method: 'GET',
      url: 'http://test-api.javascript.ru/v1/ymasyan/mailboxes'
    }).then(function (response) {
      console.log('Данные получены!');
      // menuToggleService.mailBox = {current:{},boxes:[]};
      menuToggleService.mailBox.boxes = [];
      response.data.forEach(function (item) {
        menuToggleService.mailBox.boxes.push(item)
      });
      menuToggleService.mailBox.current = menuToggleService.mailBox.boxes[0];
      console.log(menuToggleService.mailBox);
    });
  };
  menuToggleService.getData();
  menuToggleService.setCurrentBox = function (item) {
    menuToggleService.mailBox.current = item;
  };

  return menuToggleService;
});
