<template>
	<div id="world">
		<header>
			<span @click="back()"><img src="../assets/左箭头.png"></span>
			<p>全球尖货</p>
			<span id="imgs">
			<a @click="f1()"></a>
			<span  v-show="flag">
			<ul>
				<li>首页</li>
				<li>分享</li>
				<li>我</li>
			</ul>
			</span>
			</span>
		</header>
		<div class="imgs">

			<ul>
				<li>
					<a><img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1497922820208_4177_30.jpg@base@tag=imgScale&q=80"></a>
				</li>
				<li>
					<div class="imgs_center">
						<div class="imgs_left">
							<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1496377765139_1965_33.jpg@base@tag=imgScale&q=80">
						</div>
						<div class="imgs_right">
							<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1496319798235_3424_26.jpg@base@tag=imgScale&q=80">
							<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1496838913903_2150_37.jpg@base@tag=imgScale&q=80">
						</div>
					</div>
				</li>
				<li>
					<div class="imgs_bot">
						<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1497924374340_5050_26.jpg@base@tag=imgScale&q=80">
						<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1497924386537_9794_38.jpg@base@tag=imgScale&q=80" />
						<img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1497924396154_4787_33.jpg@base@tag=imgScale&q=80">
					</div>
				</li>
			</ul>
		</div>

		<div class="jh_recommend">
			<!-- <div class="recommend_list" v-for="item in allData">
				<img :src="item.picUrl" /> -->
			<div class="recommend_list" v-for="item in allData" >
				
				<img :src="item.picUrl" @click="show_xp(item)"/>
				<p>{{item.mpName}}</p>
				<a>{{'¥'+item.price}}</a>
				
				<div><span>{{item.ratingCount}}</span>条评论&nbsp;好评<span>{{item.positiveRate+'%'}}</span></div>
				<div class="gouwuc" @click="pushCar(item)">

				</div>
			</div>

			<div class="recommend_list" v-for="item in allData1" >
				
				<img :src="item.picUrl" @click="show_xp(item)"/>
				<p>{{item.mpName}}</p>
				<a>{{'¥'+item.price}}</a>
				
				<div><span>{{item.ratingCount}}</span>条评论&nbsp;好评<span>{{item.positiveRate+'%'}}</span></div>
				<div class="gouwuc" @click="pushCar(item)">

				</div>
			</div>
			
		</div>
	</div>

</template>

<script>
	export default {


		data() {
			return {
				allData: [],
				allData1: [],
				flag:false
			}
		},
		
		created() {
			this.axios.get('../../static/qqjh2.json').then(data => {
				//console.log(data.data.data.listObj);
				this.allData = data.data.data.listObj
			}, err => {
				console.log(err)
			});
			this.axios.get('../../static/qqjh1.json').then(data => {
				//		console.log(data.data.data.listObj);
				this.allData1 = data.data.data.listObj
			}, err => {
				console.log(err)
			});
		},
		methods:{
			show_xp(item){
	 			this.$store.commit("XIANGQING");
	 			
	 			this.axios.get('http://m.laiyifen.com/api/product/baseInfo?mpsIds='+item.mpId+'&platformId=3&areaCode=110114').then(data=>{
	 				this.$store.commit("setMyObj",data.data.data[0]);
		 		},
		 		err=>{
		 			console.log(err)
		 		})
		 		this.axios.get('http://m.laiyifen.com/api/product/desc?mpId='+item.mpId+'&platform=3').then(data=>{
 				this.$store.commit('setStr',data.data.match(/http:\/\/(.*?(?:[\.gif|\.jpg]))[\'|\"].*?/g));
	 				
	 			},
	 			err=>{
	 				console.log(err);
	 			})
 			},
 			back(){
				window.history.back()
			},
			
			f1(){
				this.flag=!this.flag;
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


		}


	}
</script>

<style scoped>
	<style>* {
		margin: 0;
		padding: 0;
	}

	div {
		margin: 0;
		padding: 0;
	}

	img {
		display: block;
	}

	.imgs {
		padding-top: 0.4rem;
	}
	#imgs span{
		width: 0.7rem;
		height: 1.2rem;
		position: absolute;
		top: 0.33rem;
		right: 0px;
		margin-top: 0.1rem;
		text-align: center;
		font-size: .14rem;
		color: white;
		/*background: darkslategray;*/
		background:rgba(0,0,0,0.65);
		/*display:none;*/
	}
	#imgs span li{
		height:30px;
		height: .4rem;
		line-height: 0.4rem;
		border-bottom: 1px solid lightgray;
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
		font-size: 0.18rem;
		margin-left: 0.3rem;
		float: left;
	}

	header a {
		float: right;
		width: .3rem;
		height: .3rem;
		background: url(../assets/a1.png) no-repeat -0.4rem -1.80rem;
		background-size: 3.75rem;
		margin-right: .1rem;
	}

	.imgs img {
		width: 100%;
	}

	.imgs_center {
		width: 100%;
		float: left;
	}

	.imgs_left {
		float: left;
		width: 50%;
	}

	.imgs_left img {
		width: 100%;
	}

	.imgs_right {
		float: left;
		width: 50%;
	}

	.imgs_right img {
		width: 100%;
	}

	.imgs_bot {
		width: 100%;
	}

	.jh_recommend {
		width: 100%;
		height: 23.75rem;
	}

	.recommend_list {
		width: 50%;
		height: 2.9rem;
		float: left;
	}

	.recommend_list img {
		width: 80%;
		margin-top: 0.2rem;
		margin-left: 0.2rem;
	}

	.recommend_list p {
		width: 80%;
		margin-top: 0.1rem;
		margin-left: 0.2rem;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		font-size: .15rem;
		color: black;

	}

	.recommend_list a {
		display: block;
		margin-top: 0.2rem;
		margin-left: 0.2rem;
		font-size: 0.16rem;
		color: #ff6900;
	}

	.recommend_list span {
		color: #ff6900;
	}

	.recommend_list div {
		margin-top: 0.05rem;
		margin-left: 0.3rem;
		float: left;
		font-size: 0.13rem;
	}

	.gouwuc {
		width: .2rem;
		height: .2rem;
		float: left;
		background: url(../assets/a3.png) no-repeat -1.81rem -2.51rem;
		background-size: 3.75rem;

	}
</style>