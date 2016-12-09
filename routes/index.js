var express = require('express');
var router = express.Router();
var login = require('../helpers/login');
var register = require('../helpers/register');
var acl = require('../helpers/acl');
var auth = require('../helpers/user_reg');

/* GET home page. */
router.get('/', acl.access, function(req, res, next) {
    res.render('index', { username: req.session.userId, userrole: req.session.userRole});
    console.log(req.session.userId);
    console.log(req.session.userRole);
});

//主页
router.get('/mainpage', function(req, res, next) {
  res.render('mainpage', { title: 'Express' });
});

//用户审批页面
router.get('/authorize', auth.accessdb, function(req, res, next) {
    //res.render('pages/user_authorize', { title: 'Express' });
    //res.send();
});

//用户审批页面
router.post('/addUser', auth.adduser, acl.getRoles, function(req, res, next) {
    //获取批准的用户名
    //var username = req.body.adduser;
});

//图页面
router.get('/graph', function(req, res, next) {
  res.render('pages/graph', { title: 'Express' });
});

//登录页面
router
    .get('/login', function(req, res, next) {
        res.render('login', { usererr: 'false', passworderr: 'false'});
    })
    .post('/login', login.accessdb);

//注册页面
router
    .get('/register', function(req, res, next) {
        res.render('register', { title: 'Express' });
    })
    .post('/register', register.accessdb);

//若用户请求了无权限的资源
router.get('/cannot_access', function(req, res, next) {
  res.render('pages/cannot_access', { title: '您没有访问该页面的权限' });
});

//用户正在审批
router.get('/waiting_authorize', function(req, res, next) {
    res.render('pages/waiting_authorize', { title: '您的账号已提交' });
});

module.exports = router;
