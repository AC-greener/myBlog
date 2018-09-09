var db = require("../db.js");

var articleCommentSchema = require('../schemas/articleComment')

module.exports = db.model("ArticleComment", articleCommentSchema)