/**
 * Created by Administrator on 2016/11/19.
 */

var mongodb = require('mongodb');
var acl = require('acl');

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
        acl.isAllowed(username, url, method, function (err, res) {
            if(res){
                next();
            }
            else{
                res.redict('/cannot_access');
            }
        });
    }
    else
        res.redirect('/login');
};

//提取用户权限
exports.aclaccess = function (req, res, next) {
    //acl_backend();
    var username = req.body.username;
};