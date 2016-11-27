/**
 * Created by Administrator on 2016/11/13.
 */


var mongoose = require('mongoose');
var useradmin = require('../models/useradmin');


exports.accessdb = function (req, res, next) {
    var name = req.body.username;
    var password = req.body.password;

    useradmin.findByName(name, function (err, user) {
        if (err) {
            console.log(err)
        }
        //如果用户口令正确    
        else if (password==user.password) {
            //提取用户权限
            //console.log(user.role+'\n'+req.url);
            req.session.user = {name: user.name, role: user.role};
            res.redirect('/');
        }
        //用户口令错误，渲染登录错误页面
        else{
            res.redirect('/wrongpassword');
        }
    })
};