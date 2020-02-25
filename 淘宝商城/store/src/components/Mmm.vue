<template>
 <div id="mmm">

	<div v-for="item in arrList" class="mm" >
			<img :src="item.picUrl" @click="show_xp(item)">
			<p class="p1 ellipse">{{item.originalMpName}}</p>
			<p class="p2"><i @click="pushCar(item)"></i><span class="sp1">￥{{item.marketPrice||item.price}}</span><span class="sp2" v-if="item.marketPrice">￥{{item.price}}</span></p>
	</div>
 </div>

</template>

<script>
export default {
 	name:"Mmm",
 	data(){
 		return{
 			arrList:[],
 			arrList1:[],
 			arrList2:[],
 			divs:[],
 			hou_div:{},
 			height:0,
 			h:0,
 			flag:false,
 			obj:{}
 		}
 	},
 	created(){
 		this.axios.get("../static/first_img.json").then(data=>{
 			this.arrList = data.data.data.listObj;
 		},
 		err=>{
 			console.log(err);
 		})

 		this.axios.get("../static/first_img1.json").then(data=>{
			this.arrList1 = data.data.data.listObj;

 		},
 		err=>{
 			console.log(err);
 		})

 		this.axios.get("../static/first_img2.json").then(data=>{
			this.arrList2 = data.data.data.listObj;

 		},
 		err=>{
 			console.log(err);
 		})
 		//懒加载


 	},
 	methods:{
 		ysHeight(){
 			this.divs = document.getElementsByClassName('mm');
		 	this.hou_div = this.divs[this.divs.length-1];
		 	// console.log(this.hou_div);
		 	this.height = this.hou_div&&this.hou_div.offsetTop;
 		},
 		show_xp(item){
 			this.$store.commit("XIANGQING");
 			/*this.$store.commit("setMpid",item.mpId);
 			console.log(item.mpId);*/
 			this.axios.get('http://m.laiyifen.com/api/product/baseInfo?mpsIds='+item.mpId+'&platformId=3&areaCode=110114').then(data=>{
 				this.$store.commit("setMyObj",data.data.data[0]);
	 		},
	 		err=>{
	 			console.log(err)
	 		})
 			//获取详情
	 		this.axios.get('http://m.laiyifen.com/api/product/desc?mpId='+item.mpId+'&platform=3').then(data=>{
 				this.$store.commit('setStr',data.data.match(/http:\/\/(.*?(?:[\.gif|\.jpg]))[\'|\"].*?/g));
 				/*console.log(data.data.match(/http:\/\/(.*?(?:[\.gif|\.jpg]))[\'|\"].*?/g))*/
 			},
 			err=>{
 				console.log(err);
 			})
 		},
 		pushCar(item){
 			this.$store.commit('setCarNumber');//购物车红点
 			//购物车数组
 			item.number||this.$set(item,"number",1);
 			item.flag||this.$set(item,"flag",true);			
 			this.$store.commit('setCarArr',item);		
 			this.$store.commit('myArr',item);
 			this.$store.commit('setCarNumber');
 		}

 	},
 	mounted(){
 		var that = this;
 		document.body.onscroll = function(){
 			that.ysHeight();
 			// console.log(that.height+"和"+that.h);

 			that.h = document.body.scrollTop + document.documentElement.clientHeight;
 			if(that.h>that.height){
 				that.arrList = that.arrConcat;
 			}
 			// console.log(that.flag);
 			if(that.h>that.height&&that.flag){
	 			that.arrList = that.arr1Concat;
	 		}
	 		// console.log('0000');
 		}
 	},

 	computed:{
 		arrConcat(){
 			this.flag = true;
 			return this.arrList.concat(this.arrList1);
 		},
 		arr1Concat(){
 			this.flag = false;
 			return this.arrList.concat(this.arrList2);

 		}

 	}
}
</script>


<style scoped lang="less">
#mmm{
	width: 100%;
	overflow: hidden;
	background: #f5f5f5;

	div{
		float: left;
		width: 47%;
		height: 2.55rem;
		background: #fff;
		margin: 0.1rem 0rem 0 0.08rem;

		img{
			display: block;
			width: 85%;
			margin:  0 0 0.22rem 0.2rem;
		}
		.p1{
			font-size: .18rem;
			text-indent: 15px;
			height: .25rem;
			line-height: .2rem;
			margin: 0 0 0.05rem 0 ;
		}
		.p2{
			font-size: .18rem;
			text-indent: 13px;

			i{
				width: .22rem;
				height: .21rem;
				float: right;
				background: url(../assets/a3.png) no-repeat -1.79rem -2.49rem;
				background-size: 3.75rem;
				margin-right: .1rem;
			}
			.sp1{
				color: #ff6900;
			}
			.sp2{
				font-size: .12rem;
				margin: 0 0 0 .1rem;
				text-decoration: line-through;
			}
		}
	}
}

</style>