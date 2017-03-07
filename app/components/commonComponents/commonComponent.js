
angular.module('app').component('commonComponent', {
  controller: function () {

  },
  bindings: {
    search: '=',
  },
  template: `


    <header class="row">
        <div class="logo col-sm-2">
            <img src="public/img/google.png" alt="Google">
        </div><!-- logo -->

        <div class="search-bar col-sm-6">
        <search-component></search-component>

        </div><!-- search-bar -->

        <div class="profile col-sm-4">
            <ul class="profile-icons list-inline pull-right">
                <login-logout-component></login-logout-component>

                <li>
                    <span class="glyphicon glyphicon-th"></span>
                </li>
                <li class="bell">
                    <span class="glyphicon glyphicon-bell"></span>
                </li>
                <li>
                    <img src="public/img/profile.jpg" class="img-circle">
                </li>
            </ul>
        </div><!-- profile -->
    </header>

    <div class="control-bar row">
        <div class="menu col-sm-2" style="border: solid red">
            <!--Gmail-->
            <!--<span class="caret"></span>-->
<!--
                <md-select ng-init="users=[{name:'Gmail'},{name:'Contacts'}];user={name:'Gmail'}" ng-model="user.name" ng-model-options="{trackBy: '$value.id'}">
                    <md-option ng-value="user.name" ng-repeat="user in users">{{ user.name }}</md-option>
                </md-select>
-->
            <a ui-sref=".allMail"  ui-sref-active="active">Gmail</a>
            <a ui-sref=".contacts"  ui-sref-active="active">Contacts</a>

        </div><!-- menu -->

        <div class="controls col-sm-10">
        <select-component></select-component>
            
        </div><!-- controls -->
    </div><!-- control-bar -->





`,

})

