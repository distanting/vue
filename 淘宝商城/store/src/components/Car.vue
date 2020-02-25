<template>
 <div id="car">
   <header>
   	<span @click="back()"><img src="../assets/左箭头.png"></span>
			<p>购物车</p>
			<a>编辑</a>
   </header>
   <div class="carMiddle">
	   	<div class="ckeck">
			<div class="checkbox" v-bind:class="{ 'checkbox' : !getFlag, 'active': getFlag}" @click="toggle()"></div>
	   		<div class="icon"></div>
	   		<span>来伊份</span>
	   	</div>

	   	<div class="comDetails" v-for="item in getCarArr" v-if="item.number">
	   		<div class="checkbox" v-bind:class="{ 'checkbox' : !item.flag, 'active': item.flag}" @click="quFan(item)"></div>
	   		<img :src="item.picUrl||item.url800x800||item.pics[0].url800x800" @click="show_xp(item)">
	   		<span><a>直降</a>{{item.originalMpName}}</span>
	   		<p>¥:{{item.price}}</p>
	   		<div class="add">
	   			<span @click="reduce(item)">-</span><span>{{item.number}}</span><span @click="add(item)">+</span>
	   		</div>
	   	</div>
   </div>
   
		<div class="listImg">
			<div class="car_recommend">
				<a></a><span>猜你喜欢</span>
				<div class="listSwiper">
					<div class="listImg1" v-for="item in allData">
						<img :src="item.srcImgUrl" style="width: 100%;height: 70%;" @click="show_xp(item)">
						<p>{{item.mpName}}</p>
					<div class="hotSale">	<b v-if="item.tagList">{{item.tagList[0].tagName}}</b></div>
						<a>{{"¥"+item.price}}</a>
						<i v-if="item.sourcePrice" class="oldPrice">{{"¥"+item.sourcePrice}}</i>
						<span class="gouwuc" @click="pushCar(item)"></span>
					</div>
				</div>
			</div>
		</div>
		<div class="jisuan">
			<div class="div1">
				<p>合计：￥ {{getSumPrice}}</p>
				<p>以优惠，不含运费</p>
			</div>
			<div class="div2">去结算</div>
		</div>
   
 </div>
  
</template>

<script>
export default {

 	data(){
 		return{
 			isA:true,
 			num:1,
 			allData:[],
 			allData1:[],
 			index:0
 			
 			
 		};
 },
 	methods:{
 		toggle(){
 			 this.$store.commit("quanXuan");

 		},
 		add(item){
 			item.number++;
 			this.$store.commit('addCarNumber')
 		},
 		reduce(item){
 			this.$store.commit('janCarNumber')
 			item.number--;
 		},
 		back(){
 			window.history.back()
 		},
 		pushCar(item){
 			// this.$store.commit('setCarNumber');//购物车红点
 			//购物车数组
 			item.number||this.$set(item,"number",1);
 			item.flag||this.$set(item,"flag",true);		
 			this.$store.commit('setCarArr',item);		
 			this.$store.commit('myArr',item);
 			this.$store.commit('setCarNumber');
 		},
 		show_xp(item){
 			this.$store.commit("XIANGQING");
 			
 			this.axios.get('http://m.laiyifen.com/api/product/baseInfo?mpsIds='+item.mpId+'&platformId=3&areaCode=110114').then(data=>{
 				this.$store.commit("setMyObj",data.data.data[0]);
	 		},
	 		err=>{
	 			console.log(err)
	 		})
 			//获取详情
	 		this.axios.get('http://m.laiyifen.com/api/product/desc?mpId='+item.mpId+'&platform=3').then(data=>{
 				this.$store.commit('setStr',data.data.match(/http:\/\/(.*?(?:[\.gif|\.jpg]))[\'|\"].*?/g));
 			},
 			err=>{
 				console.log(err);
 			})
	 	},
	 	quFan(item){
	 		item.flag=!item.flag;
	 		this.$store.commit('watchFlag');
	 	}
 		
 		
 	},
 	created(){
 		this.axios.get('../../static/car.json').then(data=>{
			// console.log(data.data.data.dataList)
 			this.allData=data.data.data.dataList
 			
 		},err=>{
 			console.log(err)
 		});
 	},
 	computed:{
 		getCarArr(){
 			return this.$store.state.carArr;
 		},
 		getSumPrice(){
 			return this.$store.getters.jsPrice;
 		},
 		getFlag(){
 			 return this.$store.state.lyf;
 		}
 	}
 
}
</script>


<style scoped lang="less">
.jisuan{
		width:100%;
		height: .49rem;
		background-color: #333;
		position: fixed;
	    bottom: .49rem;
	    left: 0;
	    color: white;
	    div{
	    	float: left;
	    }
	    .div1{
	    	width: 70%;
	    	height: 100%;
	    	p{
	    		height: 50%;
	    		line-height: .25rem;
	    		font-size: .14rem;
	    		text-indent: .1rem;
	    		padding: 0 .2rem 0 0;
	    	}
	    }
	    .div2{
	    	width: 30%;
	    	height: 100%;
	    	background-color: gray;
	    	text-align: center;
	    	line-height: .49rem;
	    	
	    	font-size: 0.17rem;
	    }
	}
header {
		width: 100%;
		height: 0.43rem;
		background: white;
		position: fixed;
		z-index: 12;
		border-bottom: 0.01rem solid #e3e3e4;
	}
	
	header img {
		width: 0.22rem;
		height: 0.22rem;
		float: left;
		margin-top: 0.1rem;
		margin-left: 0.07rem;
	}
	
	header p {
		width: 73%;
		text-align: center;
		line-height: 0.43rem;
		font-size: 0.19rem;
		margin-left: 0.3rem;
		float: left;
	}
	header a{
		line-height:.44rem;
		font-size: .14rem;
	}
	.carMiddle{
		width: 100%;
		/*height: 2rem;*/
		padding-top: .47rem;
	}
	.ckeck{
	
		height: .4rem;
		line-height: .3rem;
		margin-left: .2rem;
		margin-top: .15rem;
		
	}
	.checkbox{
		width: .2rem;
		height: .2rem;
		background: url(../assets/a1.png) no-repeat -.6rem -.44rem;
		background-size: 3rem;
		float: left;
	}
	.active{
	
		width: .2rem;
		height: .2rem;
		background: url(../assets/a1.png) no-repeat -.3rem -.44rem;
		background-size: 3rem;
		line-height: .3rem;

	}
	.icon{
		float: left;
		width: .20rem;
		height: .2rem;
		background: url(../assets/a3.png) no-repeat 0rem -4.25rem;
		background-size: 4rem;
		margin-left: .1rem;
		line-height: .3rem;
	}
	.carMiddle span{
		float: left;
		font-size: .15rem;
		margin-left: .1rem;
		line-height: .23rem;
	}
	.comDetails{
		width: 100%;
		height: 1rem;
		background: #fafafa;
		position: relative;
	}
	.comDetails .checkbox{
		margin-top: .4rem;
		margin-left: .2rem;
	}
	.comDetails img{
		width: .8rem;
		height: .8rem;
		border: 1px solid #F0F0F0;
		margin-top: .1rem;
		margin-left: .1rem;
		float: left;
	}
	.comDetails span{
		margin-top: .2rem;
		line-height: .15rem;
		float: left;
	}
	.comDetails span a{
		display: block;
		width: .3rem;
		height: .15rem;
		font-size: .12rem;
		line-height: .15rem;
		color:white;
		background: red;
		border-radius: 20%;
		text-align: center;
		float:left;
		margin-right: .1rem;
	}
	.comDetails p{
		width: 2rem;
		float: left;
		margin-top: .4rem;
		font-size: .16rem;
		margin-left: .1rem;
		color: #ff6900;
	}
	.add{
		width: 130px;
		height: 20px;
		position: absolute;
		top: .32rem;
		right: 0rem;
		z-index: 30;
	}
	.add span:first-child{
		display: inline-block;
		width: .2rem;
		height: .2rem;
		border: 1px solid #F0F0F0;
		font-size: .25rem;
		text-align: center;
	}
	.add span:last-child{
		display: inline-block;
		width: .2rem;
		height: .2rem;
		border: 1px solid #F0F0F0;
		font-size: .25rem;
		text-align: center;
	}
	.add span:nth-child(2){
		width: .4rem;
		height: .2rem;
		text-align: center;
		line-height: .2rem;
		
	}
	.listImg{
		width:100%;
		
		height: 24.7rem;
		background: #f0f0f0;
	}
	.car_recommend{
		width: 100%;
		height: .4rem;
	
	}
	.car_recommend span{
		display: block;
		text-align: center;
		line-height: .7rem;
		font-size: .16rem;
	}
	.car_recommend a:first-child{
		width: .17rem;
		height: .17rem;
		display: block;
		background: url(../assets/a3.png) no-repeat -.15rem -3.14rem;
		background-size: 3rem;
		float: left;
		text-align: center;
		line-height: ;
		position:relative;
		top: 22px;
		left: 152px;
	}
	.listImg1{
		width: 45%;
		height: 2.2rem;
		background: white;
		float: left;
		margin-left: 12px;
		margin-top: 10px;
	}
	.listImg1 p{
	
		height: .2rem;
		font-size: .15rem;
		margin-left: .1rem;
		margin-top: .1rem;
		overflow: hidden;
	}
	.listImg1 a{
		display: inline-block;
		font-size: .16rem;
		color: #ff8937;
		margin: 0 0 0 .1rem;
	
	}
	.listImg1 i{
		
		color: lightgray;
		margin-left: .1rem;
		font-size: 12px;
		text-decoration: line-through;
	
	}
	.listImg1 b{
		display: block;
		width: .3rem;
		height: .17rem;
		background:red;
		font-size:.12rem;
		color: white;
		border-radius: 20%;
		margin-left: .1rem;
		text-align: center;
		line-height: .17rem;
	}
	.hotSale{
		width: 100%;
		height: .17rem;
	}
	.gouwuc {
	
		width: .2rem;
		height: .2rem;
		float: right;
		background: url(../assets/a3.png) no-repeat -1.81rem -2.51rem;
		background-size: 3.75rem;
		margin: 0 .15rem 0 0;	
	}
	
</style>