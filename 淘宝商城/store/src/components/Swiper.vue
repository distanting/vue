<template>
 <div id="swiper">
   <div class="swiper-container">
	  <div class="swiper-wrapper">
	    <div class="swiper-slide" v-for="item in arr"><img :src="item.imageUrl" :alt="item.name"></div>
	  </div>
	</div>
 </div>
  
</template>

<script>
export default {
 	name:"Swiper",
 	data(){
 		return{

 		}
 	},
 	props:['arr'],
 	mounted(){
 		var mySwiper = new Swiper('.swiper-container', {
		    autoplay: 1000,
			pagination: '.swiper-pagination',
			paginationClickable:true,
			longSwipesRatio:
			 0.3,
			touchRatio:1,
			observer:true,//修改swiper自己或子元素时，自动初始化swiper
			observeParents:true,
		}) 
 	},
 	method:{
 		
 			
 	},
 	created(){	
 	},
 	computed:{
 		/*arr(){
 			return this.arr = this.arr;
 		}*/
 	}

}
</script>


<style scoped lang="less">
#swiper{
	width: 100%;
	// position: absolute;
	// left: 0;
	// top:.44rem;
	height: 1.66rem;
	overflow: hidden;
	div{
		width: 100%;
		height: 100%;
	}
	img{
		width: 100%;
	}
}
</style>