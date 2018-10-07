const fs = require('fs')
const path = require('path')
var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var ejs = require('ejs');

var router = express.Router();
var messageBoardRoute = require('./routes/messageBoard');

//引入数据库实体
var MessageBoard = require("./orm/models/MessageBoard");
var Article = require("./orm/models/Article");
var ArticleComment = require('./orm/models/ArticleComment');
var Pv = require('./orm/models/Pv');

//解析post请求体中的内容
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//设置跨域请求
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "text/html;charset=utf-8");
  next();
});

//设置视图引擎
app.set('views', path.join(__dirname, 'public'));


app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));


router.get('/', function(req, res) {
  res.render('index ');
})

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

app.post('/articleComment', function(req, res) { 
  let articleComment = new ArticleComment(req.body);
  articleComment.save(function(err, res) {
    if(err) {
      console.log(err)
    } else {
      console.log(res)
    }
  })
  res.send('ok')
})

app.get('/articleComment', function(req, res) { 
  ArticleComment.find({}, function(err, result) {
    if(err) {
      console.log(err);
    }
    res.send(result)
  })
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
  res.send('ok')
})

app.post('/updateArticlePV', function(req, res) {
  Article.findById(req.body._id, function(err) {
    if(err) {
      console.log(err)
    }
  }).then(function(result) {
    console.log(result)
    Article.findByIdAndUpdate(req.body._id, {$set: {pv: result.pv+1}}, function(err, article) {
      if(err) {
        console.log(err)
      } else {
        res.send(article)
      } 
    })
  })
})

app.post('/updatePV', function(req, res) {
  Pv.findById("5b8fd211ce6e2b20bc238e1f", function(err) {
    if(err) {
      console.log(err)
    }
  }).then(function(result) {
    Pv.findByIdAndUpdate("5b8fd211ce6e2b20bc238e1f", {$set: {pv: result.pv+1}}, function(err, article) {
      if(err) {
        console.log(err)
      } else {
        res.send(article)
      } 
    })
  })
})

app.listen(3000, function() {
  console.log('app listening on port 3000!');
})

// supervisor app.js
