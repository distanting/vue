<template>
 <div id="weizhi">
   <span>{{wz}}</span>
 </div>

</template>

<script>
export default {
	data(){
		return{
			wz:"上海"
		}
	},
 	created(){
 		var that = this;
 		var map, geolocation;
    map = new AMap.Map('container', {
        });
        map.plugin('AMap.Geolocation', function() {
            geolocation = new AMap.Geolocation({

            });
            map.addControl(geolocation);
            geolocation.getCurrentPosition();
            AMap.event.addListener(geolocation, 'complete', onComplete);//返回定位信息
            AMap.event.addListener(geolocation, 'error', onError);      //返回定位出错信息
            });
            //解析定位结果
        function onComplete(data) {
                that.wz = data.addressComponent.province.slice(0,-1);//定位信息
                // console.log(data.addressComponent.province)
            }
        function onError(data) {
                document.getElementById('tip').innerHTML = '定位失败';
            }
 	}
}
</script>


<style scoped >
#weizhi{
	display: inline;
}
</style>