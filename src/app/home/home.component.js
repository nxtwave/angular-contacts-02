(function() {
  'use strict';

  angular
    .module('app.home')
    .component('home', {
      templateUrl: './home.view.html',
      controller: HomeController,
      controllerAs: 'vm'
    });

  function HomeController() {
    var vm = this;

    vm.title = 'Home';

    vm.$onInit = function() {
      console.log('app.home.oninit');
    };

  }

})();
