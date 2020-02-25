var express = require('express');
var router = express.Router();
const service=require('./service.js')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/position', service.geohash)

//获取食品列表
router.get('/index_category', service.showlist)

//根据经纬度获取位置信息
router.get('/position/:geohash', service.shows)

//根据经纬度获取商品列表 latitude=40.10038&longitude=116.36867
router.get('/shops', service.showsli)

//根据经纬度和关键字搜索商铺列表
router.get('/search_shops', service.search_shows)


//获取返回验证码
router.get('/captcha', service.captchaaa)

//用户密码登录
router.post('/login_pwd', service.loginpwd)

/*
发送验证码短信
*/
router.get('/sendcode',  service.sendcode)

router.get('/userinfo',  service.userinfo)
//清除浏览器保存的userid的cookie
router.get('/logout',  service.logout)



module.exports = router;
