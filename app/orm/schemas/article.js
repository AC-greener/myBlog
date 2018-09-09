var mongoose = require('mongoose');
var articleSchema = new mongoose.Schema({
  articleName: {type: String},
  articleTitle: String,
  articleContent: String,
  articleCategory: String,
  createTime: String,
  readCount: Number,
 
})

module.exports = articleSchema;