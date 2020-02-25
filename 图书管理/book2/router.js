const express =require('express')
const app=express()
var bodyParser = require('body-parser')
//添加json解析
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use('', express.static('public'))

const service=require('./service.js')
const router=express.Router()
//select * from tab_1 where name like '张%'; 
router.post('/soto/oo', service.soname)
//分页查询查询id
router.get('/soto/:id', service.soto)
//提供所有图书的信息
router.get('/books', service.allBooks)
//添加图书信息时提交数据
router.post('/books/book',service.addBook)
//编辑图书时候根据id查询相应信息
router.get('/books/book/:id',service.getBookById)
//提交编辑的数据
router.post('/books/edbook',service.editBook)
//删除图书的信息
router.delete('/books/book/:id',service.deleteBook)

//分页查询借着
router.get('/lend/:id', service.lend)
//添加借书读者
router.post('/lend/book',service.addlend)
//删除读者记录
router.delete('/lend/book/:id',service.deletelend)



app.use(router);
app.listen(3000,()=>{
    console.log('running....')
})