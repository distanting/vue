<template>

<div class="fixed-right">
	<div class="scrollTop item" id="gotop"></div>
	<div class="cart item">
		<router-link to="/car"></router-link>
	</div>
</div>


</template>

<script>
export default {
 	name: 'fixedRight',
 	data() {
 		return {

 		}
 	},
 	mounted() {
 		// 检查滚动距离，控制按钮的显示或隐藏
 		// function b(){
	  //       h = $('.product-list').height();
	  //       console.log(h)
	  //       t = $(document).scrollTop();
	  //       if(t > h){
	  //           $('#gotop').show();
	  //       }else{
	  //           $('#gotop').hide();
	  //       }
	  //   }
	  //   b();

        // $('#gotop').click(function(){
        // 	//当点击箭头时，设置垂直滚动条的位置为0；返回顶部;
        //      $('body,html').animate({scrollTop:0},500);
        // });
 	}
}

</script>


<style scoped lang="less">
.fixed-right{
	position: fixed;
	z-index: 200;
	right: .1rem;
	bottom: .88rem;
	width: .4rem;
}
.fixed-right .item{
	width: .4rem;
	height: .4rem;
	background-repeat: no-repeat;
	background-size: 3.75rem auto;
	background-image: url(../../assets/a4.png);
	a{
		display: block;
		width: 100%;
		height: 100%;
	}
}
.scrollTop{
	background-position: -1.59rem -2.65rem;
	margin-bottom: .05rem;
	display: none;
}
.cart{
	background-position: -1.59rem -3.05rem;
}
</style>
