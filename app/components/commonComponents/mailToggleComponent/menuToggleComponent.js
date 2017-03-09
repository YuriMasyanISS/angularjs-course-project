/**
 * Created by y.masyan on 06.03.2017.
 */

angular.module('app').component('menuToggleComponent', {
  bindings: {
    mails: "<",
  },
  template: `
<md-menu>
            {{$ctrl.mailBox.current.title}} 
    <md-button aria-label="Open phone interactions menu" class="md-icon-button"  ng-click="$mdOpenMenu()">
                    <img src="public/img/profile.jpg" class="img-circle">             
    </md-button>

    <md-menu-content width="4">
        <md-menu-item ng-repeat="box in $ctrl.mailBox.boxes">
            <md-button ng-click="$ctrl.setAsCurrent(box)">
                <md-icon md-svg-icon="call:dialpad" md-menu-align-target=""></md-icon>
                {{box.title}}
            </md-button>
        </md-menu-item>
     </md-menu-content>
</md-menu>
`,
  controller: function (menuToggleService) {
    this.openMenu = function($mdMenu, ev) {
      originatorEv = ev;
      $mdMenu.open(ev);
    };

    let that = this;
    this.mailBox = menuToggleService.mailBox;
    this.setAsCurrent = function (item) {
      menuToggleService.setCurrentBox(item)
    };
  }
});
