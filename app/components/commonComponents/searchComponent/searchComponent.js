/**
 * Created by y.masyan on 07.03.2017.
 */

angular.module('app').component('searchComponent', {
  template: `
    <div class="input-group">
  <input type="text" class="form-control" placeholder="Search for..." ng-model="$ctrl.searchField.search">
  <span class="input-group-btn">
  <button class="btn btn-main">
  <span class="glyphicon glyphicon-search"></span>
  </button>
  </span>
  </div><!-- /input-group -->

  <span class="arrow caret" ng-click="$ctrl.clearSearch()"></span>
`,
  controller: function (searchService) {

    this.searchField = searchService.searchField;

    this.clearSearch = searchService.clearSearch;
  }
})
