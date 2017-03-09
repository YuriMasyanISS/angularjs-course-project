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
        <div class="controls col-sm-10">
        <select-component is-checked="$ctrl.isChecked" toggle-all="$ctrl.toggleAll()" callback-delete="$ctrl.callbackDeleteItems()"></select-component>            
        </div><!-- controls -->
<div class="inbox col-sm-10">

    <ul class="list-unstyled">
        <message-component mail="mail" 
        time="$ctrl.currentTime" 
        delete="$ctrl.deleteItem(item)" contacts="$ctrl.contacts" 
        ng-repeat="mail in $ctrl.mails | orderBy: 'messageReceived' : true | filter: $ctrl.searchFilter" toggle="$ctrl.toggle(item)" exists="$ctrl.exists"></message-component>
    </ul>
</div>`,
  controller: function (searchService,mailService) {
    let that = this;
    this.searchField = searchService.searchField;
    this.callbackDeleteItems=function () {
      var items = that.selected;
      mailService.deleteMails(items)
    };


    this.searchFilter = function (item) {
      let body = item.body.toLowerCase();
      let search = searchService.searchField.search.toLowerCase();
      if (body.indexOf(search) > -1 ) {return true}
    };
    this.deleteItem = (item) => {
      // that.mails.splice(that.mails.indexOf(index), 1)
      mailService.deleteMails([item])
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
