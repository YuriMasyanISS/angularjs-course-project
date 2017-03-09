/**
 * Created by y.masyan on 06.03.2017.
 */
angular.module('app').component('newMailComponent', {
  bindings: {
    mails: "<",
    contacts: "<",
  },
  controller: function (contactService, mailService) {
    that = this;
/*    var xcontacts =[];
    console.log(this.contacts);

    this.contacts.forEach(function (item) {
      xcontacts.push(item.email)
    });
    this.contacts = xcontacts;*/
    this.contactService = contactService;
    this.mailService = mailService;
    this.mail ={subject:'sent',mailbox:'58bc5f2c55fc9c1d04587e31'};
    // this.mail.to = $ctrl.contact.email
    this.contactService = contactService;

  },
  template: `

<inbox-sidebar-component></inbox-sidebar-component>
    <div class="col-md-8" >
    <md-content>
        <form ng-submit="$ctrl.mailService.newMail({subject:'sent', to: $ctrl.contact.email, mailbox:'58bc5f2c55fc9c1d04587e31',body:$ctrl.mail.body})" name="mailForm" style="margin: 20px">
<!--{{$ctrl.contacts}}-->
            <div layout="column">
            <md-autocomplete md-selected-item="$ctrl.contact" md-search-text="$ctrl.searchText" md-items="item in $ctrl.contacts | filter: {email: $ctrl.searchText}" md-item-text="item.email">
  <span md-highlight-text="searchText">{{item.email}}</span>
          <md-not-found>
          No contact matching "{{$ctrl.searchText}}" were found.  
          <md-button ng-click="$ctrl.contactService.newUser({email: $ctrl.searchText, fullName: $ctrl.searchText})" ng-disabled="mailForm.$invalid"> Create a new one!</md-button>
        </md-not-found>
</md-autocomplete>
 
            </div>
            
       
            
        <md-input-container class="md-block">
          <label>Body</label>
          <textarea ng-model="$ctrl.mail.body" md-maxlength="500" rows="5" md-select-on-focus></textarea>
        </md-input-container>
        
            <div>
                <md-button class="md-raised" type="submit" ng-disabled="mailForm.$invalid">Submit</md-button>
            </div>

        </form>
    </md-content>
    </div >
`,
})
/*
 <div layout="column">
 {{$ctrl.contact.email}}
 <md-input-container  >
 <label>Contact Email</label>
 <input required="" type="email" name="clientEmail" ng-model="$ctrl.mail.to" minlength="5" maxlength="100" ng-pattern="/^.+@.+\..+$/">
 <div ng-messages="mailForm.clientEmail.$error" role="alert">
 <div ng-message-exp="['required', 'minlength', 'maxlength', 'pattern']">
 Your email must be between 5 and 100 characters long and look like an e-mail address.
 </div>
 </div>
 </md-input-container>
 </div>
*/
