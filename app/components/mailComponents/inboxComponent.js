/**
 * Created by y.masyan on 06.03.2017.
 */
angular.module('app').component('inboxComponent', {
  bindings: {
    mails: "<",
    contacts: "<",
  },
  template: `
<inbox-sidebar-component></inbox-sidebar-component>
<div class="inbox col-sm-10">
    <!--<input type="text" class="form-control" placeholder="search field" ng-model="text">-->
    <md-checkbox aria-label="Select All" ng-checked="$ctrl.isChecked()" md-indeterminate="$ctrl.isIndeterminate()" ng-click="$ctrl.toggleAll()">
      <span ng-if="$ctrl.isChecked()">Un-</span>Select All
    </md-checkbox>
    <input type="checkbox" ng-checked="$ctrl.isChecked()" md-indeterminate="$ctrl.isIndeterminate()" ng-click="$ctrl.toggleAll()"><span ng-if="$ctrl.isChecked()">Un-</span>Select All

    <ul class="list-unstyled">
        <message-component mail="mail" 
        time="$ctrl.currentTime" 
        delete="$ctrl.deleteItem(item)" contacts="$ctrl.contacts" 
        ng-repeat="mail in $ctrl.mails | orderBy: 'messageReceived' : true | filter: $ctrl.searchFilter" toggle="$ctrl.toggle(item)" exists="$ctrl.exists"></message-component>
    </ul>
</div>`,
  controller: function (searchService) {
    let that = this;
    this.searchField = searchService.searchField;

    this.searchFilter = function (item) {
      // let email = item.email.toLowerCase();
      let body = item.body.toLowerCase();
      let search = searchService.searchField.search.toLowerCase();
      if (body.indexOf(search) > -1 ) {return true}
    };


    this.deleteItem = (index) => {
      that.mails.splice(that.mails.indexOf(index), 1)
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
      that.selected.length !== that.mails.length);
    };

    that.isChecked = function() {
      return that.selected.length === that.mails.length;
    };

    that.toggleAll = function() {
      if (that.selected.length === that.mails.length) {
        that.selected = [];
      } else if (that.selected.length === 0 || that.selected.length > 0) {
        that.selected = that.mails.slice(0);
      }
    };


/**
   * this.checkMe = (show) => {
      this.isShown = show
    };
*/

  }
})
