/**
 * Created by y.masyan on 20.02.2017.
 */

angular.module('app')
  .component('userListComponent', {
  controller: function(searchService,contactService) {
    that = this;
    this.searchField = searchService.searchField;

    this.callbackRestoreItems=function () {
      var items = that.selected;
      console.log(items);

      contactService.restoreUsers(items)
    };

    this.deleteItem = (item) => {
      // that.users.splice(that.users.indexOf(item), 1)
      console.log(item);

      contactService.restoreUsers([item])

    };
    that.selected = [];
    that.toggle = function (item) {
      let idx = that.selected.indexOf(item);
      if (idx > -1) {
        that.selected.splice(idx, 1);
      }
      else {
        that.selected.push(item);
      }
    };

    that.exists = function (item) {
      return that.selected.indexOf(item) > -1;
    };

    that.isIndeterminate = function() {
      return (that.selected.length !== 0 &&
      that.selected.length !== that.users.length);
    };

    that.isChecked = function() {
      return that.selected.length === that.users.length;
    };

    that.toggleAll = function() {
      if (that.selected.length === that.users.length) {
        that.selected = [];
      } else if (that.selected.length === 0 || that.selected.length > 0) {
        that.selected = that.users.slice(0);
      }
    };


  
   /* this.toggle = function (item, list) {
      var idx = list.indexOf(item);
      if (idx > -1) {
        list.splice(idx, 1);
      }
      else {
        list.push(item);
      }
    };

    this.exists = function (item, list) {
      return list.indexOf(item) > -1;
    };

    this.isIndeterminate = function() {
      return (this.selected.length !== 0 &&
      this.selected.length !== this.users.length);
    };

    this.isChecked = function() {
      return this.selected.length === this.users.length;
    };

    this.toggleAll = function() {
      if (this.selected.length === this.users.length) {
        this.selected = [];
      } else if (this.selected.length === 0 || this.selected.length > 0) {
        this.selected = this.users.slice(0);
      }
    };
*/
    this.searchFilter = function (item) {
      let email = item.email.toLowerCase();
      let fullName = item.fullName.toLowerCase();
      let search = searchService.searchField.search.toLowerCase();
      if (email.indexOf(search) > -1 || fullName.indexOf(search) > -1) {return true}
    }


  },
  bindings: {
    users: '<',
    search: '=',
  },
  template: `
<user-sidebar-component></user-sidebar-component>
        <div class="controls col-sm-10">
        <select-component is-checked="$ctrl.isChecked" toggle-all="$ctrl.toggleAll()" callback-delete="$ctrl.callbackRestoreItems()"></select-component>            
        </div><!-- controls -->
<div class="col-md-8">
      <md-list ng-cloak>
        <md-list-item ng-repeat="user in $ctrl.users | filter: $ctrl.searchFilter"  ng-click="goToPerson(person.name, $event)" class="noright">
<!--             <label>
                  <input type="checkbox" ng-checked="$ctrl.exists(user)" ng-click="$ctrl.toggle(user)">
              </label>-->
          <md-checkbox class="md-secondary" ng-checked="$ctrl.exists(user)" ng-click="$ctrl.toggle(user)"></md-checkbox>
     
          <!--<img ng-src="{{user.photo}}" class="md-avatar">-->
          <p>{{user.fullName}}</p>
          <p>{{user.email}}</p>
          <!--<p>{{user._id}}</p>-->
          <md-icon md-font-library="material-icons" class="md-secondary" ng-click="doSecondaryAction($event)"
                   aria-label="Chat" ui-sref="common.user({ userId: user._id })">account_box
          </md-icon>
          <!--<md-icon md-font-library="material-icons" ng-click="$ctrl.deleteItem(user)" aria-label="Send Email"
                   class="md-secondary md-hue-3">delete
          </md-icon>-->
        </md-list-item>
      </md-list>
    </div>
`
});
