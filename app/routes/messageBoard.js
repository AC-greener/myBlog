var express = require('express');
var router = express.Router();

//取出数据库model对象
var MessageBoard = require("../orm/models/MessageBoard");


router.get('/', function(req, res) {
  let data = req.query;
  data.date = new Date().toLocaleString()
  console.log(data)
  MessageBoard.create({
    userName: data.userName,
    email: data.email,
    content: data.content,
    date: data.date
  }, function(err) {
    if(err) {
      res.send('保存失败')
    }
    res.send('保存成功')
  })
});


module.exports = router;