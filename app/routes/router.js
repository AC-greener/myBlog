var express = require('express');
var router = express.Router();

//引入数据库实体
var MessageBoard = require("../orm/models/MessageBoard");
var Article = require("../orm/models/Article");
var ArticleComment = require('../orm/models/ArticleComment');
var Pv = require('../orm/models/Pv');


router.post('/messageBoard', function(req, res) {
  let data = req.body;
  console.log(data)
  data.date = new Date().toLocaleString()
  MessageBoard.create({
    userName: data.userName,
    email: data.email,
    content: data.content,
    date: data.date
  }, function(err) {
    if(err) {
      res.send('保存失败')
    }
    res.end()
  })
});

router.get('/getCommentList', function(req, res) {
  MessageBoard.find({}, function(err, result) {
    if(err) {
      console.log(err);
    }
    res.send(result);
  })
})

router.get('/getArticleList', function(req, res) {
  Article.find({}, function(err, result) {
    if(err) {
      console.log(err);
    }
    res.send(result)
  })
})

router.post('/articleComment', function(req, res) { 
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

router.get('/articleComment', function(req, res) { 
  ArticleComment.find({}, function(err, result) {
    if(err) {
      console.log(err);
    }
    res.send(result)
  })
})

router.post('/addArticle', function(req, res) {
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

router.post('/updateArticlePV', function(req, res) {
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

router.post('/updatePV', function(req, res) {
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


module.exports = router;