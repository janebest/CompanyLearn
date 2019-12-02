// 应用程序的入口文件

// 加载模块
var express = require('express');
var swig = require('swig');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var User = require('./models/User')

// 在express上挂载APP
var app = express();

// 静态文件托管
app.use('/public', express.static(__dirname + '/public'));

// 配置模板引擎
app.engine('html', swig.renderFile);
app.set('views', 'views');
app.set('view engine', 'html');
// 清除模板文件缓存
swig.setDefaults({ cache: false });

// 中间件
app.use(bodyParser.urlencoded({extended:true}));

// 划分功能模块开发
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/login', require('./routers/login'));
app.use('/', require('./routers/main'));


//数据库连接
mongoose.connect("mongodb://localhost:27017/blog", {
    useNewUrlParser: true,
    useFindAndModify: false
});
var con = mongoose.connection;
con.on("error", function (err) {
    console.log("数据库连接失败");
});
con.on("open", function () {
    console.log("数据库连接成功");
});
app.listen(1000);
module.exports = app;