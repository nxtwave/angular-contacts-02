(function() {
  'use strict';

  angular
    .module('app.contacts')
    .component('contacts.detail', {
      templateUrl: './contacts-details.view.html',
      controller: ContactDetailsController,
      controllerAs: 'vm'
    });

  ContactDetailsController.$inject = ['$state', '$stateParams', 'Dataservice'];

  function ContactDetailsController($state, $stateParams, Dataservice) {
    var vm = this;

    // the contact id to display:
    vm.contactId = $stateParams.contactId;

    // the contact object:
    vm.contact = undefined;

    // the state list:
    vm.states = undefined;

    /**
     * initialize component
     */
    vm.$onInit = function activate() {
      console.log('contact-detail.init', vm.contactId);

      Dataservice.getContact(vm.contactId)
        .then(function(contact) {
          vm.contact = contact.data;
        });

      Dataservice.getStates()
        .then(function(states) {
          vm.states = states;
        });
    };

    /**
     * form submit handler
     */
    vm.onSubmit = function() {
      Dataservice.updateContact(vm.contact._id, vm.contact)
        .then(function() {
          console.log('success');
          $state.go('contacts.list');
        }, function(error) {
          console.log('error', error);
        });
    };

    /**
     * Cancel edit
     */
    vm.cancel = function() {
      $state.go('contacts.list');
    }

  }

})();
