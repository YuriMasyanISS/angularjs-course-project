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
      //   users: function(ContactService) {
      //     return ContactService.getAllContact();
      //   }
      // }
    },
    {
      name: 'common.newMail',
      url: '/newmail',
      // component: 'userListComponent',
      template: `<new-mail-component contacts="$resolve.contacts"></new-mail-component>`, //templateUrl
      controller: function ($scope) {
      },
      resolve: {
        contacts: function(contactService) {
          return contactService.getAllContact();
        }
      }


    },
    {
      name: 'common.newContact',
      url: '/newContact',
      // component: 'userListComponent',
      template: `<user-new-component></user-new-component>`,
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
      //   users: function(ContactService) {
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
        template: '<user-list-component model="asd" search="search.searchField" users="$resolve.users"></user-list-component>', //templateUrl
      ncyBreadcrumb: {
        label: 'userListComponent',
      },
      controller: function ($scope) {
        $scope.asd = $scope.model.Name || {Name : "xxx"}

      },
      resolve: {
        users: function(contactService) {
          return contactService.getAllContact();
        }
      }
    },
    {
      name: 'common.user',
      url: '/contacts/{userId}',
      // component: 'useruserComponent',
      template: '<user-card-component contact="$resolve.contact"></user-card-component>', //templateUrl
      controller: function($scope, $stateParams){
        $scope.user={};
        if ($stateParams.userId) {$scope.user.username = $stateParams.userId}
        // else {
        //   $state.go('login');
        // }
      },

      resolve: {
        contact: function(contactService, $stateParams) {
          return contactService.getPersonById($stateParams.userId);
        }
      },
      // template: '<user-user user-id="userId"></user-user>', //templateUrl
    },
    {
      name: 'common.trashMail',
      url: '/trashmail',
      resolve: {
        mails: function(mailService) {
          return mailService.getTrashMails();
        },
        contacts: function(contactService) {
          return contactService.getAllContact();
        }
      },
      template: '<inbox-trash-component contacts="$resolve.contacts" mails="$resolve.mails"></inbox-trash-component>', //templateUrl
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


  $urlRouterProvider.otherwise('login');
});
