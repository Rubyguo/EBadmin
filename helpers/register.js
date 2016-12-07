/**
 * Created by gr on 2016/12/7.
 */

var mongoose = require('mongoose');
var user = require('../models/user_reg');

//将用户注册的信息提交给数据库
exports.accessdb = function (req, res, next) {
    var name = req.body.username;
    var password = req.body.password;
    var email = req.body.email;
    var user_reg = new user({
        username: name,
        password: password,
        email: email,
        meta:{
            createAt: Date.now(),
            updateAt: Date.now()
        }
    });
    
    //将用户注册的信息提交给数据库
    user_reg.save(function (err) {
        if(!err){
            console.log('User saved!');
            res.redirect('/waiting_authorize');
        }
    });
};