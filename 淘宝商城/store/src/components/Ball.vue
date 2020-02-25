<template>
	 <div id="ball">
		   	<figure v-for="item in list">
		   		<img :src="item.imageUrl">
		   		<figcaption>{{item.name}}</figcaption>
		   	</figure>
		   	
	 </div>
  
</template>

<script>
export default {
 	props:['list']
}
</script>


<style scoped lang="less">
#ball{
	display: flex;
	width: 100%;
	height: 1.57rem;
	flex-wrap:  wrap ;
	border: 1px solid #eee;
	// border-radius: 0.1rem;
	padding: 0.05rem 0 0 0;
	figure{
		color:#999;
		width: 20%;
		height: 50%;
		margin: auto;
		text-align: center;
		img{
			width: 50%;
			margin: 0 0 0.05rem 0;
		}
	}
}
</style>