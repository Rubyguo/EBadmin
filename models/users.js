/**
 * Created by Administrator on 2016/11/10.
 */

//将User模式导出为模型
var mongoose =require('mongoose');
var UserSchema=require('../schemas/users');
//mongoose会根第一个参数从数据库里取集合，集合命名规则：Comment取复数并取小写
//下面例子即从comments集合取数据
var User = mongoose.model('comment', UserSchema);

//导出构造函数
module.exports = User;