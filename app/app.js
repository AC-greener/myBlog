var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var messageBoardRoute = require('./routes/messageBoard');
var MessageBoard = require("./orm/models/MessageBoard");
var Article = require("./orm/models/Article");

//解析post请求体重的内容
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//设置跨域请求
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
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

app.post('/addArticle', function(req, res) {
  console.log(req.body)
  let article = new Article(req.body);
  article.save(function(err, res) {
    if(err) {
      console.log(err)
    } else {
      console.log(res)
    }
  })
  res.send('hello')
})




app.listen(3000, function() {
  console.log('app listening on port 3000!');
})

// supervisor app.js