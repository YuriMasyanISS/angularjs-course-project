/**
 * Created by y.masyan on 06.03.2017.
 */
angular.module('app').component('inboxComponent', {
  template: `
<div class="inbox col-sm-10">
    <input type="text" class="form-control" placeholder="Temporary search field" ng-model="text">
    <ul class="list-unstyled">
        <message-component card="card" time="$ctrl.currentTime" delete="$ctrl.deleteItem(x)" ng-repeat="card in $ctrl.cards.data | orderBy: 'messageReceived' : true | filter: text" ></message-component>
    </ul>
</div>`,
  controller: function (inboxService) {

    this.currentTime = new Date();
    this.cards = inboxService;


    this.deleteItem = (index) => {
      this.cards.data.splice(this.cards.data.indexOf(index), 1)
    };
    this.name = 'John';
    this.isShown = true;

    this.checkMe = (show) => {
      this.isShown = show
    };

  }
})
