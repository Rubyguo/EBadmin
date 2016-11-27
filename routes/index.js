var express = require('express');
var router = express.Router();
var login = require('../helpers/login');
var acl = require('../helpers/acl');

/* GET home page. */
router.get('/', acl.access, function(req, res, next) {
  res.render('index', { user: req.session.user});
});

router.get('/mainpage', acl.access, function(req, res, next) {
  res.render('index_v1', { title: 'Express' });
});

router.get('/graph', acl.access, function(req, res, next) {
  res.render('pages/graph', { title: 'Express' });
});

router
    .get('/login', function(req, res, next) {
      res.render('login', { title: 'Express' });
    })
    .post('/login', login.accessdb);

router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});

router.get('/cannot_access', function(req, res, next) {
  res.render('pages/cannot_access', { title: '您没有访问该页面的权限' });
});

router.get('/wrongpassword', function(req, res, next) {
    res.render('pages/cannot_access', { title: '密码错误' });
    //过一段时间自动跳转登录页面
});

module.exports = router;
