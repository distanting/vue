<template>
<div>
	<recommend v-if="categoryId===''"></recommend>
	<cate v-else="categoryId===''" :categoryId="categoryId"></cate>
</div>
<!-- <div class="categorys list-content">
	<div class="category" v-for="category in categorys">
		<div class="category-title" v-text="category.categoryName"></div>
		<ul class="clearfix">
			<li class="fl item" v-for="child in category.children">
				<div class="item-inner">
					<router-link to="/view" >
						<div class="preload"><img :src="child.pictureUrl"></div>
						<p class="ellipse" v-text="child.categoryName"></p>
					</router-link>
				</div>
			</li>
		</ul>
	</div>
</div> -->


</template>

<script>
import Recommend from './Recommend'
import Cate from './Cate'
export default {
 	name: 'Category',
 	components: {
 		Recommend, Cate
 	},
 	// data() {
 	// 	return {
 			
 			
 	// 		categorys: [],
 	// 	}
 	// },
 	computed: {
 		categoryId(){
 			return this.$route.params.categoryId;
 		}, 
 		// url() {
 		// 	return "../../static/market/list-categoryId="+this.categoryId+".json";
 		// }
 	},
 	created() {
 		console.log(this.categoryId)
 	// 	this.axios.get(this.url).then(data=>{         
  //           this.categorys = data.data.data.categorys;
  //           // console.log(this.categorys);
  //       })
 	// },
 	// watch: {
 	// 	'$route'(to,from){
 	// 		this.axios.get(this.url).then(data=>{         
	 //    		this.categorys = data.data.data.categorys;
	    		
	 //    	})
 		},
 		
 		
 	// }
}
</script>


<style scoped lang="less">

</style>
