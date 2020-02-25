<template>
    <div class="mypoint">
       <!-- 头部 -->
        <div class="head">
            <div class="head-1">
                <span onclick="window.history.go(-1)"></span>
                <h1>我的积分</h1>
                <i></i>
            </div>
        </div>
        <!-- 中部 -->
        <div class="pointZhong">
            <div class="pointZhong-1">
                <div>
                    <img src="http://m.static.laiyifen.com/images/integral-header.png?v=1498042871535" alt="" width="55px" class="disIB">
                </div>
                <div>
                    <p class="title">当前总积分</p>
                    <p class="num">0</p>
                </div>
            </div>

            <div class="pointZhong-2">
                    <span>兑换伊豆</span>
                    <p>1积分=50伊豆<img src="http://m.static.laiyifen.com/images/integral-header.png?v=1498042871535" alt="" width="55px" class="disIB"></p>
            </div>
        </div>
        <!-- 明细 -->
        <div class="pointlist">
            <div class="pointlist-1">
                <p>明细</p>
            </div>

        </div>
    <!--  -->
        <div class="pointlist-2">
            <div class="pointlist-3">
                <ul>
                    <li>全部</li>
                    <li>收入</li>
                    <li>支出</li>

                </ul>
            </div>
        </div>
    <!-- 暂无数据 -->
        <div class="pointlis-4">
            <i></i>
            <p>暂无数据...</p>
        </div>

    </div>
</template>


<script>
    export default{

    }
</script>


<style scoped>
.mypoint{
    background-color:#FFFFFF;
    width:100%;
    height:100%;
    z-index:20;
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
    margin-right:7%;
}
/* 中部 */
.pointZhong{
    display:flex;
    justify-content:space-between;
    align-items:center;
    height: 1.05rem;
    color: #fff;
    text-align: center;
    line-height: .01rem;
    background-image: url(http://m.static.laiyifen.com/images/integral.png?v=1498042871535);
    background-repeat: no-repeat;
    background-size: 100% 100%;
}


.pointZhong-1{
    display:flex;
    justify-content:space-between;
    margin-left:.2rem;
}
.title{
    margin:.1rem 0  .2rem .1rem;
}
.num{
    font-size:.16rem;
}

.pointZhong-2{
    display:flex;
    flex-direction:column;
    margin-right:.2rem;
}
.pointZhong-2 span{
    height:.3rem;
    width:.6rem;
    line-height:.3rem;
    background-color:#FFFFFF;
    border-radius:.1rem;
    margin:0 0 0.1rem .75rem;
    color:red;
}

/* m明细 */
.pointlist,.pointlist-2{
    width:100%;
    height:.5rem;
    line-height:.5rem;
    font-size:.15rem;
    background-color:#f0f0f0;
}
.pointlist-3 ul{
    display:flex;
    justify-content:space-around;
    background-color:#FFFFFF;
    text-align:center;

}
.pointlist-3 li{
    text-align:center;
    width:.6rem;
}
.pointlist-3 li:hover{

    border-bottom:.02rem solid #ff6900 ;
    /* text-align:center; */
}

.pointlis-4{
    width:100%;
    margin: 1.5rem 0 0 1.5rem;
}
.pointlis-4 i{
    width: 1.40rem;
    height: 1.10rem;
    background-position: -.60rem -1.23rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://m.static.laiyifen.com/images/icons4.png?v=1498042871535);
    background-repeat: no-repeat;
    background-size: 3.35rem auto;
    margin-bottom: .1rem;
}
.pointlis-4 p{
    margin-left:.35rem;
}

</style>