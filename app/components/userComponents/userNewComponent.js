/**
 * Created by y.masyan on 20.02.2017.
 */
angular.module('app').component('userNewComponent', {
  controller: function (contactService) {
    this.contactService = contactService;
    this.contact ={};

  },
  bindings: {
    user: '<',
    callbackSwitchoff: '&switchoff',
    callbackSwitchon: '&switchon'
  },
  template: `
<user-sidebar-component></user-sidebar-component>
    <div class="col-md-8" >

    <md-content>
        <form ng-submit="$ctrl.contactService.newUser($ctrl.contact)" name="contactForm" >

            <div layout="column">
                <md-input-container >
                    <label>Contact Name</label>
                    <input required="" name="fullName" ng-model="$ctrl.contact.fullName">
                    <div ng-messages="contactForm.fullName.$error">
                        <div ng-message="required">This is required.</div>
                    </div>
                </md-input-container>
            </div>

            <div layout="column">

                <md-input-container >
                    <label>Gender </label>
                    <md-select name="type" ng-model="$ctrl.contact.gender">
                        <md-option value="M">Male</md-option>
                        <md-option value="F">Female</md-option>
                    </md-select>
                </md-input-container>

                <md-input-container >
                    <label>Birth date</label>
                    <md-datepicker ng-model="$ctrl.contact.birthdate"></md-datepicker>
                </md-input-container>
            </div>

            <div layout="column">

                <md-input-container  >
                    <label>Client Email</label>
                    <input required="" type="email" name="clientEmail" ng-model="$ctrl.contact.email" minlength="5" maxlength="100" ng-pattern="/^.+@.+\..+$/">
                    <div ng-messages="contactForm.clientEmail.$error" role="alert">
                        <div ng-message-exp="['required', 'minlength', 'maxlength', 'pattern']">
                            Your email must be between 5 and 100 characters long and look like an e-mail address.
                        </div>
                    </div>
                </md-input-container>
            </div>

            <div layout="column">

                <md-input-container class="md-block">
                    <label>Address</label>
                    <input md-maxlength="30" md-no-asterisk="" name="description" ng-model="$ctrl.contact.address">
                    <div ng-messages="contactForm.description.$error">
                        <div ng-message="md-maxlength">The description must be less than 30 characters long.</div>
                    </div>
                </md-input-container>
            </div>

            <div>
                <md-button class="md-raised" type="submit" ng-disabled="contactForm.$invalid">Submit</md-button>
            </div>

        </form>
    </md-content>
    </div >

`,
});
