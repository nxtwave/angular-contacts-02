var express = require('express');
var router = express.Router();
var Dataservice = require('../lib/dataservice');

/**
 * Get list of contacts
 */
router.get('/contacts', function(req, res) {
  Dataservice.list()
    .then(function(result) {
      res.json(result);
    }, function(err) {
      res.send(err);
    });
});

/**
 * Get contact by id
 */
router.get('/contact/:id', function(req, res) {
  var id = req.params.id;
  Dataservice.get(id)
    .then(function(result) {
      res.json(result);
    }, function(err) {
      res.send(err);
    })
});

/**
 * Update contact by id
 */
router.put('/contact/:id', function(req, res) {
  var id = req.params.id;
  Dataservice.update(id, req.body)
    .then(function(result) {
      res.json(result);
    }, function(err) {
        res.send(err);
      }
    );

});

module.exports = router;
