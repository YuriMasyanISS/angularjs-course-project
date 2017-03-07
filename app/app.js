/**
 * Created by y.masyan on 08.02.2017.
 */

angular.module('app', ['ui.router', 'ngMaterial','ncy-angular-breadcrumb','ngCookies'])
  .run(function ($http, $rootScope, authService, searchService, $state) {
    $rootScope.$on('$stateChangeStart', function (event, toState) {
      if (toState.name !== 'login' && toState.name !== 'register' && !authService.status.authorized) {
        event.preventDefault();
        $state.go('login');
      }
      if (toState.name == 'login' && authService.status.authorized) {
        event.preventDefault();
        // $state.go('.allmail');
      }
      searchService.searchField.search = '';
    });
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error){
      console.log('$stateChangeError');
      console.log(error);
    });

    $rootScope.$on('$stateNotFound', function (event, toState) {
      console.log('$stateNotFound')
    });
    $rootScope.$on('$stateChangeSuccess', function (event, toState) {
      console.log('$stateChangeSuccess')
    });
    $rootScope.$on('$stateChangeStart', function (event, toState) {
      console.log('$stateChangeStart')
    });

    // $transitions.onEnter({ entering: 'admin' }, function(transition, state) {
    //   var AuditService = trans.injector().get('AuditService');
    //   AuditService.log("Entered " + state.name + " module while transitioning to " + transition.to().name);
    // })
    // $http.get('data/contact.json', { cache: true });
  })
    // .factory('authService', function($http) {
  //   let authorization = {status: false, role: 'admin'};
  //   authService.isAuth = ()=>{};
  // })


/*

  .filter('DaysAgo', function () {
    return function (date, ...args) {
      // console.log(date);
      date = date.getTime();
      let time = new Date();
      time = time.getTime();
      let days = Math.round((time - date) / 3600 / 24);
      return `прошло ${days} дней`;
    }
  })*/
