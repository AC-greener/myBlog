var db = require("../db.js");

var studentSchema = require('../schemas/people.js');

module.exports = db.model('People', studentSchema);
