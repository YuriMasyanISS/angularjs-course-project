/**
 * Created by y.masyan on 06.03.2017.
 */

angular.module('app').component('messageComponent', {
  template: `
<li class="email-item row">
    <div class="contact col-sm-3">
        <ul class="mail-icons list-inline">                                 
            <li>
              <label>
                  <input type="checkbox" ng-checked="$ctrl.exists($ctrl.mail)" ng-click="$ctrl.toggle({item: $ctrl.mail})">
              </label>
            </li>
        </ul>

        <span class="contact-names">
            {{ $ctrl.contact($ctrl.mail.to)}}              
                </span>
    </div><!-- contact -->

    <div class="message col-sm-7">
        <div class="clipper">
            <h3>{{$ctrl.mail.subject}}</h3>
            -
            <p>{{$ctrl.mail.body}}</p>
        </div>
    </div><!-- message -->
          <md-icon md-font-library="material-icons"            
                   ng-click="$ctrl.callbackDelete({item: $ctrl.mail})"
                   class="md-secondary md-hue-3">delete
          </md-icon>

    <!--<button ng-click="$ctrl.callbackDelete({item: $ctrl.mail})">Delete</button>-->
</li>
`,
  controller: function () {
    that = this;
    this.contact = function (mail) {
      return that.contacts.find(function(item) {
        return item.email == mail
      })['fullName']
    }
  },
  bindings: {
    mail: '<',
    contacts: '<',
    time: '<',
    exists: '<',
    callbackDelete: '&delete',
    toggle: '&',
  }
})
