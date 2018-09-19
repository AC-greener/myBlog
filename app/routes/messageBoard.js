var express = require('express');
var router = express.Router();

//取出数据库model对象
var MessageBoard = require("../orm/models/MessageBoard");


router.post('/', function(req, res) {
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


module.exports = router;