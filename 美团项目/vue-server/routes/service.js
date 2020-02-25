const svgCaptcha = require('svg-captcha')
const md5 = require('blueimp-md5')
const datao=require('./data/gps.json')
const showlistdata=require('./data/list.json')
const ajax = require('./api/ajax')
const models = require('./db/models.js')
const UserModel = models.getModel('user')
const _filter = {'pwd': 0, '__v': 0} // 查询时过滤掉

const users = {}


exports.geohash=(req, res)=>{
    res.json(datao)
}
exports.showlist=(req, res)=>{
    res.json(showlistdata)
}

exports.shows=(req,res)=>{
    const {geohash} = req.params
    ajax(`http://cangdu.org:8001/v2/pois/${geohash}`)
      .then(data => {
        res.send({code: 0, data})
})
}

exports.showsli=(req,res)=>{
    const latitude = req.query.latitude
  const longitude = req.query.longitude

  setTimeout(function () {
    const data = require('./data/shops.json')
    res.send({code: 0, data})
  }, 300)
}

exports.search_shows=(req,res)=>{
    const {geohash, keyword} = req.query
  ajax('http://cangdu.org:8001/v4/restaurants', {
    'extras[]': 'restaurant_activity',
    geohash,
    keyword,
    type: 'search'
  }).then(data => {
    res.send({code: 0, data})
  })
}

//返回验证码
exports.captchaaa=(req,res)=>{
 var captcha = svgCaptcha.create({ 
     ignoreChars: '0o1l',
     noise: 2,
     color: true
});
    console.log(captcha);
    // req.session.captcha=captcha.text;
    //    res.type('svg');//使用ejs等模板时如果报错
    res.type('html');
    res.status(200).send(captcha.data);
}


exports.loginpwd=(req, res)=>{

    const name = req.body.name
    const pwd = md5(req.body.pwd)
    const captcha = req.body.captcha.toLowerCase()
    console.log('/login_pwd', name, pwd, captcha, req.session)

      // 可以对用户名/密码格式进行检查, 如果非法, 返回提示信息
  if(captcha!==req.session.captcha) {
    return res.send({code: 1, msg: '验证码不正确'})
  }
  // 删除保存的验证码
  delete req.session.captcha
   
  UserModel.findOne({name}, function (err, user) {
    if (user) {
      console.log('findUser', user)
      if (user.pwd !== pwd) {
        res.send({code: 1, msg: '用户名或密码不正确!'})
      } else {
        req.session.userid = user._id
        res.send({code: 0, data: {_id: user._id, name: user.name, phone: user.phone}})
      }
    } else {
      const userModel = new UserModel({name, pwd})
      userModel.save(function (err, user) {
        // 向浏览器端返回cookie(key=value)
        // res.cookie('userid', user._id, {maxAge: 1000*60*60*24*7})
        req.session.userid = user._id
        const data = {_id: user._id, name: user.name}
        // 3.2. 返回数据(新的user)
        res.send({code: 0, data})
    })
}
})
}

exports.sendcode=(req, res)=>{
//1.获取请求的参数
var phone=req.query.phone
//2.处理数据 生成验证码
var code=sms_util.randomCode(6)
//3.发送给指定的文档
console.log('向${phone}发送验证码短信${code}')
 sms_util.sendCode(phone, code, function(success){
   console.log('fdsfd')
  if(success){
    users[phone]=code
    console.log('保存验证码', phone, code)
    res.send({"code":0})
  }else{
    res.send({'code':1,msg:'短信发送失败'})
  }
  })
}

exports.userinfo=(req,res)=>{
  const userid = req.session.userid
  // 查询
  UserModel.findOne({_id: userid}, _filter, function (err, user) {
    // 如果没有, 返回错误提示
    if (!user) {
      // 清除浏览器保存的userid的cookie
      delete req.session.userid

      res.send({code: 1, msg: '请先登陆'})
    } else {
      // 如果有, 返回user
      res.send({code: 0, data: user})
    }
  })

}

exports.logout=(req,res)=>{
  delete req.session.userid

  res.send({code: 0})
}
