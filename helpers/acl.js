/**
 * Created by Administrator on 2016/11/19.
 */

var mongodb = require('mongodb');
var acl = require('acl');
var fs = require('fs');
var path = require('path');

mongodb.connect("mongodb://127.0.0.1:27017/userAcl", function(error, db) {
    acl = new acl(new acl.mongodbBackend(db, 'acl_'));
    acl.addUserRoles('gr', 'admin');
    acl.allow('admin',['/','/mainpage','/graph'],'*');
});

exports.access = function (req, res, next) {
    var username = req.session.userId;
    var url = req.url;
    var method = req.method;
    //如果用户已登录，查询用户是否具有该路由权限
    if(username!=null) {
        acl.isAllowed(username, url, method, function (err, respon) {
            if(respon){
                next();
            }
            else{
                res.redirect('/cannot_access');
            }
        });
    }
    else
        res.redirect('/login');
};

//提取用户权限
exports.getRoles = function (req, res, next) {
    //acl_backend();
    var name = req.body.addname;
    var role = req.body.addrole;
    //acl.addUserRoles(name,role);

    var fpath= path.join(path.resolve(__dirname, '..'), 'config.json');
    var data = JSON.parse(fs.readFileSync(fpath));
    var roles = data.roles;
    var role_en;
    for(var key in roles){
        if(roles[key]==role){
            role_en = key;
            //将用户加入acl中
            acl.addUserRoles(name,role_en);
        }
    }
    next();
};