<template>
 <div id="fenlei">
   <div class="boo" id="boo">
   		<ul>
   			<li v-for="item in fl"> <img :src="item.pictureUrl"><br><span>{{item.categoryName}}</span></li>		
   		</ul>

   		

   </div>
 </div>
  
</template>

<script>
export default {
 	name:"Fenlei",
 	data(){
 		return{
 			fl:[]
 		}
 	},
 	created(){
 		this.axios.get("../static/fenlei.json").then(data=>{
 			
 			this.fl  = data.data.data
 			// console.log(this.fl);
 		},
 		err=>{
 			console.log(err);
 		})
 	},
 	mounted(){
 		/*var flag = false;
 		var ele = document.getElementById('box');
 		ele.onmousedown = function(e){
 			// console.log(11111111111);
 			e = e || window.event;
 			flag = true;
 			var x = e.pageX;	
 			document.onmousemove = function(e){
 				e = e || window.event;
 				console.log(8888);
 				if(flag==true){		
 					var newX = 	e.pageX;	
 					var a = ele.style.left = newX-x+"px";
 					x = e.pageX;
 					// console.log(ele.style.left);
 				}
 				
 			}
 		}*/
 		/*document.onmouseup = function(){
 			flag = false;
 		}*/
 	}
}
</script>


<style scoped lang="less">
#fenlei{
	width: 100%;
	height: .57rem;
	overflow: hidden;
	position: relative;
}
.boo{
	width: 7rem;
	height: .37rem;
	padding: .1rem 0 0 0;
	// position: absolute;
	left: 0;
	top:0;
	li{
		height: .37rem;
		// line-height: .57rem;
		color: #666;
		font-size: .14rem;
		width: .8rem;
		float: left;
		text-align: center;
		border-right: 1px solid #ddd;
		img{
			width: .15rem;
			height: .15rem;
			margin: 0 0 .04rem 0;
		}
	}
	li:first-child{
		width: 1rem;
	}
}

</style>