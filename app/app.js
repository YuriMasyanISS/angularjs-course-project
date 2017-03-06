/**
 * Created by y.masyan on 08.02.2017.
 */

angular.module('app', ['ui.router', 'ngMaterial','ncy-angular-breadcrumb','ngCookies'])
    .run(function($http, $rootScope, authService, $state) {
  $rootScope.$on('$stateChangeStart', function (event, toState) {
    if (toState.name !== 'login' && toState.name !== 'register' && !authService.status.authorized  ) {
      event.preventDefault();
      $state.go('login');
    }
    if (toState.name == 'login' && authService.status.authorized  ) {
      event.preventDefault();
      $state.go('gmail');
    }
  });

  // $transitions.onEnter({ entering: 'admin' }, function(transition, state) {
  //   let AuditService = trans.injector().get('AuditService');
  //   AuditService.log("Entered " + state.name + " module while transitioning to " + transition.to().name);
  // })
  // $http.get('data/people.json', { cache: true });
})
  // .factory('authService', function($http) {
  //   let authorization = {status: false, role: 'admin'};
  //   authService.isAuth = ()=>{};
  // })



  .filter('DaysAgo', function () {
    return function (date, ...args) {
      // console.log(date);
      date = date.getTime();
      let time = new Date();
      time = time.getTime();
      let days = Math.round((time - date) / 3600 / 24);
      return `прошло ${days} дней`;
    }
  })