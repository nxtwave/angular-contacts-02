(function() {
  'use strict';

  angular
    .module('app.contacts')
    .component('contacts.list', {
      templateUrl: './contacts-list.view.html',
      controller: ContactsController,
      controllerAs: 'vm'
    });

  ContactsController.$inject = ['$stateParams', '$state', 'Dataservice'];

  function ContactsController($stateParams, $state, Dataservice) {
    var vm = this;

    // model list of contacts:
    vm.contacts = undefined;

    vm.pageSize = 15;

    vm.page = parseInt($stateParams.page, 10);


    /**
     * Initialize component
     */
    vm.$onInit = function activate() {
      Dataservice.getContacts()
        .then(function(contacts) {
          vm.contacts = contacts.data;
        });

    };

    vm.next = function() {
      $state.go('.', {page: vm.page + 1});
    };

    vm.previous = function() {
      $state.go('.', {page: vm.page - 1});
    };

    vm.goto = function(page) {
      $state.go('.', {page: page});
    };

  }

})();
