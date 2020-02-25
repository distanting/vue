<template>
<div class="good-detail mod-pageview hasHeader hasFooter">
	<good-detail-header></good-detail-header>
	<div class="main">
		<product></product>
		<detail></detail>
		<ratings></ratings>
	</div>
	<good-detail-footer></good-detail-footer>
</div>


</template>

<script>
import Product from './product'
import Detail from './detail'
import Ratings from './ratings'
import GoodDetailHeader from './GoodDetailHeader'
import GoodDetailFooter from './GoodDetailFooter'
export default {
 	name: 'GoodDetail',
 	data() {
 		return {

 		}
 	},
 	components: {
 		GoodDetailHeader,Product,Detail,Ratings,GoodDetailFooter
 	}
}
</script>


<style scoped lang="less">
.good-detail{
	.main{
		top: 45px;
	}
} 
</style>
