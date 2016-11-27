/**
 * Created by Administrator on 2016/11/21.
 */

var mysql = require('mysql');   //调用mysql模块

//创建一个connection
var connection = mysql.createConnection({
    host: "127.0.0.1",    //主机IP
    user: "rooter",       //用户名
    password: "12345",    //口令
    port: 3306,            //端口
    database: "user"
});

//连接数据库
connection.connect(function (err) {
    if(err){
        console.log("[query] - :"+err);
        return;
    }
    console.log("[connection connected] succeed!");
});

//执行SQL语句
connection.query();