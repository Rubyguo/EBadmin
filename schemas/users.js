/**
 * Created by Administrator on 2016/11/10.
 */

var mongoose =require('mongoose');

//定义模式
var UserSchema = new mongoose.Schema(
    {
        name: String,
        comments: [{
            comments: String,
            date: String,
            tag: String
        }],
        meta:{
            createAt:{
                type: Date,
                default: Date.now()
            },
            updateAt:{
                type: Date,
                default: Date.now()
            }
        }
    }
);

UserSchema.pre('save',function(next) {
    if(this.isNew){
        //新加数据
        this.meta.createAt = this.meta.updateAt = Date.now();
    }
    else{
        //已有数据
        this.meta.updateAt = Date.now();
    }
    next();
});

//静态方法
UserSchema.statics = {
    fetch: function(cb){
        return this
            .find()
            .sort({'meta.updateAt':1})
            .exec(cb)
    },
    findById: function(id, cb){
        return this
            .find({_id: id})
            .exec(cb)
    },
    deleteById: function(id, cb){
        return this
            .delete({_id: id})
            .exec(cb)
    },
    updateByUidAndCid: function(uid, cid, cb){
        //console.log(uid+'\n'+cid);
        return this
            .find({_id: uid, "comments.$.date": cid})
            .exec(cb)
    }
};

//输出模式
module.exports = UserSchema;