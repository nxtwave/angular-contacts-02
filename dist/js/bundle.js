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
    .module('app.about', []);


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

    /**
     * Static list of contacts for prototype from fakedata
     * @type {Array}
     */
    var contacts = [
      {"company":"Ward and Sons","firstName":"Rosanna","lastName":"Kunze","street":"0752 Franecki Freeway","city":"Ivory fort","state":"NE","zip":"58335","phone":"916.164.1732 x974","email":"Trevion.Lockman@hotmail.com"},
      {"company":"Schiller, Romaguera and Baumbach","firstName":"Chelsie","lastName":"Kuvalis","street":"9687 Stamm Shoals","city":"Feest stad","state":"VA","zip":"11189","phone":"014-456-6587","email":"Lola.Wilderman15@yahoo.com"},
      {"company":"Bartell - Bailey","firstName":"Kayla","lastName":"Stamm","street":"9072 Norwood Loop","city":"Dusty fort","state":"IL","zip":"34035","phone":"1-742-165-9886","email":"Alfredo_Purdy@yahoo.com"},
      {"company":"Denesik - Rohan","firstName":"Claire","lastName":"Cruickshank","street":"034 Kuphal Crossroad","city":"Jacobi view","state":"MN","zip":"20712","phone":"167-468-6804","email":"Wyman_McClure73@gmail.com"},
      {"company":"Hegmann - Little","firstName":"Sarai","lastName":"Keebler","street":"412 Johann Forge","city":"West Lorenz town","state":"CT","zip":"29041-7648","phone":"480-495-4591 x20525","email":"Jabari32@gmail.com"},
      {"company":"Smitham, Tillman and Breitenberg","firstName":"Alanis","lastName":"Bernier","street":"3089 German Track","city":"Ralph bury","state":"AK","zip":"94928","phone":"834-413-1677 x9940","email":"Taurean64@gmail.com"},
      {"company":"Schmidt, Anderson and Boyer","firstName":"Malinda","lastName":"Botsford","street":"50159 Goodwin Fall","city":"West Cary borough","state":"MT","zip":"09903","phone":"(951) 535-7230 x6845","email":"Grace_Keebler@yahoo.com"},
      {"company":"Howe - Metz","firstName":"Sanford","lastName":"Leuschke","street":"736 Bartell Mill","city":"Botsford land","state":"ME","zip":"40735","phone":"1-509-148-6447 x889","email":"Mallie.Kris40@hotmail.com"},
      {"company":"Windler - Zieme","firstName":"Manuel","lastName":"Goodwin","street":"72232 Dooley Circle","city":"Boyle borough","state":"DE","zip":"65231","phone":"(431) 705-9910","email":"Marvin.Reinger@yahoo.com"},
      {"company":"Armstrong, Kshlerin and Schmeler","firstName":"Hyman","lastName":"Muller","street":"54390 Cremin Drive","city":"Lake Neha","state":"DE","zip":"06260","phone":"991-879-9019 x6137","email":"Ernie4@yahoo.com"},
      {"company":"Beier, Hilpert and Kemmer","firstName":"Katrine","lastName":"Crooks","street":"7498 Medhurst Squares","city":"Gene shire","state":"FL","zip":"95778","phone":"(378) 752-1947","email":"Hershel.Hyatt79@hotmail.com"},
      {"company":"Jacobi, Heidenreich and Buckridge","firstName":"Nathen","lastName":"Kuvalis","street":"94370 Justyn Flats","city":"Port Felicia berg","state":"ME","zip":"59930","phone":"1-845-907-8647","email":"Letha56@hotmail.com"},
      {"company":"Rau Inc","firstName":"Kaleb","lastName":"Gibson","street":"9448 Stiedemann Coves","city":"Prosacco view","state":"CT","zip":"46962","phone":"(451) 030-0987 x2010","email":"Adella65@yahoo.com"},
      {"company":"Weimann - Littel","firstName":"Rasheed","lastName":"Schmidt","street":"938 Considine Spur","city":"West Zora chester","state":"AL","zip":"10826","phone":"395-913-2807","email":"Michelle72@gmail.com"},
      {"company":"Heidenreich, Ward and Green","firstName":"Dayton","lastName":"Mosciski","street":"23351 Jazmin Inlet","city":"Beatty ville","state":"AL","zip":"44379","phone":"660-795-7221 x379","email":"Dulce.Wyman43@yahoo.com"},
      {"company":"Morar Group","firstName":"Kenyon","lastName":"Langosh","street":"4552 Hoppe Plaza","city":"Bode bury","state":"DE","zip":"68007-0271","phone":"(660) 897-4224 x71788","email":"Damion_Kassulke@hotmail.com"},
      {"company":"Stanton LLC","firstName":"Travis","lastName":"Witting","street":"77291 Davis Isle","city":"Boyer furt","state":"SD","zip":"89780","phone":"(648) 712-6961 x6860","email":"Izaiah_Ullrich37@gmail.com"},
      {"company":"Funk - Lynch","firstName":"Jett","lastName":"Marquardt","street":"33678 Balistreri Mount","city":"East Lorena furt","state":"WY","zip":"29117","phone":"1-901-467-4337","email":"Donna.King6@yahoo.com"},
      {"company":"Larson LLC","firstName":"Jasper","lastName":"Emard","street":"637 Syble Parkways","city":"Alexandra bury","state":"TX","zip":"52596","phone":"441-551-1007 x79203","email":"Ila_Bauch@hotmail.com"},
      {"company":"Anderson - Schmeler","firstName":"Daisy","lastName":"Moore","street":"8643 Blanda Greens","city":"North Harvey","state":"MD","zip":"10785","phone":"1-833-861-8424 x347","email":"Annetta.Goyette@gmail.com"},
      {"company":"Glover - Schaden","firstName":"Casimir","lastName":"Stamm","street":"3045 Fatima Junction","city":"Abelardo ton","state":"ME","zip":"10853-6677","phone":"(567) 800-2777 x277","email":"Favian74@gmail.com"},
      {"company":"Veum - Gislason","firstName":"Sam","lastName":"Trantow","street":"66123 Bogan Roads","city":"Von shire","state":"NE","zip":"35655-1578","phone":"1-555-487-1757 x44849","email":"Dejon32@yahoo.com"},
      {"company":"Hegmann Group","firstName":"Julian","lastName":"Walker","street":"514 Stiedemann Shore","city":"Reinger stad","state":"WV","zip":"77684-7755","phone":"668.619.4513 x75783","email":"Lukas.Williamson42@hotmail.com"},
      {"company":"Cormier and Sons","firstName":"Evan","lastName":"Leffler","street":"620 Lehner Bridge","city":"Nolan side","state":"TX","zip":"83438-5257","phone":"535.983.5217 x1673","email":"Carolyn_Parisian@yahoo.com"},
      {"company":"Johns - Gibson","firstName":"Devyn","lastName":"Purdy","street":"48785 Kuhic Wall","city":"Lawson furt","state":"NY","zip":"10114-3898","phone":"978-308-8958 x208","email":"Floy93@hotmail.com"},
      {"company":"Ferry and Sons","firstName":"Everett","lastName":"Schneider","street":"17215 Lisette Rue","city":"East Clemens mouth","state":"NJ","zip":"98399","phone":"520.129.0208 x00099","email":"Victor55@gmail.com"},
      {"company":"Price - Kilback","firstName":"Liza","lastName":"Macejkovic","street":"51039 Klocko Walk","city":"Port Edgardo port","state":"ND","zip":"21397-0452","phone":"1-497-300-2879 x375","email":"Adan83@yahoo.com"},
      {"company":"Fisher - Mraz","firstName":"Maria","lastName":"Wintheiser","street":"4192 Brady Ridge","city":"North Marcelina fort","state":"NE","zip":"24487","phone":"639.813.3884","email":"Quentin4@hotmail.com"},
      {"company":"Crooks, Fadel and Mills","firstName":"Marlee","lastName":"Feest","street":"66280 Collins Freeway","city":"East Henri","state":"NY","zip":"65104-1949","phone":"996.680.7356 x77499","email":"Sandrine_Veum27@gmail.com"}
    ].map(function (contact, index) {
      return Object.assign({id: String(index)}, contact);
    });

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
      getStates: getStates
    };

    /**
     * retrieves/returns list of contacts
     * @returns {Promise}
     */
    function getContacts() {
      return $q.when(contacts);
    }

    /**
     * retrieves/returns single contact by ID
     * @param id
     * @returns {*}
     */
    function getContact(id) {
      var contact = contacts.filter(function(contact) {
        return (contact.id === id);
      }).pop();

      return $q.when(contact);
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
          vm.contact = contact;
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
      $state.go('contacts.list');
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
          vm.contacts = contacts;
        });
    };

  }

})();

angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('./about.view.html','<section><style>img {\n      padding-right: 10px;\n      padding-bottom: 1px;\n    }</style><div class="page-header"><h1><span class="glyphicon glyphicon-grain icon-header" aria-hidden="true"></span>&nbsp;About Us</h1></div><p><img ng-src="/img/contact-guy-300.jpg" class="pull-left"> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p><p>laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p><p>laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p></section>');
$templateCache.put('./home.view.html','<section><img src="/img/home-jumbo-1600.jpg" class="img-responsive img-rounded"><div class="jumbotron"><p>Everything in life starts with a contact ...</p><p>... go contact someone</p></div></section>');
$templateCache.put('./layout.view.html','<div><!-- Fixed navbar --><nav class="navbar navbar-default navbar-fixed-top"><div class="container"><div class="navbar-header"><button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span></button> <a class="navbar-brand" href="#">I-Contact</a></div><div id="navbar" class="navbar-collapse collapse"><ul class="nav navbar-nav"><li ui-sref-active="active"><a ui-sref="home">Home</a></li><li ui-sref-active="active"><a ui-sref="contacts.list">Contacts</a></li><li ui-sref-active="active"><a ui-sref="about">About</a></li></ul></div></div></nav><div class="container"><ui-view></ui-view></div></div>');
$templateCache.put('./contacts-details.view.html','<section><style>.icon {\n      font-size: 80%;\n    }</style><div class="page-header"><h1><span class="glyphicon glyphicon-user icon" aria-hidden="true"></span> {{vm.contact.firstName}}&nbsp;{{vm.contact.lastName}}</h1></div><form class="form" ng-submit="vm.onSubmit()"><div class="row"><div class="col-lg-4"><div class="form-group"><label for="company">Company</label><input type="text" class="form-control" id="company" name="company" ng-model="vm.contact.company"></div></div></div><div class="row"><div class="col-sm-12 col-lg-4"><div class="form-group"><label for="lastname">Lastname</label><input type="text" class="form-control" id="lastname" name="lastname" ng-model="vm.contact.lastName"></div></div><div class="col-sm-12 col-lg-4"><div class="form-group"><label for="firstname">Firstname</label><input type="text" class="form-control" id="firstname" name="firstname" ng-model="vm.contact.firstName"></div></div></div><div class="row"><div class="col-lg-4"><div class="form-group"><label for="street">Street</label><input type="text" class="form-control" id="street" name="street" ng-model="vm.contact.street"></div></div></div><div class="row"><div class="col-lg-4"><div class="form-group"><label for="city">City</label><input type="text" class="form-control" id="city" name="city" ng-model="vm.contact.city"></div></div><div class="col-lg-2"><div class="form-group"><label for="state">State</label><select class="form-control" id="state" name="state" ng-model="vm.contact.state"><option ng-repeat="state in vm.states" value="{{state.abbreviation}}">{{state.name}}</option></select></div></div><div class="col-lg-2"><div class="form-group"><label for="zip">Zip</label><input type="text" class="form-control" id="zip" name="state" ng-model="vm.contact.zip"></div></div></div><div class="row"><div class="col-lg-4"><div class="form-group"><label for="phone">Phone</label><input type="tel" class="form-control" id="phone" name="phone" ng-model="vm.contact.phone"></div></div><div class="col-lg-4"><div class="form-group"><label for="email">Email</label><input type="email" class="form-control" id="email" name="email" ng-model="vm.contact.email"></div></div></div><hr><button class="btn btn-default" type="button" ng-click="vm.cancel()">Cancel</button> <button class="btn btn-primary" type="submit">Save</button></form></section>');
$templateCache.put('./contacts-list.view.html','<section><div class="page-header"><h1><span class="glyphicon glyphicon-list-alt icon-header" aria-hidden="true"></span>&nbsp;Contacts List</h1></div><div class="table-responsive"><table class="table"><caption>List of your contacts</caption><thead><tr><th scope="col">Contact</th><th scope="col">Company</th><th scope="col">City</th><th scope="col">Phone</th><th scope="col">Email</th></tr></thead><tbody><tr ng-repeat="contact in vm.contacts"><td><a ui-sref="contacts.detail({contactId: contact.id})">{{contact.lastName}}, {{contact.firstName}}</a></td><td>{{contact.company}}</td><td>{{contact.city}}, {{contact.state}}</td><td>{{contact.phone}}</td><td>{{contact.email}}</td></tr></tbody></table></div></section>');}]);