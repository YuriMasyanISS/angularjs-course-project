/**
 * Created by y.masyan on 20.02.2017.
 */

angular.module('app')
  .component('userListComponent', {
  controller: function(searchService) {

    this.searchField = searchService.searchField;

    this.deleteItem = (index) => {
      this.cards.splice(this.cards.indexOf(index), 1)
    };

    this.cards;
    this.selected;
    this.toggle = function (item, list) {
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
      this.selected.length !== this.cards.length);
    };

    this.isChecked = function() {
      return this.selected.length === this.cards.length;
    };

    this.toggleAll = function() {
      if (this.selected.length === this.cards.length) {
        this.selected = [];
      } else if (this.selected.length === 0 || this.selected.length > 0) {
        this.selected = this.cards.slice(0);
      }
    };

    this.searchFilter = function (item) {
      let email = item.email.toLowerCase();
      let fullName = item.fullName.toLowerCase();
      let search = searchService.searchField.search.toLowerCase();
      if (email.indexOf(search) > -1 || fullName.indexOf(search) > -1) {return true}
    }


  },
  bindings: {
    cards: '<',
    search: '=',
  },
  template: `
<!--<input type="text" placeholder="searchField" ng-model="$ctrl.search">-->
<div class="container">
  <div class="row">
    <div class="col-md-12">
      <md-list ng-cloak>
        <md-list-item ng-repeat="card in $ctrl.cards | filter: $ctrl.searchFilter"  ng-click="goToPerson(person.name, $event)" class="noright">
          <md-checkbox class="md-secondary" ng-model="person.selected"></md-checkbox>
          <!--<img ng-src="{{card.photo}}" class="md-avatar">-->
          <p>{{card.fullName}}</p>
          <p>{{card.email}}</p>
          <p>{{card._id}}</p>
          <md-icon md-font-library="material-icons" class="md-secondary" ng-click="doSecondaryAction($event)"
                   aria-label="Chat" ui-sref="common.user({ userId: card._id })">account_box
          </md-icon>
          <md-icon md-font-library="material-icons" ng-click="$ctrl.deleteItem(card)" aria-label="Send Email"
                   class="md-secondary md-hue-3">delete
          </md-icon>
        </md-list-item>
      </md-list>
    </div>
  </div>
</div>
`
});
