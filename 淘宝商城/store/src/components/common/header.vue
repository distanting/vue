<template>

<div class="ui-header">
    <div class="sarch">
        <div id='container'></div>
        <div id="tip"></div>
       <span @click="location()" ><weizhi></weizhi></span><b></b>
       <span class="ss"></span>
       <input type="text" name="addss" placeholder="请输入搜索项">
       <router-link to="login"><i ></i></router-link>
   </div>
</div>

</template>

<script>
import Weizhi from '../weizhi'
export default {
 	name: 'uiHeader',
    components: {
        Weizhi
    }
}
</script>


<style scoped lang="less">
.sarch{
    width:100%;
    height:.44rem;
    line-height: .44rem;
    position: fixed;
    z-index: 10;
    left: 0;
    top: 0;
    background: #fff;
    border-bottom: 1px solid #e0e0e0;
    span{
        margin: 0 0 0 0.1rem;
    }
    b{
        display: inline-block;
        vertical-align: middle;
        width: .2rem;
        height: .2rem;
        background: url(../../assets/a1.png) no-repeat 0.02rem 0.05rem;
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
        background:  url(../../assets/a1.png) no-repeat -1.05rem -1.41rem;
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
        background: url(../../assets/a3.png) no-repeat -1.26rem -4.68rem ;
        background-size: 4rem;
        margin: 0 0 0 0.1rem;
        position: absolute;
        left: 3.66rem;
        top: .11rem;
    }
}
#tip{
    display: none;
}
</style>
