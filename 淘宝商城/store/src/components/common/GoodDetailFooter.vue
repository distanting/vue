<template>

<div class="good-detail-footer">
	<ul class="clearfix">
		<li class="cart-btns fl">
			<label class="fl tc cart-btns-item">
				<i class="lyf-kefu lyf-icons"></i>
				<p>在线客服</p>
			</label>
			<label class="fl tc cart-btns-item">
				<i class="lyf-collect lyf-icons"></i>
				<p>爱吃</p>
			</label>
			<label class="fl tc cart-btns-item">
				<i class="lyf-cart lyf-icons"></i>
				<p>购物车</p>
			</label>
		</li>
		<li class="add-cart-btn fl tc">加入购物车</li>
	</ul>
</div>


</template>

<script>
export default {
 	name: 'GoodDetailFooter',
 	data() {
 		return {

 		}
 	},
 	created() {

 	}
}
</script>

<style >
.good-detail-footer{
	background-color:#fff;
	position: fixed;
	z-index:100;
	bottom: 0;
	left: 0;
	right: 0;
	height: .49rem;
}
</style>
<style scoped lang="less">
.good-detail-footer{

	.cart-btns{
		width: 60%;
		.cart-btns-item{
			width: 33.3%;
			margin: .04rem 0;
			border-right: 1px solid #e0e0e0;

		}
		p{
			line-height: .12rem;	
		}
		.cart-btns-item:last-child{
			border-right: 0;
		}
	}
	.add-cart-btn{
		width: 40%;
		font-size: .18rem;
		line-height: .49rem;
		color: #fff;
		background-color: #ff6900;
	}
	.lyf-icons{
		margin: .03rem 0 .03rem 0;
	}
	.lyf-kefu{
		width: .20rem;
		height: .21rem;
		background-position: -1.1rem -2.52rem;
	}
	.lyf-collect{
		width: .2rem;
		height: .2rem;
		background-position: -.40rem -2.53rem;
	}
	.lyf-cart{
		width: .22rem;
		height: .19rem;
		background-position: -.72rem -2.52rem;
	}
}
.good-detail-footer:before{
		content: '';
		display: block;
		width: 100%;
		height: 1px;
		background-color:#e0e0e0;
		position: absolute;
		top: 0;

	}
</style>
