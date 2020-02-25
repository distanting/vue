<template>

<div class="recommend list-content">
		<div class="swiper-container">
			<div class="swiper-wrap">
				<div class="slider" v-for="img in categorys.img_sort_spread">
					<router-link :to="'/view/'" >
						<img :src="img.imageUrl">
					</router-link>
				</div>
			</div>
		</div>
		<div class="hot_product category">
			<div class="category-title" v-for="item in categorys.title_hot_product">
				<div v-text="item.name"></div>
			</div>
			<ul class="clearfix">
				<li class="fl item" v-for="child in categorys.hot_product">
					<div class="item-inner">
						<router-link :to="'/goodDetail/'+child.refId" >
							<div class="preload"><img :src="child.imageUrl"></div>
							<p class="ellipse" v-text="child.name"></p>
						</router-link>
					</div>
				</li>
			</ul>
		</div>
		<div class="common_product category">
			<div class="category-title" v-for="item in categorys.title_common_product">
				<div v-text="item.name"></div>
			</div>
			<ul class="clearfix">
				<li class="fl item" v-for="child in categorys.common_product">
					<div class="item-inner">
						<router-link :to="'/goodDetail/'+child.refId" >
							<div class="preload"><img :src="child.imageUrl"></div>
							<p class="ellipse" v-text="child.name"></p>
						</router-link>
					</div>
				</li>
			</ul>
		</div>
</div>


</template>

<script>
export default {
 	name: 'Recommend',
 	props: ['categoryId'],
 	data() {
 		return {
 			url: "../../static/market/list.json",
 			categorys: [],
 		}
 	},
 	created() {
 		this.axios.get(this.url).then(data=>{         
            this.categorys = data.data.data;
        })
 	},
 	
}
</script>


<style scoped lang="less">

</style>
