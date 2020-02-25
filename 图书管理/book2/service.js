const db=require('./db.js')

//翻页请求
exports.soto=(req, res)=>{
    let id=req.params.id*10-10
 
    let sql=`select * from book limit ${id}, 10`
    
    db.base(sql, null,(result)=>{
        res.json(result)
        
    })
}
exports.soname=(req, res)=>{
    let na=req.body.name
    
     let sql=`select * from book where name like "%${na}%" `
     
    
     
    db.base(sql, null,(result)=>{
        res.json(result[0])
    })
}

exports.allBooks=(req,res)=>{
let sql='select * from book'
db.base(sql,null,(result)=>{
    res.json(result)
})
}
exports.addBook=(req,res)=>{
     let info =req.body
     let sql='insert into book set ?'
     let su="添加成功"
     let lo="未添加成功"
     db.base(sql,info,(result)=>{
         if(result.affectedRows==1){
             res.json({su})
         }
         else{
             res.json({lo})
         }
     })
    }
exports.getBookById=(req,res)=>{
        let id=req.params.id
        let sql='select * from book where id=?'
        let data=[id]
        db.base(sql,data,(result)=>{
            res.json(result[0])
        })
}
exports.editBook=(req,res)=>{
    let info =req.body
    
    let sql ='update book set name=?,author=?,static=?,rows=? where id=?'
    console.log(sql)
    let data=[info.name, info.author,info.static,info.rows,info.id]
    db.base(sql,data,(result)=>{
        if(result.affectedRows==1){
            res.json({flag:1})
        }
        else{
            res.json({flag:0})
        }
    })
}
exports.deleteBook=(req,res)=>{
   let id=req.params.id
   let sql='delete from book where id=?'
   let data=[id]
   db.base(sql,data,(result)=>{
    if(result.affectedRows==1){
        res.json({flag:1})
    }
    else{
        res.json({flag:2})
    }
   })
}


//分页查询借着
exports.lend=(req, res)=>{
    let id=req.params.id*10-10
 
    let sql=`select * from lend limit ${id}, 10`
    
    db.base(sql, null,(result)=>{
        res.json(result)
        
    })
}
//添加读者
exports.addlend=(req,res)=>{
    let info =req.body
    let sql='insert into lend set ?'
 
    db.base(sql,info,(result)=>{
        if(result.affectedRows==1){
            res.json({flag:1})
        }
        else{
            res.json({flag:0})
        }
    })
   }
   //删除读者
   exports.deletelend=(req,res)=>{
    let id=req.params.id
    let sql='delete from lend where id=?'
    let data=[id]
    Console.log(SQL)
    db.base(sql,data,(result)=>{
     if(result.affectedRows==1){
         res.json({flag:1})
     }
     else{
         res.json({flag:2})
     }
    })
 }