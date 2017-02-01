var express = require('express');
var router = express.Router();
var Dataservice = require('../lib/dataservice');

/**
 * Get list of contacts
 */
router.get('/contacts', function(req, res) {
  Dataservice.list(function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

/**
 * Get contact by id
 */
router.get('/contact/:id', function(req, res) {
  var id = req.params.id;
  Dataservice.get(id, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

/**
 * Update contact by id
 */
router.put('/contact/:id', function(req, res) {
  var id = req.params.id;
  Dataservice.update(id, req.body, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
});

module.exports = router;


