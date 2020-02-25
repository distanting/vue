const mysql=require('mysql');

exports.base=(sql,data,callback)=>{

    var connection = mysql.createConnection({
        host     : '49.234.133.152',
        user     : 'root',
        password : '45418887',
        database : 'book'
      });
       
      connection.connect();
 
      connection.query(sql, data, function (error, results, fields) {
        if (error) throw error
        callback(results)
      })
       
      connection.end()
    
}