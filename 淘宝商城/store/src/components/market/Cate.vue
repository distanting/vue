<template>

<div class="categorys list-content">
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
</div>


</template>

<script>
export default {
 	name: 'Category',
 	props: ['categoryId'],
 	data() {
 		return {
 			url: "",
 			categorys: [],
 		}
 	},
 	
 	created() {
 		
 		this.url = "../../static/market/list-categoryId="+this.categoryId+".json";
 		this.axios.get(this.url).then(data=>{         
            this.categorys = data.data.data.categorys;
            // console.log(this.categorys);
        })
 	},
 	watch: {
 		'$route'(to,from){
 			this.categoryId = this.$route.params.categoryId;
 		},
 		categoryId (newValue, oldValue) {
			
			this.url = "../../static/market/list-categoryId="+newValue+".json";
			this.axios.get(this.url).then(data=>{         
        		this.categorys = data.data.data.categorys;
        		
        	})
			
		},
 		
 	}
}
</script>


<style scoped lang="less">

</style>
