var mongoose = require('mongoose');
var articleSchema = new mongoose.Schema({
  name: {type: String, unique:true},
  title: String,
  content: String,
  category: String,
  createTime: String,
  readCount: Number,
  comment: {
    userName: String,
    email: String,
    content: String,
    date: String,
  }
})

module.exports = articleSchema;
/*
{
  "_id" : ObjectId("5b8fd1a9c6a62b20bc238eee"),
  "name" : "你不知道的JavaScript",
  "title" : "每个月，我们帮助 1000 万的开发者解决各种各样的技术问题。",
  "content" : "每个月，我们帮助 1000 万的开发者解决各种各样的技术问题。并助力他们在技术能力、职业生涯、影响力上获得提升。",
  "category" : "javascript",
  "createTime" : "2018-9-7 20:13:51",
  "readCount" : 500,
  "__v" : 0
}
{
    "_id" : ObjectId("5b8fd1a9ce6e2b20bc238eee"),
    "userName" : "小明",
    "email" : "1053673440@qq.com",
    "content" : "啊啊",
    "date" : "2018-9-5 20:52:57",
    "__v" : 0
}
*/