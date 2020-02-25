<template>
    <div class="myorder">
        <!-- 头部 -->
        <div class="head">
            <div class="head-1">
                <span @click="fanhui()"></span>
                <h1>我的订单</h1>
                <div class="head-2">
                    <i><img src="../../assets/imgs/fangdajing-2.png" alt=""></i>
                    <span @click="flag=!flag"></span>
                </div>

                 <transition name="bounce">
                    <div class="head-2-1" v-show="flag">
                        <router-link to="first"><p><i class="head-2-1-1"></i>首页</p></router-link>
                        <router-link to="mine"><p><i class="head-2-1-2"></i>我</p></router-link>
                    </div>
                </transition>

            </div>
        </div>
        <!-- 列表 -->
        <div class="orderlist">
            <div class="orderlist-1">
                <ul class="orderlist-2">
                    <router-link to="/myorder/order1"> <li>全部</li></router-link>
                    <router-link to="/myorder/order2"> <li>待付款</li></router-link>
                    <router-link to="/myorder/order3"> <li>待发货</li></router-link>
                    <router-link to="/myorder/order4"> <li>待收货</li></router-link>
                    <router-link to="/myorder/order5"> <li>待评价</li></router-link>
                    <router-link to="/myorder/order6"> <li>已完成</li></router-link>
                    <router-link to="order7"> <li>售后服务</li></router-link>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>

        <!-- 二级路由展示区 -->

        <router-view></router-view>




    </div>

</template>

<script>
    export default{
        data(){
            return{
                flag:false


            }
        },
        methods:{

        flag(){
            this.show=!this.show
        },
        fanhui(){
            location.href ="/#/mine";
        }


    }
    }
</script>

<style scoped>
.myorder{
    background-color:#f0f0f0;
    height:100%;
    width:100%;
    /* min-width:330px; */
    z-index:20;
    overflow:hidden;
    position: absolute;

}
.head-1{
    display:flex;
    width:100%;
    height:.5rem;
    justify-content:space-between;
    align-items: center;
    background-color:#FFFFFF;
}
.head-1 span{
    width: .27rem;
    height: .28rem;
    background-image: url(http://m.static.laiyifen.com/images/icons4.png?v=1498042871535);
    background-position: -2.13rem -3.52rem;
    background-size: 3.75rem auto;
    margin-top: .007rem;
    margin-left: .1rem;
}
.head-1 h1{
    font-size:.2rem;
    margin-right:-5%;
}

.head-2{
    display:flex;
    justify-content:flex-end;
}
.head-2 img{
    width:.3rem;
    height:.3rem;
    margin:0.1rem .4rem 0 0;

}
.head-2 span{
    background-image: url(http://m.static.laiyifen.com/images/icons1.png?v=1498042871535);
    background-repeat: no-repeat;
    background-position: -.30rem -1.59rem;
    position: absolute;
    right: .15rem;
    height: .44rem;
    line-height: .44rem;
    color: #333;
    display: inline-block;
    background-size: 3.35rem auto;
    margin-right: auto;
    margin-left:.1rem;
}
.head-2-1{
    width:.7rem;
    height:.7rem;
    position:absolute;
    background-color:#606060;
    color:#FFFFFF;
    margin-left: 80%;
    margin-top:.6rem;
    border-radius:.03rem;
}
.head-2-1-2{
    width: 16px;
    height: 16px;
    background-position: -248px -113px;
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://m.static.laiyifen.com/images/icons1.png?v=1498042871535);
    background-repeat: no-repeat;
    background-size: 335px auto;
    margin-right:.1rem;
}
.head-2-1 p:first-child{
    font-size:.12rem;
    margin: .1rem 0  .15rem .1rem;
    color: #FFFFFF;
}
.head-2-1 p:last-child{
    font-size:.12rem;
    margin: .1rem 0  .15rem .1rem;
    color: #FFFFFF;

}
.head-2-1-1{
    width: 16px;
    height: 16px;
    background-position: -213px -142px;
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://m.static.laiyifen.com/images/icons1.png?v=1498042871535);
    background-repeat: no-repeat;
    background-size: 335px auto;
    margin-right:.05rem;
}
.bounce-enter-active {
        animation: bounce-in .5s;
    }

    .bounce-leave-active {
        animation: bounce-out .5s;
    }

    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes bounce-out {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.2);
        }
        100% {
            transform: scale(0);
        }
    }

/* 列表 */
.orderlist-1{
    width:7rem;
    height:.4rem;
    line-height:.39rem;
    background-color:#FFFFFF;
    overflow-x:scroll;
    font-size:.15rem;
}
.orderlist-2{
    display:flex;
}
.orderlist-2 li{
    width:100px;
    text-align:center;
}
.orderlist-2 li:hover{
    border-bottom:.02rem solid #ff6900;
    color:#ff6900;
}
a{
    text-decoration: none;
}
</style>