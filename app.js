var express = require('express')
var path = require('path')
var bodyParser = require('body-parser')
var port = process.env.PORT || 3000
var app = express()

app.set('views', './views/pages')
app.set('view engine', 'jade')
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(express.static(path.join(__dirname, 'bower_components')))
    // app.use(express.static(path.join(__dirname, 'bower_components')))
app.listen(port)

// index page
app.get('/', function(req, res) {
    res.render('index', {
        title: 'website 首页',
        movies: [{
            title: '机械水电',
            _id: 1,
            poster: 'http://ww3.sinaimg.cn/orj480/e8bd9419jw1f2363g8ofwj20c80c7t9u.jpg'
        }, {
            title: '机械水电',
            _id: 2,
            poster: 'http://ww3.sinaimg.cn/orj480/e8bd9419jw1f2363g8ofwj20c80c7t9u.jpg'
        }, {
            title: '机械水电',
            _id: 3,
            poster: 'http://ww3.sinaimg.cn/orj480/e8bd9419jw1f2363g8ofwj20c80c7t9u.jpg'
        }, {
            title: '机械水电',
            _id: 4,
            poster: 'http://ww3.sinaimg.cn/orj480/e8bd9419jw1f2363g8ofwj20c80c7t9u.jpg'
        }, {
            title: '机械水电',
            _id: 5,
            poster: 'http://ww3.sinaimg.cn/orj480/e8bd9419jw1f2363g8ofwj20c80c7t9u.jpg'
        }, {
            title: '机械水电',
            _id: 6,
            poster: 'http://ww3.sinaimg.cn/orj480/e8bd9419jw1f2363g8ofwj20c80c7t9u.jpg'
        }]
    })
})

// detail page
app.get('/movie/:id ', function(req, res) {
    res.render('detail', {
        title: 'website 详情'
    })
})

// admin page
app.get('/admin/movie', function(req, res) {
    res.render('admin', {
        title: 'website 后台'
    })
})

// list page
app.get('/admin/list', function(req, res) {
    res.render('list', {
        title: 'website 列表'
    })
})