/**
 * Created by y.masyan on 06.03.2017.
 */

angular.module('app').factory('userService',function ($state) {
  let userService={users:[]};
  userService.newUser = function (login,password) {
    console.log('22222222');
    for (let i = 0; i < userService.users.length; i++) {
      if (userService.users[i].login == login){
        console.log(userService.users[i].login);
        console.log(login);

        alert('Такой пользователь уже существует');
        return
      }
    }
    userService.users.push({login:login,password:password});
    alert("Пользователь создан!");
    $state.go('login');
    console.log(userService.users);

  };
  userService.users.push({login:'admin',password:'password',role:'admin'})
  userService.users.push({login:'1',password:'1',role:'admin'})

  return userService;
});