var mongoose = require('mongoose');
var articleSchema = new mongoose.Schema({
  articleName: {type: String},
  articleTitle: String,
  articleContent: String,
  articleCategory: String,
  createTime: String,
  readCount: Number,
  pv: {type: Number, default: 0}
 
})

module.exports = articleSchema;