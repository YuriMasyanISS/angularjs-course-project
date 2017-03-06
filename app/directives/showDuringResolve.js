/**
 * Created by y.masyan on 06.03.2017.
 */

angular.module('app').directive('showDuringResolve', function($rootScope) {

  return {
    link: function(scope, element) {

      element.addClass('ng-hide');
      $rootScope.$on('$stateChangeStart',
        function(event, toState, toParams, fromState, fromParams, options){ element.removeClass('ng-hide') });
      $rootScope.$on('$stateChangeSuccess',
        function(event, toState, toParams, fromState, fromParams, options){ element.addClass('ng-hide') });

      // let unregister = $rootScope.$on('$routeChangeStart', function() {
      //   element.removeClass('ng-hide');
      // });
      //
      // scope.$on('$destroy', unregister);
    }
  };
});
