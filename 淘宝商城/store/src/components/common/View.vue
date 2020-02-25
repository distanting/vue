<template>

<div class="view mod-pageview hasHeader">
	<view-header :alldata="alldata"></view-header>
	<div class="main">
		<nav-layer></nav-layer>
		<view-filter :alldata="alldata"></view-filter>
		<product-list :productList="alldata.productList"></product-list>
	</div>
	<fixed-right></fixed-right>
</div>

</template>

<script>

import Vue from 'vue'
// let bus = new Vue();
import vc from './view.js'
import ViewFilter from './ViewFilter'
import ViewHeader from './ViewHeader'
import ProductList from './ProductList'
import NavLayer from './NavLayer'
import FixedRight from './fixedRight'
export default {
 	name: 'footer1',
 	data() {
 		return {
 			alldata: {},


 			/*controller: {
 				clicked: false,

 			}*/
 		}
 	},
 	components: {
 		ViewHeader, ViewFilter, ProductList, NavLayer, FixedRight
 	},
 	created() {
 		this.axios.get('../../static/view/jianguo_chaohuo.json').then(data => {
 			this.alldata = data.data.data;
 			// this.productList = this.alldata.productList;
 		})
 	}
}


</script>


<style scoped lang="less">
.view{
	.main{
		z-index: 100;
		background-color: #f0f0f0;
	}
	
    
}

</style>
