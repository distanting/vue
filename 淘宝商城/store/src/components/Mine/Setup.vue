<template>
	<div id="Setup">
		<header>
			<img src="../../assets/左箭头.png" @click="back()">
			<p>个人设置</p>
		</header>
		<div class="steupList">
			<ul>
				<li>个人资料<img src="../../assets/imgs/箭头-右 (1).png" style="width: .2rem;height: .2rem;"></li>
				<li>账户安全<img src="../../assets/imgs/箭头-右 (1).png" style="width: .2rem;height: .2rem;"></li>
				<li>关于我们<img src="../../assets/imgs/箭头-右 (1).png" style="width: .2rem;height: .2rem;"></li>
				<li>联系客服<img src="../../assets/imgs/箭头-右 (1).png" style="width: .2rem;height: .2rem;"></li>
			</ul>
		</div>
		<div class="kongbai">

		</div>
		<router-link to="mine">
		<div class="logout" @click="submit()">
			<p>退出当前账号</p>
		</div>
		</router-link>
	</div>
</template>

<script>
export default {
	data(){
		return {
                username:"",
            }
	},
 methods:{
 	back(){
 		window.history.back()
 	},
 	submit(){
 		this.$store.commit("Chuanzhi",this.username);
 	}
 }
}
</script>

<style scoped>
	*{
		margin: 0;
		padding: 0;

	}

	#Setup{
		background: #f0f0f0;
	}
	header{
		width: 100%;
		height: 0.43rem;
		background: white;
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
	.steupList{

		width: 100%;
		height: 1.8rem;
		background: white;
		margin-top: .15rem;
	}
	.steupList li{
		font-size: .15rem;
		line-height: .45rem;
		width: 97%;
		float: right;
		height: .45rem;
		border-bottom: 0.3px solid #e4e4e4;
	}
	.steupList li:last-child{
		border: none;
	}
	.steupList li img{
		float: right;
		margin-top: .12rem;
		margin-right: .1rem;
	}
	.logout{
		width: 100%;
		height: .5rem;
		background: #ff7c21;
			position: absolute;
			bottom: .5rem;
	}
	.logout p{
		font-size: .16rem;
		text-align: center;
		line-height: .5rem;
		color: white;


	}
	.kongbai{
		width: 100%;
		height: 4.3rem;
		background: #f0f0f0;
		z-index: 999;
	}
</style>