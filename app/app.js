const path = require('path')
var express = require('express');
var app = express();
var bodyParser = require('body-parser')

var router = express.Router();
var APIRoute = require('./routes/router');


//解析post请求体中的内容
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//设置跨域请求
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "*");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});

//设置视图引擎
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'html');
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/',  function(req, res, next) {
//   res.render('index.html', { title: 'Express' });
// });


app.use('/', APIRoute);

router.get('/', function(req, res) {
  res.render('index.html');
})


app.listen(3000, function() {
  console.log('app listening on port 3000!');
})

// supervisor app.js
