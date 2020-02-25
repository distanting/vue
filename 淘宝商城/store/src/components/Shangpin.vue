<template>
 <div id="shangpin">
   <div class="kan" >
   		<img v-for="item in  getStr"  :src="item.slice(0,-1)">
   </div>
 </div>
  
</template>

<script>
export default {
 	computed:{
 		getStr(){
 			return this.$store.state.strImg;
 		}
 	},
 	update(){
 	
 	}
}
</script>


<style scoped lang="less">
#shangpin{
	width: 100%;
	// overflow: hidden;
	position: relative;
	.kan{
		width: 100%;
		position: absolute;
		left: 0;
		top: .44rem;
		img{
			width: 100%;
		}
	}
}
img{
	width: 100%;
}
</style>