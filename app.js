var express = require("express")
var port = process.env.PORT || 3000    // PORT=4000 node app.js
var app = express()

app.set('views', "./views")       // 设置视图路径
app.set('view engine', 'jade')    // 设置末班引擎
app.listen(port)                  // 监听端口

console.log('imooc started on port ' + port)


// index page
app.get('/', function(req, res) {
    res.render('index', {
        title: 'imooc 首页'
    })
})

// detail page
app.get('/movie/:id', function(req, res) {
    res.render('detail', {
        title: 'imooc 详情页'
    })
})

// admin page
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: 'imooc 后台录入页'
    })
})

// list page
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: 'imooc 列表页'
    })
})