var express = require('express');
var app = express();
var messageBoardRoute = require('./routes/messageBoard');
var MessageBoard = require("./orm/models/MessageBoard");
var Article = require("./orm/models/Article");

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.use('/messageBoard', messageBoardRoute)    //使用指定的中间件
app.get('/getCommentList', function(req, res) {
  MessageBoard.find({}, function(err, result) {
    if(err) {
      console.log(err);
    }
    res.send(result);
  })
})

app.get('/getArticleList', function(req, res) {
  Article.find({}, function(err, result) {
    if(err) {
      console.log(err);
    }
    res.send(result)
  })
})

app.get('/articleComment', function(req, res) { 
  console.log(req.query)
  console.log(req.url)
  res.send('hello')
})

app.listen(3000, function() {
  console.log('app listening on port 3000!');
})
// supervisor app.js