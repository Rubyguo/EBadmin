/**
 * Created by Administrator on 2016/11/10.
 */

//var mongoose = require('mongoose');
var user = require('../models/users');

exports.comments = function (req, res, next) {
    user.fetch(function(err, users){
        if(err){
            console.log(err)
        }
        res.render('index_v1',{
            //title: 'FruitShop',
            users: users
        });
        //console.log(users)
    })
};

exports.posttest = function (req, res) {
    user.updateByUidAndCid(function (err, users) {
        if(err){
            console.log(err)
        }
        res.render('agile_board',{
            //title: 'FruitShop',
            users: users
        });
    })
};