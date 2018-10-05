var db = require("../db.js");

var articleSchema = require('../schemas/article');

module.exports = db.model("Article", articleSchema);