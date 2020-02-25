<template>
 <div id="location">
   <div class="dw"><span class="sp1" @click="fan_hiu()"></span><span class="sp2">定位</span></div>
 </div>
  
</template>

<script>
export default {
 	methods:{
 		fan_hiu(){
 			this.$store.commit("FFALG")
 		}
 	}
}
</script>


<style scoped lang="less">
#location{
	width: 100%;
	// height: 200%;
	overflow: hidden;
	background:#fff;
	position: absolute;
	overflow: scroll;
	left: 0;
	top:0;
	z-index: 20;
	
	.dw{
		font-size: .2rem;
		width: 100%;
		height: .44rem;
		position: fixed;
		left: 0;
		top: 0;
		line-height: .44rem;
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
			display: inline-block;
			width: 100%;
			text-align: center;
		}
	}

}
</style>