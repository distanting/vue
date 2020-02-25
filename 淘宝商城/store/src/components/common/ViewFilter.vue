<template>

<div class="filter">
	<div class="filter-title-wraper">
		<ul class="filter-title clearfix">
			<li class="sort-title filter-title-item fl tc" :class="{'theme-color':ftIndex==0}"  @click="sortByType()">{{alldata.sortByList[sortIndex].sortTypeShort}}
				<i class="icons" :class="{'down':arrow=='down','up':arrow=='up'}"></i>
			</li>
			<li class="sold-count filter-title-item fl tc" :class="{'theme-color':ftIndex==1}" @click="sortBySale()">销量优先</li>
			<li class="sub-title filter-title-item fl tc"  @click="filter()">筛选
				<i class="icons"></i>
			</li>
			<li class="view-model fl"><i class="icons"></i></li>
		</ul>
		
	</div>
	<div class="sort-wraper" v-show="sortClicked">
		<ul class="sort">
			<li class="sort-item" :class="{'selected':sortIndex==index}" v-for="(item, index) in alldata.sortByList" :key="index" @click="sort(index)">{{item.sortTypeDesc}}</li>
		</ul>
	</div>
	<div class="price-range" v-show="filterClicked">
		<form class="price-form" onsubmit="return false">
			<div class="title">价格区间</div>
			<div class="wraper">
				<div class="inputs tc">
					<input type="text" class="lower-price" name="lower-price" placeholder="最低价" v-model='Lprice'>
					-
					<input type="text" class="higher-price" name="higher-price" placeholder="最高价" v-model='Hprice'>
				</div>
			</div>
			<div class="btns tc">
				<input class="reset btn fl" type="reset" name="reset" value="重置">
				<input class="submit btn fr theme-bg-color" type="submit" name="submit" value="确定" @click="filterPrice()">
			</div>
		</form>
	</div>
</div>


</template>

<script>
export default {
 	name: 'ViewFilter',
 	props: ['alldata'],
 	data() {
 		return {
 			// filter-title的下标
 			ftIndex: 0,
 			// 综合排序条目的下标
 			sortIndex: 0,
 			// 综合被点击
 			sortClicked: false,
 			// 筛选被点击
 			filterClicked: false,
 			// 价格区间
 			Lprice: 0,
 			Hprice: 0 ,
 			arrow: 'down'
 		}
 	},
 	methods: {
 		// 点击综合排序
 		sortByType() {
 			this.sortClicked = !this.sortClicked;
 			this.filterClicked = false;
 			this.ftIndex = 0;
 			// console.log('sortByType')
 		},
 		// 点击销量优先
 		sortBySale() {
 			this.filterClicked = false;
 			this.sortClicked = false;
 			this.ftIndex = 1;
 			this.sortIndex = 0;
 			bus.$emit("sortSale", 'volume4sale');
 			// console.log('sortBySale')
 		},
 		// 点击筛选
 		filter() {
 			this.filterClicked = !this.filterClicked;
 			this.sortClicked = false;
 			// console.log('filter')
 		},
 		// 点击确定
 		filterPrice() {
 			bus.$emit("price", [this.Lprice, this.Hprice]);
 			this.filterClicked = false;
 			// console.log([this.Lprice, this.Hprice])
 		},
 		// 点击排序项
 		sort(index) {
 			this.sortIndex = index;
 			var sortType = this.alldata.sortByList[index].sortTypeCode;
 			bus.$emit("sortType",this.alldata.sortByList[index].sortTypeCode);
 			this.sortClicked = false;
 			if(sortType == 13){
 				this.arrow = 'up';
 			}else{
 				this.arrow = 'down';
 			}
 			// console.log('sort')
 		}
 	}
}
</script>


<style scoped lang="less">
.filter{
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: .44rem;
	background-color: #fff;
	.filter-title-wraper{
		padding: .07rem 0;

	}
	.filter-title-item{
		width: 28%;
		line-height: .3rem;
		.icons{
			display: inline-block;
			margin-left: .05rem;
			vertical-align: middle;
		}
	}
	.sort-title .icons{
		width: .12rem;
		height: .07rem;
	}
	.sort-title .icons.down{
		background-position: 0 0;
	}
	.sort-title .icons.up{
		background-position: -.36rem 0;
	}
	.sub-title .icons{
		width: .18rem;
	    height: .18rem;
	    background-position: -2.48rem -1.40rem;
	}
	.view-model{
		width: 10%;
		height: .3rem;
		
		.icons{
			width: .18rem;
			height: .18rem;
			background-position: -.36rem -1.13rem;
			margin-left: .05rem;
		}
	}
	.view-model:before{
		content: '';
		display: inline-block;
		vertical-align: middle;
		width: 1px;
		height: 100%;
		background-color: #eee;
	}
	.sort-wraper{
		// display: none;
		position: absolute;
		z-index: 100;
		top: 100%;
		left: 0;
		right: 0;
		background-color: rgba(0, 0, 0, 0.9);
	}
	.sort{
		background-color: #fff;
	}
	.sort-item{
		padding: 0 .1rem;
		line-height: .34rem;
		font-size: .13rem;
		color: #666;
	}
	.sort-item.selected:after{
		content: '';
		display: inline-block;
		float: right;
		margin-top: .1rem;
		width: .16rem;
		height: .16rem;
		background-repeat: no-repeat;
    	background-size: 3.75rem auto;
    	background-position: -1.8rem -2.8rem;
		background-image: url(../../assets/a3.png);
	}
	.price-range{
		// display: none;
		position: absolute;
		z-index: 100;
		top: 100%;
		left: 0;
		right: 0;
		background-color:#fff;
		.title{
			margin-left: .1rem;
			padding: .1rem .1rem .1rem 0;
		}
		.wraper{
			margin-left: .1rem;
		}
		.inputs{
			// position: absolute;
			// left: 0;
			// top: 0;
			width: 1.8rem;
			padding: .1rem;
			// position: relative;
		}
		.lower-price, .higher-price{
			// position: absolute;
			// top: 0;
			border-radius: .02rem;
			width: .71rem;
			height: .35rem;
			line-height: .35rem;
			background-color: #ddd;
			text-align: center;
		}
		.lower-price{
			left: 0;
		}
		.higher-price{
			right: 0;
		}
		.btns{
			padding-top: .1rem;
		}
		.btn{
			width: 50%;
			height: .55rem;
			font-size: .2rem;
		}
		.reset{
			background-color: #fff;
			color: #666;
			box-sizing: border-box;
			border-top: 1px solid #e0e0e0;
		}
		.submit{
			color: #fff;
		}
	}
}
</style>

