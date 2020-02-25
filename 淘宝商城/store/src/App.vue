<template>
  <div id="app">
  <come v-show="xp"></come>
  <location v-if="qf" v-show="!xp"></location>
    <div v-else="qf" v-show="!xp">
        <div class="nav">
            <router-link to="/first"><i class="i1"></i><span @click="zhiding()">首页</span></router-link>
            <router-link to="/market"><i class="i2"></i><span>分类</span></router-link>
            <router-link to="/world"><i class="i3"></i><span @click="zhiding()">全球尖货</span></router-link>
            <router-link to="/car"><i class="i4"></i><b class="b1" v-if="getCarNumber">{{getCarNumber}}</b><span @click="zhiding()">购物车</span></router-link>
            <router-link to="/mine"><i class="i5"></i><span>我</span></router-link>   
        </div>
        <router-view ></router-view>
     </div>
  </div>
</template>

<script>
import Location from './components/Location'
import Come from './components/Come'
export default {
    name: 'App',
    components:{
        Location,
        Come
    },
    data(){
        return{
             flag:false,
             // xp:false
        }
       
    },
    methods:{
        zhiding(){
            document.body.scrollTop = "0px";
        }
    },
    created(){
    },
    computed:{
        qf(){
            return this.$store.state.flag;
        },
        xp(){
            return this.$store.state.look;
        },
        getCarNumber(){
            return this.$store.state.carNumber;
        }

    }
}
</script>
<style scoped lang="less">
    #app#qpp{
        width: 100%;
        overflow: hidden;
    }
    .nav{
        width: 100%;
        height: 0.49rem;
        display: flex;
        position: fixed;
        z-index: 10;
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
            width: 0.26rem;
            height: 0.26rem;
            
        }
    }
    span{
            display: block;
            
        }
    .i1{
        background: url(assets/a4.png) no-repeat -0.72rem 0rem;
        background-size: 3.75rem;
    }
    .router-link-active .i1{
        background: url(assets/a4.png) no-repeat -.72rem -.35rem;
        background-size: 3.75rem;
    }
    .i2{
        background: url(assets/a4.png) no-repeat -1.05rem 0rem;
        background-size: 3.75rem;
    }
    .router-link-active .i2{
        background: url(assets/a4.png) no-repeat -1.05rem -.34rem;
        background-size: 3.75rem;
    }
    .i3{
        background: url(assets/a4.png) no-repeat -1.76rem -3.53rem;
        background-size: 3.75rem;
    }
    .router-link-active .i3{
        background: url(assets/a4.png) no-repeat -1.76rem -3.89rem;
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
    .b1{
                display: inline-block;
                width: .18rem;
                height: .18rem;
                color: #fff;
                font-weight: 100;
                border-radius: 50%;
                background-color: red;
                position: absolute;
            }
</style>
<style>
html, body, div, ul, li, h1, h2, h3, h4, h5, h6, p, dl, dt, dd, ol, form, input, textarea, th, td, select {
    margin: 0;
    padding: 0;
}
*{box-sizing: border-box;}
html, body {
    min-height: 100%;
}
html{
    font-size: 100px;
}
body {
    font-family: "Microsoft YaHei";
    font-size:0.12rem;
    color:#333;
    overflow: scroll;
}
h1, h2, h3, h4, h5, h6{font-weight:normal;}
ul,ol {
    list-style: none;
}
i{
    font-style: normal;
}

img {
    border: none;
    vertical-align: middle;
}

a {
    text-decoration: none;
    color: #232323;
}

table {
    border-collapse: collapse;
    table-layout: fixed;
}

input, textarea {
    outline: none;
    border: none;
}

textarea {
    resize: none;
    overflow: auto;
}

.clearfix {
    zoom: 1;
}

.clearfix:after {
    content: ".";
    width: 0;
    height: 0;
    visibility: hidden;
    display: block;
    clear: both;
    overflow:hidden;
}

.fl {
    float: left
}

.fr {
    float: right
}

.tl {
    text-align: left;
}

.tc {
    text-align: center
}

.tr {
    text-align: right;
}

.ellipse {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    
}
.inline{
    display: inline-block;
    *display: inline;
    *zoom: 1;
}
</style>
<style>

.mod-pageview{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    
}
.hasHeader .main{
    position: absolute;
    top: .44rem;
    bottom: 0;
    left: 0;
    right: 0;
}
.hasHeader.hasFooter .main{
    position: absolute;
    top: .44rem;
    bottom: .49rem;
    left: 0;
    right: 0;
}

.mod-pageview .scroller{
    overflow-x: hidden;
    overflow-y: auto;
}

.lyf-icons {
    display: inline-block;
    vertical-align: middle;
    background-image: url(./assets/a3.png);
    background-repeat: no-repeat;
    background-size: 3.75rem auto;
}
.icons{
    display: inline-block;
    vertical-align: middle;
    background-repeat: no-repeat;
    background-size: 3.35rem auto;
    background-image: url(./assets/a1.png);
}
.theme-color{
    color: #ff6900;
}
.theme-bg-color{
    background-color: #ff6900;
}
.gray-font{
    color: #999;
}
.text-dec-through{
    text-decoration: line-through;
}
.promote{
    display: inline-block;
    font-size: .12rem;
    padding: 0 .03rem;
    -webkit-border-radius: .04rem;
    border-radius: .04rem;
    color: #fff;
    line-height: 1.5;
    background-color: #fe2b2b;
    margin-right: .05rem;
}
</style>