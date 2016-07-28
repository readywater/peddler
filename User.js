var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// create User Schema
var User = new Schema({
  id: String, // Strava iD
  items: [{item_id: String, date: Date}], // Number of used pinterest pins
  spent: Number // 

});

module.exports = mongoose.model('users', User);