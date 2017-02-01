(function() {
  'use strict';

  angular.module('app', [
    'ui.router',
    'app.home',
    'app.contacts',
    'app.about',
    'app.layout',
    'app.services',
    'templates'
  ]);

})();


(function() {
  'use strict';

  angular
    .module('app.about', []);


})();

(function() {
  'use strict';

  angular
    .module('app.contacts', []);

})();

(function() {
  'use strict';

  angular
    .module('app.home', []);

})();

(function() {
  'use strict';

  angular
    .module('app.layout',[]);

})();

(function() {
  'use strict';

  angular.module('app.services', []);

})();

(function() {
  'use strict';

  angular
    .module('app')
    .config(Config);

  Config.$inject = ['$stateProvider', '$urlRouterProvider'];

  function Config($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

      .state({
        name: 'home',
        url: '/home',
        component: 'home'
      })

      .state({
        name: 'about',
        url: '/about',
        component: 'about'
      })

      .state({
        name: 'contacts',
        abstract: true,
        url: '/contacts',
        component: 'contacts'
      })

      .state({
        name: 'contacts.list',
        url: '/list',
        component: 'contacts.list'
      })

      .state({
        name: 'contacts.detail',
        url: '/{contactId}',
        component: 'contacts.detail'
      })

  }

})();

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

(function() {
  'use strict';

  angular
    .module('app.contacts')
    .component('contacts', {
      template: '<section><ui-view></ui-view></section>',
      controllerAs: 'vm'
    });

})();

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

(function() {
  'use strict';

  angular
    .module('app.layout')
    .component('layout', {
      templateUrl: './layout.view.html',
      controller: LayoutController,
      controllerAs: 'vm'
    });

  function LayoutController() {
    var vm = this;

    vm.title = 'Der Samen';

  }

})();

(function() {
  'use strict';

  angular
    .module('app.services')
    .factory('Dataservice', Dataservice);

  Dataservice.$inject = ['$http', '$q'];

  function Dataservice($http, $q) {

    var usStates = [
      { name: 'ALABAMA', abbreviation: 'AL'},
      { name: 'ALASKA', abbreviation: 'AK'},
      { name: 'AMERICAN SAMOA', abbreviation: 'AS'},
      { name: 'ARIZONA', abbreviation: 'AZ'},
      { name: 'ARKANSAS', abbreviation: 'AR'},
      { name: 'CALIFORNIA', abbreviation: 'CA'},
      { name: 'COLORADO', abbreviation: 'CO'},
      { name: 'CONNECTICUT', abbreviation: 'CT'},
      { name: 'DELAWARE', abbreviation: 'DE'},
      { name: 'DISTRICT OF COLUMBIA', abbreviation: 'DC'},
      { name: 'FLORIDA', abbreviation: 'FL'},
      { name: 'GEORGIA', abbreviation: 'GA'},
      { name: 'GUAM', abbreviation: 'GU'},
      { name: 'HAWAII', abbreviation: 'HI'},
      { name: 'IDAHO', abbreviation: 'ID'},
      { name: 'ILLINOIS', abbreviation: 'IL'},
      { name: 'INDIANA', abbreviation: 'IN'},
      { name: 'IOWA', abbreviation: 'IA'},
      { name: 'KANSAS', abbreviation: 'KS'},
      { name: 'KENTUCKY', abbreviation: 'KY'},
      { name: 'LOUISIANA', abbreviation: 'LA'},
      { name: 'MAINE', abbreviation: 'ME'},
      { name: 'MARSHALL ISLANDS', abbreviation: 'MH'},
      { name: 'MARYLAND', abbreviation: 'MD'},
      { name: 'MASSACHUSETTS', abbreviation: 'MA'},
      { name: 'MICHIGAN', abbreviation: 'MI'},
      { name: 'MINNESOTA', abbreviation: 'MN'},
      { name: 'MISSISSIPPI', abbreviation: 'MS'},
      { name: 'MISSOURI', abbreviation: 'MO'},
      { name: 'MONTANA', abbreviation: 'MT'},
      { name: 'NEBRASKA', abbreviation: 'NE'},
      { name: 'NEVADA', abbreviation: 'NV'},
      { name: 'NEW HAMPSHIRE', abbreviation: 'NH'},
      { name: 'NEW JERSEY', abbreviation: 'NJ'},
      { name: 'NEW MEXICO', abbreviation: 'NM'},
      { name: 'NEW YORK', abbreviation: 'NY'},
      { name: 'NORTH CAROLINA', abbreviation: 'NC'},
      { name: 'NORTH DAKOTA', abbreviation: 'ND'},
      { name: 'OHIO', abbreviation: 'OH'},
      { name: 'OKLAHOMA', abbreviation: 'OK'},
      { name: 'OREGON', abbreviation: 'OR'},
      { name: 'PALAU', abbreviation: 'PW'},
      { name: 'PENNSYLVANIA', abbreviation: 'PA'},
      { name: 'PUERTO RICO', abbreviation: 'PR'},
      { name: 'RHODE ISLAND', abbreviation: 'RI'},
      { name: 'SOUTH CAROLINA', abbreviation: 'SC'},
      { name: 'SOUTH DAKOTA', abbreviation: 'SD'},
      { name: 'TENNESSEE', abbreviation: 'TN'},
      { name: 'TEXAS', abbreviation: 'TX'},
      { name: 'UTAH', abbreviation: 'UT'},
      { name: 'VERMONT', abbreviation: 'VT'},
      { name: 'VIRGIN ISLANDS', abbreviation: 'VI'},
      { name: 'VIRGINIA', abbreviation: 'VA'},
      { name: 'WASHINGTON', abbreviation: 'WA'},
      { name: 'WEST VIRGINIA', abbreviation: 'WV'},
      { name: 'WISCONSIN', abbreviation: 'WI'},
      { name: 'WYOMING', abbreviation: 'WY' }
    ];

    return {
      getContacts: getContacts,
      getContact: getContact,
      updateContact: updateContact,
      getStates: getStates
    };

    /**
     * retrieves/returns list of contacts
     * @returns {Promise}
     */
    function getContacts() {
      return $http.get('/api/contacts');
    }

    /**
     * retrieves/returns single contact by ID
     * @param id
     * @returns {*}
     */
    function getContact(id) {
      return $http.get('api/contact/' + id);
    }

    function updateContact(id, document) {
      return $http.put('api/contact/' + id, document);
    }

    /**
     * returns list of us states
     */
    function getStates() {
      return $q.when(usStates);
    }

  }

})();

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

(function() {
  'use strict';

  angular
    .module('app.contacts')
    .component('contacts.list', {
      templateUrl: './contacts-list.view.html',
      controller: ContactsController,
      controllerAs: 'vm'
    });

  ContactsController.$inject = ['Dataservice'];

  function ContactsController(Dataservice) {
    var vm = this;

    // model list of contacts:
    vm.contacts = undefined;

    /**
     * Initialize component
     */
    vm.$onInit = function activate() {
      Dataservice.getContacts()
        .then(function(contacts) {
          vm.contacts = contacts.data;
        });
    };

  }

})();

angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./about.view.html','<section><style>img {\n      padding-right: 10px;\n      padding-bottom: 1px;\n    }</style><div class="page-header"><h1><span class="glyphicon glyphicon-grain icon-header" aria-hidden="true"></span>&nbsp;About Us</h1></div><p><img ng-src="/img/contact-guy-300.jpg" class="pull-left"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p><p>laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p></section>');
$templateCache.put('./home.view.html','<section><img src="/img/home-jumbo-1600.jpg" class="img-responsive img-rounded"><div class="jumbotron"><p>Everything in life starts with a contact. Please go contact someone.</p></div></section>');
$templateCache.put('./layout.view.html','<div><!-- Fixed navbar --><nav class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#">I-Contact</a></div><div id="navbar" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li ui-sref-active="active"><a ui-sref="home">Home</a></li><li ui-sref-active="active"><a ui-sref="contacts.list">Contacts</a></li><li ui-sref-active="active"><a ui-sref="about">About</a></li></ul></div></div></nav><div class="container"><ui-view></ui-view></div></div>');
$templateCache.put('./contacts-details.view.html','<section><style>.icon {\n      font-size: 80%;\n    }</style><div class="page-header"><h1><span class="glyphicon glyphicon-user icon" aria-hidden="true"></span> {{vm.contact.firstName}}&nbsp;{{vm.contact.lastName}}</h1></div><form class="form" ng-submit="vm.onSubmit()"><div class="row"><div class="col-lg-4"><div class="form-group"><label for="company">Company</label><input type="text" class="form-control" id="company" name="company" ng-model="vm.contact.company"></div></div></div><div class="row"><div class="col-sm-12 col-lg-4"><div class="form-group"><label for="lastname">Lastname</label><input type="text" class="form-control" id="lastname" name="lastname" ng-model="vm.contact.lastName"></div></div><div class="col-sm-12 col-lg-4"><div class="form-group"><label for="firstname">Firstname</label><input type="text" class="form-control" id="firstname" name="firstname" ng-model="vm.contact.firstName"></div></div></div><div class="row"><div class="col-lg-4"><div class="form-group"><label for="street">Street</label><input type="text" class="form-control" id="street" name="street" ng-model="vm.contact.street"></div></div></div><div class="row"><div class="col-lg-4"><div class="form-group"><label for="city">City</label><input type="text" class="form-control" id="city" name="city" ng-model="vm.contact.city"></div></div><div class="col-lg-2"><div class="form-group"><label for="state">State</label><select class="form-control" id="state" name="state" ng-model="vm.contact.state"><option ng-repeat="state in vm.states" value="{{state.abbreviation}}">{{state.name}}</option></select></div></div><div class="col-lg-2"><div class="form-group"><label for="zip">Zip</label><input type="text" class="form-control" id="zip" name="state" ng-model="vm.contact.zip"></div></div></div><div class="row"><div class="col-lg-4"><div class="form-group"><label for="phone">Phone</label><input type="tel" class="form-control" id="phone" name="phone" ng-model="vm.contact.phone"></div></div><div class="col-lg-4"><div class="form-group"><label for="email">Email</label><input type="email" class="form-control" id="email" name="email" ng-model="vm.contact.email"></div></div></div><hr><button class="btn btn-default" type="button" ng-click="vm.cancel()">Cancel</button> <button class="btn btn-primary" type="submit">Save</button></form></section>');
$templateCache.put('./contacts-list-02.view.html','<section><style>.panel-heading {\n      padding-left: 7px;\n    }\n    .panel {\n\n    }\n    ul.pagination {\n      margin: 0;\n    }</style><!--<div class="page-header">\n    <h1><span class="glyphicon glyphicon-list-alt icon-header" aria-hidden="true"></span>&nbsp;Contacts List</h1>\n  </div>--><!--<div class="well well-sm">\n    <nav aria-label="Page navigation">\n      <ul class="pagination">\n        <li>\n          <a href="#" aria-label="Previous">\n            <span aria-hidden="true">&laquo;</span>\n          </a>\n        </li>\n        <li><a href="#">1</a></li>\n        <li><a href="#">2</a></li>\n        <li><a href="#">3</a></li>\n        <li><a href="#">4</a></li>\n        <li><a href="#">5</a></li>\n        <li>\n          <a href="#" aria-label="Next">\n            <span aria-hidden="true">&raquo;</span>\n          </a>\n        </li>\n      </ul>\n    </nav>\n  </div>--><div class="panel panel-primary"><div class="panel-heading"><b>Contacts List</b></div><div class="well well-sm"><ul class="pagination"><li><a href="#" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li><li><a href="#">1</a></li><li><a href="#">2</a></li><li><a href="#">3</a></li><li><a href="#">4</a></li><li><a href="#">5</a></li><li><a href="#" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li></ul></div><div class="table-responsive"><table class="table"><thead><tr><th scope="col">Contact</th><th scope="col">Company</th><th scope="col">City</th><th scope="col">Phone</th><th scope="col">Email</th></tr></thead><tbody><tr ng-repeat="contact in vm.contacts | limitTo:20"><td><a ui-sref="contacts.detail({contactId: contact._id})">{{contact.lastName}}, {{contact.firstName}}</a></td><td>{{contact.company}}</td><td>{{contact.city}}, {{contact.state}}</td><td>{{contact.phone}}</td><td>{{contact.email}}</td></tr></tbody></table></div></div></section>');
$templateCache.put('./contacts-list.view.html','<section><style>div.page-header {\n      margin-bottom: 10px;\n    }\n\n    nav ul.pagination, .btn-group {\n      margin-top: 0;\n    }</style><div class="row"><div class="col-lg-12"><div class="page-header"><h1><span class="glyphicon glyphicon-list-alt icon-header" aria-hidden="true"></span>&nbsp;Contacts List</h1></div></div></div><div class="row" style="margin-bottom: 15px"><div class="col-lg-12"><div class="btn-toolbar" role="toolbar"><div class="btn-group" role="group" aria-label="..."><button type="button" class="btn btn-default"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></button> <button type="button" class="btn btn-default"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></button></div><div class="btn-group" role="group" aria-label="..."><button type="button" class="btn btn-default"><span aria-hidden="true">&laquo;</span></button> <button type="button" class="btn btn-default">1</button> <button type="button" class="btn btn-default">2</button> <button type="button" class="btn btn-default">3</button> <button type="button" class="btn btn-default"><span aria-hidden="true">&raquo;</span></button></div></div></div></div><div class="row"><div class="col-lg-12"><div class="table-responsive"><table class="table"><thead><tr><th scope="col">Contact</th><th scope="col">Company</th><th scope="col">City</th><th scope="col">Phone</th><th scope="col">Email</th></tr></thead><tbody><tr ng-repeat="contact in vm.contacts | limitTo:10"><td><a ui-sref="contacts.detail({contactId: contact._id})">{{contact.lastName}}, {{contact.firstName}}</a></td><td>{{contact.company}}</td><td>{{contact.city}}, {{contact.state}}</td><td>{{contact.phone}}</td><td>{{contact.email}}</td></tr></tbody></table></div></div></div></section>');}]);