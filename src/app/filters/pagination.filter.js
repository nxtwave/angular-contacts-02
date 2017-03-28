(function() {
  'use strict';

  angular
    .module('app.filters')
    .filter('pagination', Pagination);

  function Pagination() {
    return function(array, page, pageSize) {
      var start = page * pageSize;
      return (array === undefined) ? [] : array.slice(start, start + pageSize);
    };
  }

})();
