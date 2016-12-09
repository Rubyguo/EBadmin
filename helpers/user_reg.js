/**
 * Created by gr on 2016/12/8.
 */

var mongoose = require('mongoose');
var user_reg = require('../models/user_reg');
var user = require('../models/user');
var fs = require('fs');
var path = require('path');

//读取数据库的待审批用户
exports.accessdb = function (req, res, next) {
    user_reg.fetch(function (err, users) {
        //获取数据库中所有用户的角色
        var fpath= path.join(path.resolve(__dirname, '..'), 'config.json');
        var data = JSON.parse(fs.readFileSync(fpath));
        //var td = JSON.stringify(data);
        var roles = data.roles_chs;
        res.render('pages/user_authorize', { users: users, roles: roles });
        console.log(users);
        next();
    })
};

//向users表添加用户
exports.adduser = function (req, res, next) {
    var name = req.body.addname;
    var role = req.body.addrole;
    var method = req.body.addmethod;
    //如果通过审批
    if(method=='pass'){
        //在待审批用户表user_regs中查询该条记录
        user_reg.findByName(name, function (err, user_add) {
            if (err) {
                console.log(err);
            }
            //构造users数据表记录
            var newuser = new user({
                username: user_add.username,
                password: user_add.password,
                email: user_add.email,
                meta: {
                    createAt: Date.now(),
                    updateAt: Date.now()
                }
            });
            //将用户注册的信息提交给users
            newuser.save(function (err) {
                if(!err){
                    console.log('User saved!');
                    //res.redirect('/waiting_authorize');
                }
            });
        });

    }
    //删除user_regs表中的该条记录
    user_reg.remove({username: name}, function (err) {
        if(err){
            console.log(err);
        }
        else{
            console.log('delete ok');
        }
    });
    next();
};