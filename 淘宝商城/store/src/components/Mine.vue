<template>
 <div id="mine">
 <!--头部 -->
<div class="shezhi">
    <div class="shezhi-1">
        <ul class="shezhi-1-1">
            <router-link to="news"> <li><img src="../assets/imgs/duihuaqipao.png" alt=""></li></router-link>
           <router-link to="setup"><li><img src="../assets/imgs/shezhibiao.png" alt=""></li></router-link>
        </ul>
    </div>
    <div class="shezhi-2">
     <ul class="shezhi-2-1">
         <li>
             <span>--</span>
             <i>会员等级</i>
         </li>
         <li>
            <img width="60" height="60" src="http://m.static.laiyifen.com/images/logo-laiyifen.png?v=1498042871535" @click="Zhuanhuan()">
         </li>
         <li>
             <span>--</span>
             <i class="shezhi-2-2">伊豆</i>
         </li>

     </ul>
    </div>
    <div class="shezhi-3 tiaozhuan" v-if="getName">{{getName}}</div>
    <div class="shezhi-3" v-else="getName">
        <router-link to="login">
            <router-link to="login"><span class="shezhe-3-1">登录</span></router-link>
            <span></span>
            <router-link to="register"><span>注册</span></router-link>
        </router-link>
    </div>
 </div>

<!-- 我的订单 -->
<div class="dingdan">
    <div class="dingdan-1">
        <div>
            <router-link to="myorder">
                <i class="dingdan-1-1"><img src="../assets/imgs/jishiben1.png" alt=""></i>
                <span class="dingdan-1-3">我的订单</span>
            </router-link>
        </div>
        <span class="dingdan-2" >
            <router-link to="myorder">
                全部订单
                <i dingdan-1-2>></i>
            </router-link>
       </span>
    </div>
    <div class="dingdan-3">
        <ul>
            <li>
                <router-link to="/myorder/order2">
                    <i class="dingdan-3-1"></i>
                    <div>
                        <i>代付款</i>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/myorder/order3">
                    <i class="dingdan-3-2"></i>
                    <div>
                        <i>代发货</i>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/myorder/order4">
                    <i class="dingdan-3-3"></i>
                    <div>
                        <i>待收货</i>
                    </div>
                </router-link>
            </li>
            <li>
                <router-link to="/myorder/order5">
                    <i class="dingdan-3-4"></i>
                    <div>
                        <i>待评价</i>
                    </div>
                </router-link>
            </li>
             <li>
                <router-link to="order7">
                    <i class="dingdan-3-5"></i>
                    <div>
                        <i>退换货</i>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
<div class="fenge"></div>

<!-- 我的钱包 -->
<div class="mypouch">
    <div class="mypouch-1">
        <div>
            <router-link to="mymoney">
                <i class="mypouch-1-1"><img src="../assets/imgs/jishiben1.png" alt=""></i>
                <span class="mypouch-1-3">我的钱包</span>
            </router-link>
        </div>
        <span class="mypouch-2" >
            <router-link to="login">
                全部订单
                <i mypouch-1-2>></i>
            </router-link>
        </span>
    </div>
    <div class="mypouch-3">
        <div class="mypouch-3-1">
            <div>
                <p>
                  <router-link to="login"> <span class="mypouch-3-2">- -</span></router-link>
                </p>
            </div>
            <div>
                <p>
                   <router-link to="login"> <span class="mypouch-3-2">- -</span></router-link>
                </p>
            </div>
            <div>
                <p>
                   <router-link to="login"> <span class="mypouch-3-2">- -</span></router-link>
                </p>
            </div>
        </div>
        <div class="mypouch-3-1">
            <div>
                <p>
                   <router-link to="yidianka"> <span>伊点卡</span></router-link>
                </p>
            </div>
            <div>
                <p>
                   <router-link to="mypoint"> <span>积分</span></router-link>
                </p>
            </div>
            <div>
                <p>
                   <router-link to="coupon"> <span>优惠劵</span></router-link>
                </p>
            </div>

        </div>
    </div>

<div class="fenge"></div>

<!-- 功能列表-->
<div class="Funcion">
    <div class="Funcion-1">
        <div class="Funcion-1-1">
            <router-link to="address">
                <p><i class="Funcion-2 Funcion-2-1"></i></p>
                <p>收货地址</p>
            </router-link>
        </div>
        <div class="Funcion-1-1">
            <router-link to="login">
                <p><i class="Funcion-2 Funcion-2-2"></i></p>
                <p>我的团</p>
            </router-link>

        </div>
        <div class="Funcion-1-1">
            <router-link to="login">
                <p><i class="Funcion-2 Funcion-2-3"></i></p>
                <p>我的砍价单</p>
            </router-link>
        </div>
        <div class="Funcion-1-1">
            <router-link to="login">
                <p><i class="Funcion-2 Funcion-2-4"></i></p>
                <p>一句话福利</p>
            </router-link>
        </div>
    </div>
    <div class="Funcion-1">
        <div class="Funcion-1-1">
            <router-link to="login">
                <p><i class="Funcion-2 Funcion-2-5"></i></p>
                <p>我的收藏</p>
            </router-link>
        </div>
        <div class="Funcion-1-1">
            <router-link to="login">
                <p><i class="Funcion-2 Funcion-2-6"></i></p>
                <p>我的评价</p>
            </router-link>
        </div>
        <div class="Funcion-1-1">
            <router-link to="login">
                <p><i class="Funcion-2 Funcion-2-7"></i></p>
                <p>常购清单</p>
            </router-link>
        </div>
         <div class="Funcion-1-1">
        </div>
        <div>
    </div>
    </div>
    <div class="fenge fenge-1"></div>
    <div class="Funcion2">
        <div class="Funcion-1">
            <div class="Funcion-1-1">
                <router-link to="login">
                    <p><i class="Funcion-2 Funcion-4-1"></i></p>
                    <p>查询伊点卡</p>
                </router-link>
            </div>
            <div class="Funcion-1-1">
                <router-link to="login">
                    <p><i class="Funcion-2 Funcion-4-2"></i></p>
                    <p>查询门店</p>
                </router-link>
            </div>
            <div class="Funcion-1-1">
                <router-link to="login">
                    <p><i class="Funcion-2 Funcion-4-3"></i></p>
                    <p>加盟来伊份</p>
                </router-link>
            </div>
            <div class="Funcion-1-1">
                <router-link to="login">
                    <p><i class="Funcion-2 Funcion-4-4"></i></p>
                    <p>中奖纪录</p>
                </router-link>
            </div>
        </div>
        <div class="Funcion-1">
            <div class="Funcion-1-1">
                <router-link to="login">
                    <p><i class="Funcion-2 Funcion-4-5"></i></p>
                    <p>增票资质</p>
                </router-link>
            </div>
            <div class="Funcion-1-1">
                <router-link to="login">
                    <p><i class="Funcion-2 Funcion-4-6"></i></p>
                    <p>客服热线</p>
                </router-link>
            </div>
            <div class="Funcion-1-1">
                <router-link to="login">
                    <p><i class="Funcion-2 Funcion-4-7"></i></p>
                    <p>在线客服</p>
                </router-link>
            </div>
             <div class="Funcion-1-1"></div>
    </div>
    </div>
    <div style="height:1rem; width:100%; background-color:#F0F0F0;">

    </div>

</div>
</div>
</div>

 </div>
</template>

<script>
export default {

 	name:"Ball",
    computed:{
        getName(){
            return this.$store.state.name;
        },


    },
    methods:{
         Zhuanhuan(){
        console.log(this.$store.state.name)
            if(this.$store.state.name==""){
                location.href ="/#/login";
            }else{
                alert('message')
            }

        }

    }
}


</script>


<style scoped >
.shezhi{
    width: 100%;
    height: 1.6rem;
    background:-webkit-linear-gradient(top,#ffb300,#ff6c00);
}
.shezhi-1-1{
    display:flex;
    justify-content:flex-end;
    align-items:center;
}

.shezhi-1-1 img{
    width: 0.3rem;
    height:0.3rem;
    margin: 0.11rem 0.05rem;
}


.shezhi-2{
    display:-webkit-box;
    width: 100%;
    justify-content:center;

}
.shezhi-2-1{
    display:flex ;

}
.shezhi-2-1 img{
    width: .64rem;
    height: .64rem;
}
.shezhi-2-1 i{
    color: #fff;
    font-size: 0.12rem;
    display: block;
    margin-top: 0.05rem;
}
.shezhi-2-1 span{
    display: block;
    border-radius: 0.17rem;
    background: #ffc600;
    color: #fff;
    font-size: 0.14rem;
    min-width: 0.5rem;
    text-align:center;
    margin:0.15rem 0 0 0;
}
.shezhi-2-2{
    margin-left:.1rem;
}
.shezhi-2-1 li:nth-child(2){
    margin: 0 0.3rem;
}
.shezhi-3{
    display: flex;
    width: 100%;
    height: .12rem;
   justify-content:center;
   margin:.06rem  0  0 .01rem;
}
.shezhi-3 span{
    color:#fff;
    font-size:.16rem;
}
.shezhi-3 span:nth-child(2){
    margin: 0 .03rem;
}
.tiaozhuan{
    color:#FFFFFF;
    font-size:.15rem;
    margin-top:.13rem;
}
/* 我的订单 */

.dingdan{
    width: 100%;
    height: .37rem;
    border-bottom:.01rem solid #e0e0e0;
    align-items:center;

}
.dingdan-1{
    display:flex;
    justify-content:space-between;
    margin-top:.1rem;
}
.dingdan-1-1 img{
width: .17rem;
height: .18rem;
margin: 0 .1rem .1rem 0.1rem;
}
.dingdan-1-3{
    font-size:.2rem;
}
.dingdan-2{
    margin-right:.2rem;
    font-size:.16rem;
}

.dingdan-3 ul{
    display:flex;
    justify-content:space-around;
    text-align:center;
}

.dingdan-3 li{
    margin-top:.3rem;
}

.dingdan-3-1{
    display: inline-block;
    vertical-align: middle;
    width: .30rem;
    height: .25rem;
    background: url('http://m.static.laiyifen.com/images/icons-au.png?v=1498042871535');
    background-position: 0rem -.95rem;
    background-repeat: no-repeat;
    background-size: 3.35rem auto;
}
.dingdan-3-2{
    display: inline-block;
    vertical-align: middle;
    width: .30rem;
    height: .25rem;
    background: url('http://m.static.laiyifen.com/images/icons-au.png?v=1498042871535');
    background-position: 0rem -1.26rem;
    background-repeat: no-repeat;
    background-size: 3.35rem auto;
}
.dingdan-3-3{
    display: inline-block;
    vertical-align: middle;
    width: .30rem;
    height: .25rem;
    background: url('http://m.static.laiyifen.com/images/icons-au.png?v=1498042871535');
    background-position: 0rem -1.57rem;
    background-repeat: no-repeat;
    background-size: 3.35rem auto;
}
.dingdan-3-4{
    display: inline-block;
    vertical-align: middle;
    width: .30rem;
    height: .25rem;
    background: url('http://m.static.laiyifen.com/images/icons-au.png?v=1498042871535');
    background-position: 0rem -1.89rem;
    background-repeat: no-repeat;
    background-size: 3.35rem auto;
}
.dingdan-3-5{
    display: inline-block;
    vertical-align: middle;
    width: .30rem;
    height: .25rem;
    background: url('http://m.static.laiyifen.com/images/icons-au.png?v=1498042871535');
    background-position:0rem -2.22rem;
    background-repeat: no-repeat;
    background-size: 3.35rem auto;
}
/* fenge */
.fenge{
    width: 100%;
    height:10px;
    background-color:#F0F0F0;
    margin-top:.2rem;
}

/* 我的钱包 */
.mypouch{
    width: 100%;
    height: .37rem;
    border-bottom:.01rem solid #e0e0e0;
    align-items:center;

}
.mypouch-1{
    display:flex;
    justify-content:space-between;
    margin-top:.1rem;
}
.mypouch-1-1 img{
width: .17rem;
height: .18rem;
margin: 0 .1rem .1rem 0.1rem;
}
.mypouch-1-3{
    font-size:.2rem;
}
.mypouch-2{
    margin-right:.2rem;
    font-size:.16rem;
}


.mypouch-3-1{
    display:flex;
    justify-content:space-around;
    margin-top:.16rem;
}
.mypouch-3-2{
color:red;
}


/* 功能列表 */
.Funcion-1{
    display:flex;
    width: 100%;
    justify-content:space-around;
}

.Funcion-2{
    display: inline-block;
    vertical-align: middle;
    width: .30rem;
    height: .30rem;
    background-repeat: no-repeat;
    background-size: 3.35rem auto;
}
.Funcion-2-1{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: 0rem .02rem;
    background-size: 3.35rem auto;
}
.Funcion-2-2{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: 0rem -3.16rem;
    background-size: 3.35rem auto;
}
.Funcion-2-3{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: 0rem -3.46rem;
    background-size: 3.34rem auto;
}
.Funcion-2-4{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: 0px -3.46rem;
    background-size: 3.34rem auto;
    border-right:none;
}
.Funcion-2-5{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: 0rem -1.26rem;
    background-size: 3.35rem auto;
}
.Funcion-2-6{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: 0rem -1.58rem;
    background-size: 3.35rem auto;
}
.Funcion-2-7{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: 0 -1.91rem;
    background-size: 3.35rem auto;
}
.Funcion-1-1{
    width: 25%;
    height: .7rem;
    text-align:center;
    border-right:.01rem solid #E3E3E3;
    border-bottom:.01rem solid #E3E3E3;
    padding-top:.11rem;
}

.fenge-1{
    margin:0;
}
.Funcion-4-1{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: 0rem -2.50rem;
    background-size: 3.35rem auto;
}
.Funcion-4-2{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: 0rem -2.82rem;
    background-size: 3.35rem auto;
}
.Funcion-4-3{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: -.30rem .03rem;
    background-size: 3.34rem auto;
}
.Funcion-4-4{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: -.30rem -1.22rem;
    background-size: 3.34rem auto;
    border-right:none;
}
.Funcion-4-5{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: .03rem -.30rem;
    background-size: 3.35rem auto;
}
.Funcion-4-6{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: 0rem -.63rem;
    background-size: 3.35rem auto;
}
.Funcion-4-7{
    background: url('http://m.static.laiyifen.com/images/icons4.png?v=1498042871535');
    background-position: 0rem -.95rem;
    background-size: 3.35rem auto;
}
</style>