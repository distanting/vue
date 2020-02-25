<template>

<ul class="list">
	<li class="list-item recommend" @click="getCategory('')" :class="{'current':current === ''}">
		<i class="lyf-icons"></i>
		<p class="word">伊仔推荐</p>
	</li>
	<li class="list-item" v-for="(item, index) in list" @click="getCategory(item.categoryId)" :key="index" :class="{'current':current == item.categoryId}">
		<img :src="item.pictureUrl"></img>
		<p class="word" v-text="item.categoryName"></p>
	</li>
</ul>


</template>

<script>
export default {
 	name: 'list',
 	props: ['list'],
 	data() {
 		return {
 			current: sessionStorage.current ||''
 		}
 		
 	},
 	methods: {
 		getCategory(index) {
 			// 将点击的li的下标保存到本地,字符串格式
 			sessionStorage.current = index;
 			this.current = sessionStorage.current;
 			// 向右侧目录内容传值
 			bus.$emit('listCurrent',this.current);
 		}
 	},
 	created() {
 		bus.$emit('listCurrent',this.current);
 	}
}

</script>


<style scoped lang="less">

.list-item{
	width: 100%;
	padding: .08rem 0;
	text-align: center;
	font-size: .13rem;
	line-height: 1.5;
	border-bottom: 1px solid #e0e0e0;
	i{
		
		width: .15rem;
		height: .15rem;
		background-position:0 -4.25rem;
	}
	img{
		display: inline-block;
		vertical-align: middle;
		width: .15rem;
		height: .15rem;
	
	}
	p{
		text-align: center;
	}
}
.list-item.current{
	color: #ff6900;
	background-color:#fafafa;
	font-weight: 700;
	position: relative;
	:before{
		display:block;
		content:'';
		width: .02rem;
		position: absolute;
		top: 0;
	    bottom: 0;
	    left: 0;
	    background-color:#ff6900; 
	}
	:after{
		content: '';
	    display: block;
	    position: absolute;
	    top: 50%;
	    right: 0;
	    margin-top: -.03rem;
	    width: 0;
	    height: 0;
	    border-top: .06rem solid transparent;
	    border-bottom: .06rem solid transparent;
	    border-right: .06rem solid #f0f0f0;
	}
	.word{
		color: #ff6900;
	}
}
</style>
