/**
 * Created by y.masyan on 06.03.2017.
 */
/**
 * Created by y.masyan on 20.02.2017.
 */

angular.module('app')
  .component('selectComponent', {
    controller: function ($scope, $state) {
      this.reload = function () {
        $state.go($state.current, {}, {reload: true})
      };
    },
    bindings: {
      isChecked: '<',
      toggleAll: '&',
      callbackDelete: '&',
    },
    template: `
<ul class="control-list list-inline">
    <li>
    <!--    <button class="btn btn-control">
        </button>-->
            <input type="checkbox" ng-checked="$ctrl.isChecked()" ng-click="$ctrl.toggleAll()"><span ng-if="$ctrl.isChecked()">Un-</span>Select All
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
    <button class="btn btn-control" ng-click="$ctrl.callbackDelete({item: $ctrl.mail})">
    <md-icon md-font-library="material-icons"            
                   class="md-secondary md-hue-3">delete
          </md-icon>            
        </button>
    </li>
</ul>
`
  });
