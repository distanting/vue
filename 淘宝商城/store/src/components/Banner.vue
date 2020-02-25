<template>
 <div id="banner">
   <div class="img_list">
   		<div><img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1498025755978_5115_38.jpg@base@tag=imgScale&q=80"></div>
   		<div><img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1498185565098_4667_32.jpg@base@tag=imgScale&q=80"></div>
   		<div><img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1498025633850_3209_33.jpg@base@tag=imgScale&q=80"></div>
   		<div><img src="http://cdn.oudianyun.com/lyf/prod/back-cms/1498025631162_7831_36.jpg@base@tag=imgScale&q=80"></div>

   </div>
 </div>
  
</template>

<script>
export default {
 	name:"Banner"
}
</script>


<style scoped lang="less">
.img_list{
	width: 100%;
	height: 2.42rem;
	overflow: hidden;
	div{
		width: 50%;
		height: 50%;
		border-bottom:1px solid #eee;
		border-right:1px solid #eee; 
		float: left;
		overflow: hidden;
		img{
			width: 100%;
			display: block;
		}
	}
}
</style>