(function() {
  'use strict';

  angular
    .module('app.about')
    .component('about', {
      templateUrl: './about.view.html',
      controller: AboutController
    });

  function AboutController() {
    var vm = this;

    vm.$onInit = function() {

    };

  }

})();
