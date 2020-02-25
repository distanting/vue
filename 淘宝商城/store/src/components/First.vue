<template>
 <div id="first">
    <div class="sarch">
        <div id='container'></div>
        <div id="tip"></div>
       <span @click="location()" ><weizhi></weizhi></span><b></b>
       <span class="ss"></span>
       <input type="text" name="addss" placeholder="请输入搜索项">
       <router-link to="login"><i ></i></router-link>
   </div>
   <div class="box" id="bbb">
        <swiper :arr="swiperData" ></swiper>
        <ball :list="ballData"></ball>
        <gundonglist></gundonglist>
        <jiange></jiange>
        <banner></banner>
        <jiange></jiange>
        <jingxuan></jingxuan>
        <jiange></jiange>
        <fenlei ></fenlei>
        <mmm></mmm>
   </div>
   
 </div>
  
</template>

<script>
import Vue from 'vue'
import Swiper from './Swiper'
import Ball from './Ball'
import Gundonglist from './Gundonglist'
import Jiange from './Jiange'
import Banner from './Banner'
import Jingxuan from './Jingxuan'
import Fenlei from './Fenlei'
import Mmm from './Mmm'
import Weizhi from './Weizhi'
export default {
 components:{
    Swiper,
    Ball,
    Gundonglist,
    Jiange,
    Banner,
    Jingxuan,
    Fenlei,
    Mmm,
    Location,
    Weizhi
 },
 data(){
    return{
        obj:{},
        swiperData:[],
        ballData:[],
        flag:false,
        wz:""
    }
},
 created(){
    var that=this;
    this.axios.get("../static/first.json").then(data=>{         
            this.obj = data.data.data;
            this.swiperData = this.obj.ad_banner;
            this.ballData = this.obj.ad_channel;
        },
        err=>{
            console.log(err);
        })
        //定位
        
        //加载地图，调用浏览器定位服务
        
    },
    methods:{
        location(){
            this.$store.commit('FALG',0);

            // console.log(this.$store.state.flag)
        }
    },
    updated(){
        
        }

}

</script>


<style scoped lang="less">
#container,#tip{
    display: none;
}
#first{
    overflow: hidden;
}
.sarch{
    width:100%;
    height:.44rem;
    line-height: .44rem;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    background: #fff;
    span{
        margin: 0 0 0 0.1rem;
    }
    b{
        display: inline-block;
        vertical-align: middle;
        width: .2rem;
        height: .2rem;
        background: url(../assets/a1.png) no-repeat 0.02rem 0.05rem;
        background-size: 3rem ;
        position: absolute;
        left: .36rem;top: .14rem;
    }
    .ss{
        display: block;
        position: absolute;
        left: .60rem;
        top: .08rem;
        width: 0.3rem;
        height: 0.3rem;
        background:  url(../assets/a1.png) no-repeat -1.05rem -1.41rem;
        background-size: 3.5rem;
        z-index: 11;
    }
    input{
        width: 3rem;
        height: 0.3rem;
        background: #f5f5f5;
        border-radius: 0.05rem;
        text-indent: .33rem;
        font-size: 0.12rem;
        margin: 0 0 0 0.1rem;
        position: absolute;
        left: .54rem;
        top: .08rem;
    }
    i{
        display: inline-block;
        vertical-align: middle;
        width: .25rem;
        height: .25rem;
        background: url(../assets/a3.png) no-repeat -1.26rem -4.68rem ;
        background-size: 4rem;
        margin: 0 0 0 0.1rem;
        position: absolute;
        left: 3.66rem;
        top: .11rem;
    }
}
.box{
    width: 100%;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 0.44rem;
    padding: 0 0 0.49rem;
}
/*.wz{
    display: inline-block;
    width: .25rem;
    // height: 100%;
}*/
</style>
