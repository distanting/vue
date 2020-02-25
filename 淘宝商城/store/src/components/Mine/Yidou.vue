<template>
    <div class="yidou">
        <!-- 头部 -->
        <div class="head">
            <div class="head-1">
                <span onclick="window.history.go(-1)"></span>
                <h1>我的钱包</h1>
                <router-link to="yidouguize"><i>伊豆规则</i></router-link>
            </div>
        </div>

        <!-- 当前伊豆数 -->
        <div class="yidoushu">
            <i></i>
            <div class="yidoushu-1">
                <p>当前伊豆数</p>
                <p><span>50</span>个</p>
            </div>
        </div>

        <div class="yidoumingxi">
            <p>伊豆明细</p>
        </div>

        <!-- 底部 -->
        <div class="dibu">
            <div dibu-1>
                <p>全部</p>
            </div>
            <div dibu-2>
                <p>收入</p>
            </div>
            <div dibu-3>
                <p>支出</p>
            </div>
        </div>

        <!--  -->
        <div class="mingxiliebiao">
            <div class="mingxiliebiao-1">
                <p>注册</p>
                <span>+50</span>
            </div>
            <div class="mingxiliebiao-2">
                <p>时间</p>
            </div>
        </div>


    </div>

</template>


<script>
    export default{

    }

</script>


<style scopde>
/* 头部 */
.yidou{
    background-color:#f0f0f0;
    width:100%;
    height:100%;
    position:absolute;
    z-index:20;
    overflow:hidden;
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
}
.head-1 i{
    margin-top: .007rem;
    margin-right:.1rem;
    font-size:.14rem;
}
/* 伊豆数 */
.yidoushu{
    display:flex ;
    justify-content:flex-start;
    align-items:center;
    width:100%;
    height:1rem;
    background-color:#ff6900;
    color: #FFFFFF;
}
.yidoushu i{
    width: .56rem;
    height: .56rem;
    background-position: -.34rem 0;
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://m.static.laiyifen.com/images/lyf-icons.png?v=1498042871535);
    background-repeat: no-repeat;
    background-size: 3.75rem auto;
    margin: 0 .3rem;
}
.yidoushu-1 p:first-child{

    color:#FFFFFF;
    margin-bottom:.03rem;
    font-size:.12rem;

}
.yidoushu-1 p:last-child span{
    color:#FFFFFF;
    font-size:.4rem;

}
/* 伊豆明细 */
.yidoumingxi{
    height:.4rem;
    line-height:.4rem;
}
.yidoumingxi p{
    margin-left:.1rem;
}

/* 底部 */
.dibu{
    display:flex;
    justify-content:space-around;
    align-items:center;
    height:.6rem;
    background-color:#FFFFFF;
    font-size:.18rem;
}
.dibu p{
    height:.6rem;
    line-height:.6rem;


}
.dibu p:hover{
    border-bottom:.02rem solid #ff6900;
}

/* 明细列表 */

.mingxiliebiao{
    height:.8rem;
    width:100%;
    background-color:#FFFFFF;
}
.mingxiliebiao-1{
    display:flex ;
    width:100%;
    justify-content:space-between;
    font-size:.18rem;
    padding:0.1rem;
}
.mingxiliebiao-2{
    padding:0 .1rem;
}


</style>
