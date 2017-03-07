/**
 * Created by y.masyan on 20.02.2017.
 */
angular.module('app').config(($stateProvider, $urlRouterProvider) => {

  // An array of state definitions
  let states = [
    {
      name: 'common',
      url: '/common',
      // component: 'userListComponent',
      template: `
<div class="container-fluid">
    <!--<div ncy-breadcrumb></div>-->
<common-component search="search.searchField"></common-component>

    <div class="mail row">


<ui-view></ui-view>

<!-- inbox -->
    </div><!-- mail -->
</div>
`, //templateUrl
      ncyBreadcrumb: {
        label: 'common',
      },
      controller: function ($scope) {
        $scope.model = {Name : "xxx"}
        // $scope.search={searchField:'123451'};
      }
      // resolve: {
      //   cards: function(ContactService) {
      //     return ContactService.getAllContact();
      //   }
      // }
    },
    {
      name: 'common.newMail',
      url: '/newmail',
      // component: 'userListComponent',
      template: `
<new-mail-component search="search.searchField"></new-mail-component>
`, //templateUrl
      ncyBreadcrumb: {
        label: '',
      },
      controller: function ($scope) {
      }
    },
    {
      name: 'common.newContact',
      url: '/newContact',
      // component: 'userListComponent',
      template: `
<new-contact-component search="search.searchField"></new-contact-component>
`, //templateUrl
      ncyBreadcrumb: {
        label: '',
      },
      controller: function ($scope) {
      }
    },
    {
      name: 'register',
      url: '/register',
      // component: 'userListComponent',
      template: '<register-component></register-component>', //templateUrl
      ncyBreadcrumb: {
        label: 'register',
      },
      // resolve: {
      //   cards: function(ContactService) {
      //     return ContactService.getAllContact();
      //   }
      // }
    } ,
    {
      name: 'login',
      url: '/login',
      // component: 'userListComponent',
      template: '<login-component></login-component>', //templateUrl
      ncyBreadcrumb: {
        label: 'Login',
      },
    },
    {
      name: 'common.contacts',
      url: '/contacts',
      // component: 'userListComponent',
        template: '<user-list-component model="asd" search="search.searchField" cards="$resolve.cards"></user-list-component>', //templateUrl
      ncyBreadcrumb: {
        label: 'userListComponent',
      },
      controller: function ($scope) {
        $scope.asd = $scope.model.Name || {Name : "xxx"}

      },
      resolve: {
        cards: function(contactService) {
          return contactService.getAllContact();
        }
      }
    },
    {
      name: 'common.user',
      url: '/contacts/{userId}',
      // component: 'userCardComponent',
      template: '<user-card-component card="$resolve.card"></user-card-component>', //templateUrl
      ncyBreadcrumb: {
        label: 'Card {{user.username}}',
      },
      controller: function($scope, $stateParams){
        $scope.user={};
        if ($stateParams.userId) {$scope.user.username = $stateParams.userId}
        // else {
        //   $state.go('login');
        // }
      },

      resolve: {
        card: function(contactService, $stateParams) {
          return contactService.getPersonById($stateParams.userId);
        }
      },
      // template: '<user-card user-id="userId"></user-card>', //templateUrl
    },
    {
      name: 'common.allMail',
      url: '/allmail',
      ncyBreadcrumb: {
        label: 'Gmail'
      },
      resolve: {
        mails: function(mailService) {
          return mailService.getAllMails();
        },
        contacts: function(contactService) {
          return contactService.getAllContact();
        }
      },
      template: '<inbox-component contacts="$resolve.contacts" mails="$resolve.mails"></inbox-component>', //templateUrl
    }
  ];

  // Loop over the state definitions and register them
  states.forEach(function(state) {
    $stateProvider.state(state);
  });


  $urlRouterProvider.otherwise('contacts');
});
