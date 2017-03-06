/**
 * Created by y.masyan on 06.03.2017.
 */

angular.module('app').component('messageComponent', {
  template: `
<li class="email-item row">
    <div class="people col-sm-3">
        <ul class="mail-icons list-inline">
            <li>
                <input type="checkbox" class="mail-select">
            </li>
            <li>
                <span class="glyphicon glyphicon-star-empty"></span>
            </li>
            <li>
                <span class="glyphicon glyphicon-cutlery"></span>
            </li>
        </ul>

        <span class="people-names">
            {{$ctrl.card.firstName}} {{$ctrl.card.surname}}
                </span>
    </div><!-- people -->

    <div class="message col-sm-7">
        <div class="clipper">
            <h3>About your pizza</h3>
            -
            <p>Тестовый текст, содержащий имя {{$ctrl.card.firstName}} и страну {{$ctrl.card.country}}</p>
        </div>
    </div><!-- message -->

    <div class="date col-sm-2">
        <date class="pull-right">
            <!--{{$ctrl.card.messageReceived | date}}-->
            <!--{{$ctrl.time | date}}-->
            {{($ctrl.card.messageReceived) | DaysAgo}}</date>
    </div><!-- date -->
    <button ng-click="$ctrl.callbackDelete({x: $ctrl.card})">Delete</button>
</li>
`,
  controller: function () {
  },
  bindings: {
    card: '<card',
    time: '<time',
    callbackDelete: '&delete',
  }
})
