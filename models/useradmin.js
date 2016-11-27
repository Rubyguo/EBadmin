/**
 * Created by Administrator on 2016/11/13.
 */

//将User模式导出为模型
var mongoose =require('mongoose');
var UserSchema=require('../schemas/useradmin');
//mongoose会根第一个参数从数据库里取集合，集合命名规则：UserAdmin取复数并取小写
//下面例子即从useradmins集合取数据
var User = mongoose.model('useradmin', UserSchema);

//导出构造函数
module.exports = User;