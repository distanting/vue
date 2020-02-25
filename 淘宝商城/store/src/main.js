// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入axios
import axios from 'axios'
Vue.prototype.axios = axios;
// 引入vuex
import Vuex from 'vuex'
Vue.use(Vuex)
// 引入vue-lazyload
import Vuelazy from 'vue-lazyload'
//路由
import Router from "vue-router"
import First from './components/First'
import Market from './components/market/Market'
import Category from './components/market/Category'
import Recommend from './components/market/Recommend'
import View from './components/common/View.vue'
import GoodDetail from './components/common/GoodDetail'
import World from './components/World'
import Car from './components/Car'
import Mine from './components/Mine'
import Login from './components/Mine/Login'

import Setup from './components/Mine/Setup'
import News from './components/Mine/News'
import Getlist from './components/Getlist'

import Register from './components/Mine/Register'
import Yidianka from './components/Mine/Yidianka'
import Mymoney from './components/Mine/Mymoney'
import Yidou from './components//Mine/Yidou'
import Yidouguize from './components//Mine/Yidouguize'
import Myorder from './components/Mine/Myorder'
import Order1 from './components/Mine/Order1'
import Order2 from './components/Mine/Order2'
import Order3 from './components/Mine/Order3'
import Order4 from './components/Mine/Order4'
import Order5 from './components/Mine/Order5'
import Order6 from './components/Mine/Order6'
import Order7 from './components/Mine/Order7'
import Mypoint from './components/Mine/Mypoint'
import Coupon from './components/Mine/Coupon'
import Address from './components/Mine/Address'


// 版本序列号：cd1df81..a2e4b30


// import Box from "./components/Box"
Vue.use(Router)
//路由配置
var routes = [

	{path:"",component:First},
	{path:"/first",component:First},
	{path:"/market",component:Market},
	{path:"/view",component:View},
	{path:"/goodDetail/:refId",component:GoodDetail},
	{path:"/world",component:World},
	{path:"/car",component:Car},
	{path:"/mine",component:Mine},

    {path:'/login',component:Login},
    {path:'/setup',component:Setup},
    {path:'/news',component:News},
     {path:'/getlist/{{item}}',component:Getlist},


    {path:'/Register',component:Register},
    {path:'/Yidianka',component:Yidianka},
    {path:'/Mymoney',component:Mymoney},
    {path:'/Yidou',component:Yidou},
    {path:'/Yidouguize',component:Yidouguize},
    {path:'/Myorder',component:Myorder,children:[
        {path:'',component:Order1},
        {path:'Order1',component:Order1},
        {path:'Order2',component:Order2},
        {path:'Order3',component:Order3},
        {path:'Order4',component:Order4},
        {path:'Order5',component:Order5},
        {path:'Order6',component:Order6},

    ]},
    {path:'/Order7',component:Order7},
    {path:'/Mypoint',component:Mypoint},
    {path:'/Coupon',component:Coupon},
    {path:'/Address',component:Address}



]

var router = new Router({
	routes:routes
})

Vue.config.productionTip = false


//img懒加载
Vue.use(Vuelazy,{
	loading:'*.png'
})


//实现rem布局
var body_width = document.body.clientWidth;
	var html = document.getElementById("html");
	html.style.fontSize = body_width*100/414+"px";
window.onresize = function(){
	var body_width = document.body.clientWidth;
	var html = document.getElementById("html");
	html.style.fontSize = body_width*100/414+"px";
}
// 全局bus
window.bus = new Vue();
//vuex
var store = new Vuex.Store({
	state:{
		flag:false,
		look:false,
		mpid:"",
		myObj:"",
		strImg:'',
        name:"",
		carArr:[],
		vvv:true,
		carNumber:0,
		maxArr:[],
		lyf:true
// >>>>>>> e8c434d98ff005534bf50c6bb7669ba0404016df
	},
	mutations:{
		//修改falg方法
		FALG(state){
			state.flag = true;
		},
		FFALG(state){
			state.flag = false;
			state.look = false;
		},
		XIANGQING(state){
			state.look = true;
		},
		setMpid(state,id){
			state.mpid = id;
		},
		setMyObj(state,obj){
			state.myObj=obj;
		},
		setStr(state,str){
			state.strImg = str;
		},
        Chuanzhi(state,name){
            state.name = name;
        },
		setCarArr(state,obj){
			if(state.carArr.length==0){
				state.carArr.push(obj);
			}else{
				var f = false;
				var j = 0;
				for(var i=0;i<state.carArr.length;i++){
					if(state.carArr[i].mpId == obj.mpId){
						f=true;
						j=i;
						break;
					}
				}
				if(f==true){
					state.carArr[j].number = state.carArr[j].number+1;
				}else{
					state.carArr.push(obj);
				}

			}

			}
		,
		myArr(state,obj){
			state.maxArr.push(obj)
		},
		setCarNumber(state){
			var num = 0;
			for(var i=0;i<state.carArr.length;i++){
				num += state.carArr[i].number;
			}
			 state.carNumber = num;
		},
		addCarNumber(state){
			state.carNumber++;
		},
		janCarNumber(state){
			state.carNumber--;
		},
		quanXuan(state){
			state.lyf = !state.lyf;
			for(var i =0;i<state.carArr.length;i++){
				state.carArr[i].flag = state.lyf;
			}
		},
		watchFlag(state){
			var m = true;
			for(var i=0;i<state.carArr.length;i++){
				if(state.carArr[i].flag==false){
					m = false;
					break;
				}
			}
			state.lyf = m;
		}
	},
	getters:{
		jsPrice(state){
			var sum = 0;
			for(var i=0;i<state.carArr.length;i++){
				if(state.carArr[i].flag==true){
					sum += state.carArr[i].price*state.carArr[i].number;
				}

			}
			return sum.toFixed(2);
		},
	}

})

//vue实例
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App },
  router:router,
  store:store
})
