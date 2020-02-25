<template>
    <div class="mymoney">
    <!-- 头部 -->
        <div class="head">
            <div class="head-1">
                <span onclick="window.history.go(-1)"></span>
                <h1>我的钱包</h1>
                <i></i>
            </div>
        </div>

    <!-- 中部 -->

        <div class="zhongbu">
            <div class="zhongbu-1">
                <router-link to="yidianka">
                    <p>
                        <span class="zhongbu-1-1">0</span>
                    </p>
                    <p>
                        <span class="zhongbu-1-2">伊点卡</span>
                    </p>
                </router-link>
            </div>
            <i class="zhongbu-2"></i>
            <div class="zhongbu-3">
                <router-link to="yidou">
                     <p>
                        <span class="zhongbu-3-1">50</span>
                    </p>
                    <p>
                        <span>伊豆</span>
                    </p>
                </router-link>
                <router-view></router-view>
            </div>
        </div>

    <!-- 积分 优惠劵 提货券 -->
        <div class="quan">
            <ul>
                <li>
                    <div class="quan-1">
                        <i></i>
                        <p>优惠券</p>
                        <span>　>　</span>
                    </div>
                </li>
                <li>
                    <div class="quan-2">
                        <i></i>
                        <p>积分</p>
                        <span>  >   </span>
                    </div>
                </li>
                <li>
                    <div class="quan-3">
                        <i></i>
                        <p>提货券</p>
                        <span>  >   </span>
                    </div>
                </li>

            </ul>
        </div>

    </div>
</template>

<script>
    export default{

    }

</script>


<style scoped>

/* 头部 */
.mymoney{
    background-color:#f0f0f0;
    height:100%;
    min-width:330px;
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
    margin-right:7%;
}

/* 中部 */
.zhongbu{
    display:flex;
    justify-content:space-around;
    align-items:center;
    width:100%;
    height:1.2rem;
    background-color:#ff6900;
    font-size:.16rem;
    text-align:center;
    color:#FFFFFF;
}
.zhongbu-1-1,.zhongbu-3-1{
    font-size:.18rem;
    color:#FFFFFF;
}
.zhongbu-1-2{
    color:#FFFFFF;
}
.zhongbu-2{
    width: 5px;
    height: .75rem;
    background-position: -.34rem -2.80rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://m.static.laiyifen.com/images/icons4.png?v=1498042871535);
    background-repeat: no-repeat;
    background-size: 3.35rem auto;
}
.zhongbu-1{
    margin-left: .3rem;

}
.zhongbu-3{
    margin-right: .3rem;
}
.zhongbu-3 span{
    color:#FFFFFF;
}
/* 优惠劵 */

.quan-1,.quan-2,.quan-3{
    display:flex;
    width:100%;
    height:.5rem;
    align-items:center;
    background-color:#FFFFFF;
    font-size:.16rem;
}
.quan-1 span{
    margin-left:2.7rem;
    font-size:.2rem;
}
.quan-1 i{
    width: .2rem;
    height: .2rem;
    background-position: -1.57rem -.63rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://m.static.laiyifen.com/images/icons4.png?v=1498042871535);
    background-repeat: no-repeat;
    background-size: 3.35rem auto;
    margin:0 .1rem;
}
.quan-2{
    margin-top:.02rem;
    margin-bottom:.1rem;
}
.quan-2 i{
     width: .2rem;
    height: .2rem;
    background-position: -1.57rem -.82rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://m.static.laiyifen.com/images/icons4.png?v=1498042871535);
    background-repeat: no-repeat;
    background-size: 3.35rem auto;
    margin:0 .1rem;
}
.quan-2 span{
    margin-left:3.05rem;
    font-size:.2rem;
}
.quan-3 i{
     width: .2rem;
    height: .2rem;
    background-position: -1.57rem -1.03rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://m.static.laiyifen.com/images/icons4.png?v=1498042871535);
    background-repeat: no-repeat;
    background-size: 3.35rem auto;
    margin:0 .1rem;
}
.quan-3 span{
    font-size:.2rem;
    margin-left:2.9rem;
}
</style>