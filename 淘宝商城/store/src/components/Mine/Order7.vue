<template>
    <div class="order7">
         <!-- 头部 -->
        <div class="head">
            <div class="head-1">
                <span onclick="window.history.go(-1)"></span>
                <h1>售后服务</h1>
                <div class="head-2">
                    <i><img src="../../assets/imgs/fangdajing-2.png" alt=""></i>
                    <span></span>
                </div>
                <div class="head-2-1">
                    <router-link to="first"><p><i class="head-2-1-1"></i>首页</p></router-link>
                    <router-link to="mine"><p><i class="head-2-1-2"></i>我</p></router-link>
                </div>
            </div>
        </div>
        <!--  -->
        <div class="customer">

            <ul class="customer-1">
                <li>售后申请</li>
                <li>售后进度</li>
            </ul>

        </div>

        <!--  -->
        <div class="order1-1">
            <i></i>
            <p>还没有订单信息，快去逛逛吧</p>
            <router-link to="/first"><button type="button">去逛逛</button></router-link>
        </div>
    </div>

</template>


<script>
    export default{

    }

</script>


<style scoped>
.order7{
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
    height:.3rem%;
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
    display:none;
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

/* 售后 */
.customer{
    width:100%;
    height:.5rem;
    background-color:#FFFFFF;

}
.customer-1{
    display:flex;
    justify-content:space-around;
    width:100%;
    height:.5rem;
    line-height:.4rem;
    /* border-bottom:.02rem solid #ff6900; */
}
.customer-1 li{
    width:.8rem;
    text-align:center;
    font-size:.15rem;
}
.customer-1 li:hover{
    border-bottom:.02rem solid #ff6900;
    color:#ff6900;

}

.order1-1{
    width:100%;
    height:2rem;
   /* border:1px solid black; */
   margin:2rem auto;
   text-align:center;
}

.order1-1 i{
    width: 1.00rem;
    height: .60rem;
    background-position: -.58rem -.62rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://m.static.laiyifen.com/images/icons4.png?v=1498042871535);
    background-repeat: no-repeat;
    background-size: 3.35rem auto;
    margin: .2rem 0;
}
.order1-1 p{
    font-size:.15rem;
}
.order1-1 button{
    margin-top:.2rem;
    background-color:#ff6900;
    color:#FFF;
    border:none;
    height: .30rem;
    line-height: .30rem;
    min-width: .55rem;
    display: inline-block;
    text-align: center;
    position: relative;
    font-size: .15rem;
    border-radius:.02rem;
}

</style>