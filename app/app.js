var express = require('express');
var app = express();
var comments = require('./routes/comments');
var People = require("./orm/models/People");


app.get('/user', function (req, res) {
  res.send('Got a POST request');
});

app.use('/', comments)    //使用指定的中间件

People.create({"name":"张三","age":13,"sex":"man"}, function(error){
  console.log("保存成功");
})

app.listen(3000, function() {
  console.log('app listening on port 3000!');
})