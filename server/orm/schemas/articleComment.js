var mongoose = require('mongoose');
var articleCommentSchema = new mongoose.Schema({
    id: String,
    userName: String,
    content: String,
    email: String,
    createTime: String,
})

module.exports = articleCommentSchema;