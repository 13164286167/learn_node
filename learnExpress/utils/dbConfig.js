const mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : '127.0.0.1',
//   user     : 'root',
//   password : '',
//   database : 'flappbird'
// });
 
// connection.connect();
// var sql = 'SELECT * FROM user_info WHERE cid=1';
// connection.query(sql, function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results);
// });
 
// connection.end();

module.exports = {
    config:{
        host     : '127.0.0.1',
        user     : 'root',
        password : '',
        database : 'flappbird'
    },
    sqlConnect:function(sql,sqlArr,callBack){
        var pool = mysql.createPool(this.config)
        pool.getConnection((err,conn)=>{
            if(err){console.log("连接失败"); return;}
            console.log("连接成功");
            conn.query(sql,sqlArr,callBack);
            conn.release();
        })

    }
    
}