<template>
 <div id="come">

 	<div class="dw"><span class="sp1" @click="fan_hiu()"></span><span :class="{'sp2':f,'sp3':!f}" @click="f1()">商品</span><span :class="{'sp2':!f,'sp3':f}" @click="f2()">详情</span></div>
 	<xqswiper v-show="f"></xqswiper>
 	<shangpin v-show="!f"></shangpin>
 </div>
  
</template>

<script>
import Xqswiper from './Xqswiper'
import Shangpin from './Shangpin'
export default {
	data(){
		return{
			id:"",
			f:true
		}
	},
	components:{
		Xqswiper,
		Shangpin
	},
 	methods:{
 		fan_hiu(){
 			this.$store.commit("FFALG");
 			this.f=true;
 			// this.$store.state('FFALG')
 		},
 		shangpin(){

 		},
 		f1(){
 			this.f=true;
 		},
 		f2(){
 			document.body.scrollTop = "0px";
 			this.f=false;
 			
 			
 		}
 	},
 	created(){
 		// console.log(this.getId)
 	},
 	computed:{
 		getId(){

 			return this.$store.state.myObj;
 		},
 	
 	}
}
</script>


<style scoped lang="less">
#come{
	width: 100%;
	/*// height: 200%;*/
	// overflow: hidden;
	background:#fff;
	position: absolute;
	// overflow: scroll;
	left: 0;
	top:0;
	
	
	.dw{
		text-align: center;
		font-size: .2rem;
		width: 100%;
		height: .44rem;
		position: fixed;
		left: 0;
		top: 0;
		line-height: .44rem;
		border-bottom:  1px solid #eee;
		z-index: 25;
		background: #fff;
		.sp1{
			display: inline-block;
			width: .25rem;
			height: .25rem;
			position: absolute;
			left: 0.02rem;
			top: .08rem;
			background:url(../assets/左箭头.png) no-repeat 1px 1px;
			background-size: .25rem;
		}
		.sp2{
			margin: 0 .4rem 0 0;
			display: inline-block;
			color: #ff6900;
			height: 100%;
			border-bottom: 2px solid #ff6900;
		}
		.sp3{
			height: 100%;
			margin: 0 .4rem 0 0;
			display: inline-block;
		}
	}

}
</style>