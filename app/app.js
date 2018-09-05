var express = require('express');
var app = express();
var messageBoardRoute = require('./routes/messageBoard');
var messageBoardSchema = require("./orm/models/messageBoard");
var MessageBoard = require("./orm/models/MessageBoard");
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
app.listen(3000, function() {
  console.log('app listening on port 3000!');
})
// supervisor app.js