<template>

<div class="nav-layer" v-show="vc.clicked">
    <router-link to="/first" class="nav tc"><i class="icons home"></i>首页</router-link>
    <div class="spline"></div>
    <router-link to="/mine" class="nav tc"><i class="icons mine"></i>我</router-link>
</div>

</template>

<script>
import vc from './view.js'
export default {
 	name: 'NavLayer',
 	data() {
 		return {
 			vc: vc.getVc()
 		}
 	}
}
</script>


<style scoped lang="less">
.nav-layer:before{
	display: block;
	content: '';
	height: 0;
	position: absolute;
	bottom: 100%;
	right: .2rem;
	border: .05rem solid transparent;
	border-bottom-color: rgba(80, 80, 80, 0.9);
}
.nav-layer{
    // display: none;
    border-radius: .07rem;
    background-color: rgba(80, 80, 80, 0.9);
    line-height: .4rem;
    position: absolute;
    z-index: 150;
    top: 0;
    right: .05rem;
    a{
       display: block; 
       padding: 0 .2rem 0 .4rem;
    	color: #fff;
    	position: relative;
    }
	.spline{
		height: 1px;
		background-color: #e0e0e0;
	}
    .icons{
    	position: absolute;
    	z-index: 200;
    	left: .2rem;
    	top: .11rem;
    	width: .16rem;
    	height: .16rem;
    	margin-right: .05rem;
       
    }
    .home{
    	background-position: -2.13rem -1.42rem;
    }
    .mine{
    	background-position: -2.48rem -1.13rem;
    }
}
</style>
