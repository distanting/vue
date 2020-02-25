<template>

<div id="market" class="market mod-pageview hasHeader hasFooter">
	<ui-header></ui-header>
	<div class="main">
		<div class="menu scroller">
			<list :list="list"></list>
		</div>
		
		<div class="posR scroller">
			<recommend v-if="categoryId===''" :categoryId="categoryId"></recommend>
			<cate v-else="categoryId===''" :categoryId="categoryId"></cate>
		</div>
	</div>
</div>

</template>

<script>
import uiHeader from '../common/header'
import List from './list'
import Recommend from './Recommend'
import Cate from './Cate'
export default {
 	components: {
 		uiHeader,List, Recommend, Cate
 	},
	data() {
		return {
			list: [],
			categoryId: ''
		}
		
	},
 	created() {
 		this.axios.get("../../static/market/categorys.json").then(data=>{         
            this.list = data.data.data.categorys;
        })
   		bus.$on('listCurrent',val => {
 			this.categoryId = val;
 		});
 	}
}
</script>


<style  lang="less">
.market{
	.main{
		background-color:#f0f0f0;
		a{
			display: block;
		}
	}
	.menu{
		position: absolute;
		top: 0;
	    bottom: 0;
	    left: 0;
	    width: .9rem;
	    background-color:#fff;
	}

	.posR{
		position: absolute;
		top: 0;
	    bottom: 0;
	    left: .9rem;
	    right: 0;
	}
	.list-content{
	padding: .2rem .15rem 0 0 ;
	.swiper-container{
		padding-left: .1rem;
		margin-bottom: .2rem;
		height: .7rem;
		img{
			width: 100%;
		}
	}
	.category-title{
		font-weight: 700;
		padding: .08rem .1rem;
		background-color: #f0f0f0;
		position: absolute;
		top: -.18rem;
	}
	.category{
		position: relative;
		border-top: 1px solid #ddd;
		padding: .2rem 0 .1rem 0;
	}
	.item{
		width:33.33%;
	}
	.item-inner{
		background-color:#fff;
		margin: 0 0 .1rem .1rem;
		padding: .08rem;
		text-align: center;
		img{
			width:100%;
			position: absolute;
			left: 0;
			top: 0;
			
		}
	}
	.preload{
		padding-bottom: 100%;
		position: relative;
		background-image: url(../../assets/a3.png);
		background-position: 0 -5.3rem;
	    background-repeat: no-repeat;
	    background-size: 3.75rem auto;
	}
}
}

</style>
