<template>

<div class="product-list scroller">
	<ul class="product-container clearfix">
		<li class="product-item-wraper fl" v-for="item in filter(productList,filterConfig)">
			<router-link :to="'/goodDetail/'+item.productId" class="product-item">
				<div class="preload">
					<img :src="item.picUrl" class="pimage">
				</div>
				<p class="pname">{{ item.name }}</p>
				<div class="promotionInfo">
					<span v-if="item.promotionInfo" class="promote">{{item.promotionInfo[0].promotions[0].iconText}}</span>
				</div>
				<div>
					<span class="current-price theme-color">￥{{ item.availablePrice }}</span>
					<span class="market-price gray-font text-dec-through">{{ item.price }}</span>
				</div>
				<div class="gray-font">
					<span class="theme-color">{{ item.commentInfo.commentNum }}</span>条评论 好评<span class="theme-color">{{ item.commentInfo.goodRate }}%</span>
				</div>
				<i class="lyf-icons cart-icon"></i>
			</router-link>
		</li>
	</ul>
</div>


</template>

<script>
export default {
 	name: 'ProductList',
 	props: ['alldata','productList'],
 	data() {
 		return {
 			// 过滤条件
 			filterConfig: {
 				filter: 1,
 				sortType: 10,
 				price:{
 					Lprice: 0,
 					Hprice: 0
 				}
 			},
 		}
 	},
 	methods: {
 		filter(arr,filterConfig) {
 			// console.log(filterConfig.price.Lprice,filterConfig.price.Hprice,filterConfig.sortType);
 			if (filterConfig.filter == 1) {
 				arr = [...arr];
 				// 筛选价格
 				if(!(filterConfig.price.Lprice == 0 && filterConfig.price.Hprice == 0)){
 					arr = arr.filter(function (item) {
				      return (item.availablePrice >= filterConfig.price.Lprice && item.availablePrice <= filterConfig.price.Hprice);
				    })
 				}
 				// 排序
				if(filterConfig.sortType == 10){
	 				return arr;
	 			}else if(filterConfig.sortType == 12){
	 				return arr.sort(function (a,b) {
				      return b.nowDate-a.nowDate;
				    })
	 			}else if(filterConfig.sortType == 13){
	 				return arr.sort(function (a,b) {
				      return a.availablePrice-b.availablePrice;
				    })
	 			}else if(filterConfig.sortType == 14){
	 				return arr.sort(function (a,b) {
				      return b.availablePrice-a.availablePrice;
				    })
	 			}else if(filterConfig.sortType == 16){
	 				return arr.sort(function (a,b) {
				      return b.commentInfo.goodRate-a.commentInfo.goodRate;
				    })
	 			}else if(filterConfig.sortType == 'volume4sale'){
	 				return arr.sort(function (a,b) {
				      return b.volume4sale-a.volume4sale;
				    })
	 			}
 			}
 		}
 	},
 	created() {
 		bus.$on("sortType",value => {
 			this.filterConfig.sortType = value;
 			// console.log(this.filterConfig.sortType)
 		});
 		bus.$on("sortSale", value => {
 			this.filterConfig.sortType = value;
 			// console.log(this.filterConfig.sortType)
 		});
 		bus.$on("price", value => {
 			this.filterConfig.price.Lprice = value[0];
 			this.filterConfig.price.Hprice = value[1];
 			// console.log(this.filterConfig.price.Hprice)
 		});
 	}
}
</script>


<style scoped lang="less">
.product-list{
	position: absolute;
	top: .44rem;
	left: 0;
	right: 0;
	bottom: 0;
	padding: .12rem .11rem 0; 
}
.product-container{
	
	
}
.product-item-wraper{
	width: 50%;
	box-sizing: border-box;
	padding: 0 .04rem 0 .15rem;
	margin-bottom: .09rem;
	
	a{
		display: block;
		background-color: #fff;
		padding: .06rem;
		position: relative;
	}
	.preload{
		width: 100%;
		padding-bottom: 100%;
		margin-bottom: .09rem;
		position: relative;
		background-repeat: no-repeat;
		background-image: url(../../assets/a4.png);
		background-size: 4.95rem auto;
		background-position: -1.05rem -1.76rem;
	}
	.pimage{
		position: absolute;
		width: 100%;
	}
	.pname{
		line-height: .18rem;
		height: .21rem;
		font-size: .14rem;
	}
	.promotionInfo{
		height: .21rem;
	}
	.current-price{
		font-size: .2rem;
		line-height: 1.5;
		font-weight: 700;
	}
	.market-price{
		font-size: .12rem;
		line-height: 1.5;
	}
	.cart-icon{
		width: .23rem;
	    height: .23rem;
	    background-size: 3.35rem auto;
	    background-position: -1.58rem -2.22rem; 
	    position: absolute;
	    bottom: .03rem;
	    right: .1rem;
	}
}
.product-item-wraper:nth-child(2n){
	padding:  0 .15rem 0 .04rem;
}
</style>
