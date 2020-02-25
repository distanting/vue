<template>
  <div id="ppa">
    <div class="nav">
        <router-link to="/first"><i class="i1"></i><span>首页</span></router-link>
        <router-link to="/market"><i class="i2"></i><span>分类</span></router-link>
        <router-link to="/world"><i class="i3"></i><span>全球尖货</span></router-link>
        <router-link to="/car"><i class="i4"></i><span>购物车</span></router-link>
        <router-link to="/mine"><i class="i5"></i><span>我</span></router-link>   
    </div>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:"Box"
}
</script>
<style scoped lang="less">
    #qpp{
        width: 100%;
        overflow: hidden;
    }
    .nav{
        width: 100%;
        height: 0.49rem;
        display: flex;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #fff;
    }
    .nav a{
        width: 20%;
        margin: auto;
        text-align: center;
        height: 100%;
        i{
            display: inline-block;
            width: 0.24rem;
            height: 0.26rem;
        }
    }
    span{
            display: block;
            
        }
    .i1{
        background: url(assets/a4.png) no-repeat -0.72rem -.01rem;
        background-size: 3.75rem;
    }
    .router-link-active .i1{
        background: url(assets/a4.png) no-repeat -.72rem -.35rem;
        background-size: 3.75rem;
    }
    .i2{
        background: url(assets/a4.png) no-repeat -1.05rem -.01rem;
        background-size: 3.75rem;
    }
    .router-link-active .i2{
        background: url(assets/a4.png) no-repeat -1.05rem -.35rem;
        background-size: 3.75rem;
    }
    .i3{
        background: url(assets/a4.png) no-repeat -1.77rem -3.55rem;
        background-size: 3.75rem;
    }
    .router-link-active .i3{
        background: url(assets/a4.png) no-repeat -1.77rem -3.90rem;
        background-size: 3.75rem;
    }
    .i4{
        background: url(assets/a4.png) no-repeat -1.78rem -.01rem;
        background-size: 3.75rem;
    }
    .router-link-active .i4{
        background: url(assets/a4.png) no-repeat -1.78rem -.35rem;
        background-size: 3.75rem;
    }
    .i5{
        background: url(assets/a4.png) no-repeat -2.14rem -.01rem;
        background-size: 3.75rem;
    }
    .router-link-active .i5{
        background: url(assets/a4.png) no-repeat -2.14rem -.35rem;
        background-size: 3.75rem;
    }
</style>