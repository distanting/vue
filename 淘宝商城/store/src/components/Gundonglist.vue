<template>
 <div id="gundong">
   <div class="list">
   	<div class="l1">
   		<img src="http://m.static.laiyifen.com/images/hotnews.png?v=1498042871535">
   	</div>
   	<div class="l2">
	   	<div id="dong">
	   		<ul id="ul">
		   		<li class="ellipse" v-for="item in arrObj" id="li"><i></i><span>{{item.displayTitle}}</span></li>

	   		</ul>
	   		<ul>
		   		<li class="ellipse" v-for="item in arrObj"><i></i><span>{{item.displayTitle}}</span></li>

	   		</ul>
	   	</div>
   		
   		
   	</div>
   </div>
 </div>
  
</template>

<script>
export default {
 	name:"Gundonglist",
 	data(){
 		return{
 			arrObj:[]
 		}
 	},
 	created(){
 		this.axios.get("../static/gundonglist.json").then(data=>{
 			
 			this.arrObj = data.data.data.pageResult.listObj;
 			// console.log(this.arrObj)
 		},err=>{
 			console.log(err);
 		})
 	},
 	mounted(){
 		
 	},
 	methods:{

 	},
 	updated(){
 		var div = document.getElementById('dong');
 		var ulHeight = document.getElementById('ul').offsetHeight;
 		var liHeight = document.getElementById('li').offsetHeight*2;
 		var i = 0;
 		var timer = setInterval(f3,50);
 		function f3(){
 			i--;
 			div.style.top = i+"px";	
 			if(i<=-ulHeight){
 				i=0;
 			}
 			// clearInterval(timer);
 		}
 	},

}
</script>


<style scoped lang="less">
.list{
	width: 100%;
	height: 0.62rem;
	display: flex;
	.l1{
		width: 18%;
		height: 70%;
		margin: auto;
		border-right: 1px solid #ddd;
		img{
			width: .35rem;
			height: .35rem;
			margin: .07rem 0 0 .2rem;
		}
	}
	.l2{
		width: 82%;
		height: 74%;
		margin: auto;
		position: relative;
		overflow: hidden;
		// padding: 0 0 0.05rem 0;
		i{
			display: inline-block;
			width: 0.20rem;
			height: .20rem;
			margin: 0 0.18rem 0 .18rem;
			background: url(../assets/a3.png) no-repeat -1.35rem -3.51rem;
			background-size: 3.75rem;
		}
		li{
			width: 85%;
		}
		div{
			position: absolute;
			left: 0;
			top: 0;
			width: 100%;
		}



	}
}
</style>