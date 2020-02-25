<template>
	<div id="news">
		<header>
			<img src="../../assets/左箭头.png" @click="back()">
			<p>消息中心</p>
		</header>
		<ul class="newsList">
			<li v-for="item in allData">
				<img :src="item.iconUrl">
				<span>{{item.labelName}}</span>
			</li>
		</ul>
		<div class="kong"></div>
	</div>
</template>

<script>
export default{
	data(){
		return {
			allData:[]
		}
	},
	methods:{
		back(){
			window.history.back()
		}
	},
	created(){
		this.axios.get('../../static/news.json').then(data => {
				//console.log(data.data.data);
				this.allData = data.data.data
			}, err => {
				console.log(err)
			});
	}
}
</script>

<style scoped>
		header{
		width: 100%;
		height: 0.43rem;
		background: white;
		border-bottom: 1px solid #e4e4e4;
	}
	header img {
		width: 0.22rem;
		height: 0.22rem;
		float: left;
		margin-top: 0.1rem;
		margin-left: 0.07rem;
	}
	
	header p{
	float: left;
	width: 73%;
	text-align: center;
	font-size: 0.18rem;
	line-height: 0.43rem;
	margin-left: .2rem;
	}
	.newsList li{
		width: 100%;
		height: .6rem;
		border-bottom: 1px solid #e4e4e4;
	}
	.newsList img{
		width: .4rem;
		height: .4rem;
		margin-bottom: .1rem;
		margin-left: .1rem;
		
		
	}
	.newsList>li>span{
		font-size: .16rem;
		line-height: .6rem;
		margin-left: .1rem;
	}
	.newsList li:last-child{
		border: none;
	}
	.kong{
		width: 100%;
		height: 5rem;
		background: #f0f0f0;
	}
</style>