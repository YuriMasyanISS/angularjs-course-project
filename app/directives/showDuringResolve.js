/**
 * Created by y.masyan on 06.03.2017.
 */

angular.module('app').directive('showDuringResolve', function($rootScope) {

  return {
    link: function(scope, element) {

      element.addClass('ng-hide');
      $rootScope.$on('$stateChangeStart', () =>  element.removeClass('ng-hide'));
      $rootScope.$on('$stateChangeSuccess',() => element.addClass('ng-hide'));
    }
  };
});
