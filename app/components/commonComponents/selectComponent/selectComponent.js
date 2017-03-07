/**
 * Created by y.masyan on 06.03.2017.
 */
/**
 * Created by y.masyan on 20.02.2017.
 */

angular.module('app')
  .component('selectComponent', {
    controller: function($scope, $state) {
      this.reload = function () {
        $state.go($state.current, {}, {reload: true})
      };

      $scope.items = [1,2,3,4,5];
      $scope.selected = [1];
      $scope.toggle = function (item, list) {
        var idx = list.indexOf(item);
        if (idx > -1) {
          list.splice(idx, 1);
        }
        else {
          list.push(item);
        }
      };
      $scope.exists = function (item, list) {
        return list.indexOf(item) > -1;
      };

      $scope.isIndeterminate = function() {
        return ($scope.selected.length !== 0 &&
        $scope.selected.length !== $scope.items.length);
      };

      $scope.isChecked = function() {
        return $scope.selected.length === $scope.items.length;
      };

      $scope.toggleAll = function() {
        if ($scope.selected.length === $scope.items.length) {
          $scope.selected = [];
        } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
          $scope.selected = $scope.items.slice(0);
        }
      };
    }
    ,
    bindings: {
      cards: '<',
      search: '=',
    },
    template: `
<ul class="control-list list-inline">
    <li>
        <button class="btn btn-control">
            <input type="checkbox" class="mail-select">
            <span class="caret"></span>
        </button>
    </li>
    <li>
        <button class="btn btn-control" ng-click="$ctrl.reload()">
            <span class="glyphicon glyphicon-repeat"></span>
            <!--<md-progress-circular style="margin: auto" ng-disabled="false && !vm.activated" class="md-hue-2" md-diameter="20px"></md-progress-circular>-->
        </button>
    </li>
    <li show-during-resolve>
        <md-progress-circular style="margin: auto"  class="md-hue-2" md-diameter="20px"></md-progress-circular>

    </li>
    <li>
        <button class="text-btn btn btn-control">
            <strong>Delete selected</strong>
            <!--<span class="caret"></span>-->
        </button>
    </li>
</ul>
`
  });
