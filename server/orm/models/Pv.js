var db = require("../db.js");

var pvSchema = require('../schemas/pv')

module.exports = db.model('Pv', pvSchema)