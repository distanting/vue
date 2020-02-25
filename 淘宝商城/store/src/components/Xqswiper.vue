<template>
 <div id="swiper">
 	<div class="box">
	   <div class="swiper-container">
		  <div class="swiper-wrapper">
		    <div class="swiper-slide" v-for="item in getObj.pics">
		    	<img :src="item.url800x800">
		    </div>
		  </div>
		  <div class="swiper-pagination" ></div>
		</div>
		<div class="zh">
			<p class="p1">{{getObj.name}}</p>
			<p class="p2">{{getObj.subTitle}}</p>
			<p class="p3"><span>￥{{getObj.marketPrice||getObj.price}}</span><i v-if="getObj.marketPrice">￥{{getObj.price}}</i></p>
			<p class="p4"><span>已售：{{getObj.mpSalesVolume}}</span><i>库存：{{getObj.stockNum}}</i></p>
		</div>
		<div class="zj">
			<span v-if="getObj.promotionIconTexts">{{getObj.promotionIconTexts[0]}}</span><i v-if="getObj.promotionIconTexts">{{getObj.promotionIconTexts[1]}}</i>
		</div>
		<div class="yx">
			<span>已选</span><i>{{getObj.number||0}}个</i>
		</div>
		<div class="sz">
			<span class="s">送至</span><i></i><span>北京 昌平</span>
		</div>
	</div>
	<div class="car">
		<span><i class="i1"></i>在线客服</span>
		<span><i class="i2"></i>爱吃</span>
		<span @click="show()"><router-link to="/car"><i class="i3"></i >购物车 <b class="b1" v-if="getCarNumber">{{getCarNumber}}</b></router-link></span>
		<span class="jr" @click="pushCar(getObj)">加入购物车</span>
	</div>
	
 </div>
  
</template>

<script>
export default {
 	name:"Xqwiper",
 	data(){
 		return{

 		}
 	},
 	// props:['xq_arr'],
 	methods:{
 		ha(){
 			console.log(this.getObj);
 		},
 		pushCar(item){
 			this.$store.commit('setCarNumber');//购物车红点
 			//购物车数组
 			
 			item.number||this.$set(item,"number",1);
 			item.flag||this.$set(item,"flag",true);			
 			this.$store.commit('setCarArr',item);		
 			this.$store.commit('myArr',item);
 			this.$store.commit('setCarNumber');
 			console.log(item)
 		},
 		show(){
 			document.body.scrollTop = "0px";
 			this.$store.commit("FFALG");

 			
 		}
 	},
 	mounted(){
 		
 	},
 	computed:{
 		getObj(){
 			return this.$store.state.myObj;
 		},
 		getCarNumber(){
            return this.$store.state.carNumber;
        }
 	},
 	updated(){
 		var mySwiper = new Swiper('.swiper-container', {
		    autoplay: 1000,
		    loop: true,
    		// 如果需要分页器
			pagination: '.swiper-pagination',
			paginationClickable:true,
			longSwipesRatio:
			 0.3,
			touchRatio:1,
			observer:true,//修改swiper自己或子元素时，自动初始化swiper
			observeParents:true,
			autoplayDisableOnInteraction : false,
		})
 	}
 	

}
</script>


<style scoped lang="less">
#swiper{
	width: 100%;
	position: relative;	
	// overflow: hidden;

	.box{
		position: absolute;
		left: 0;
		top:.44rem;
		width: 100%;
		background-color: #eee;
		.swiper-container{
			height: 3.64rem;
			img{
				width: 100%;
				height: 100%;
			}
		}
		overflow: hidden;
	}

	.zh{
		width: 100%;
		height: 1.33rem;
		padding: .1rem;
		margin: 0 0 .1rem 0;
		border-top: 1px solid #eee;
		background-color: #fff;
		p{
			// height: .30rem;
			// line-height: .30rem;
			margin: 0 0 0 .1rem;
		}
		.p1{
			font-size: .17rem;
			// margin: 0 0.1rem .1rem 0;
			
		}
		.p2{
			color:#f44;
			font-size: .14rem;
			margin: 0.04rem 0 0.06rem 0.1rem;
		}
		.p3{
			span{
				font-size: .2rem;
				color: #f44;
				font-weight: 800;
				margin: 0 .1rem 0 -0.04rem;
			}
			i{
				text-decoration: line-through;
				font-style: normal;
			}

		}
		.p4{
			margin: 0.03rem 0 0 .1rem;
			color: #666;
			font-size: .14rem;
			span{
				margin: 0 1rem 0 0;
			}
			i{
				font-style: normal;
			}
		}
	}
	.zj{
		width: 100%;
		background-color: #fff;
		font-size: .14rem;
		height: .48rem;
		line-height: .48rem;
		margin: 0 0 10px 0;
		span{
			// display: inline-block;
			// padding: .01rem;
			border-radius: .03rem;
			color: #fff;
			width: .3rem;
			height: .18rem;
			background-color: #fe2b2b;
			margin: 0 .2rem 0 .2rem;
		}
		i{
			color: #666;
		}
	}
	.yx{
		width: 100%;
		background-color: #fff;
		font-size: .14rem;
		height: .48rem;
		line-height: .48rem;
		margin: 0 0 10px 0;	
		span{
			margin: 0 .3rem 0 .2rem;
		}	
	}
	.sz{
		width: 100%;
		background-color: #fff;
		font-size: .14rem;
		height: .48rem;
		line-height: .48rem;
		margin: 0 0 .6rem 0;
		.s{
			margin: 0 .2rem 0 .2rem;
			color: #ff6900;
		}	
		// padding: 0 0 .5rem 0;
	}
	.car{
		width: 100%;
		height: .5rem;
		background-color: #fff;
		position: fixed;bottom: 0;left: 0;
		display: flex;
		a{
			display: inline-block;
		}
		span{
			display: block;
			margin: auto;
			width: 20%;
			height: 100%;
			text-align: center;
			line-height: .74rem;
			position: relative;

			i{
				display: inline-block;
				background-color: #333;
				width: .22rem;
				height: .22rem;
				position: absolute;
			    left: .29rem;
			    top: .05rem;

			}
			.i1{
				background:url(../assets/a3.png) no-repeat -1.1rem -2.53rem;
				background-size: 3.75rem;
			}
			.i2{
				background:url(../assets/a3.png) no-repeat -.4rem -2.53rem;
				background-size: 3.75rem;
			}
			.i3{
				background:url(../assets/a3.png) no-repeat -.71rem -2.53rem;
				background-size: 3.75rem;
			}
		}
		.jr{
			width: 40%;
			line-height: .5rem;
			background-color: #f60;
			color: #fff;
			font-size: .16rem;
			
		}
	}
}
.b1{
	position: absolute;
    top: 0;
    font-weight: 100;
    color: #fff;
    display: inline-block;
    background-color: red;
    width: .18rem;
    height: .18rem;
    border-radius: 50%;
    line-height: .18rem;
    left: .52rem;
}
</style>