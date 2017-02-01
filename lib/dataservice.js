var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var contactSchema = new Schema({
  company: String,
  firstName: String,
  lastName: String,
  street: String,
  city: String,
  state: String,
  zip: String,
  phone: String,
  email: String
});

mongoose.connect('mongodb://localhost/contacts');

var Contact = mongoose.model('Contact', contactSchema);

module.exports.list = function(callback) {
  var query = Contact.find({});
  query.exec(function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports.get = function(id, callback) {
  Contact.findOne({_id: id}, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports.update = function(id, document, callback) {
  Contact.update({_id: id}, document, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports.create = function(document, callback) {
  Contact.create(document, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};

module.exports.delete = function(id, callback) {
  Contact.remove({_id: id}, function(err, result) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result);
    }
  });
};


