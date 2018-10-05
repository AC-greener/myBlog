var db = require("../db.js");

var messageBoardSchema = require('../schemas/messageBoard.js');

module.exports = db.model('MessageBoard', messageBoardSchema);
