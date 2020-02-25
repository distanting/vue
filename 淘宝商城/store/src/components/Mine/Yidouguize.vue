<template>
    <div class="yidou">
        <!-- 头部 -->
        <div class="head">
            <div class="head-1">
                <span onclick="window.history.go(-1)"></span>
                <h1>伊豆规则</h1>
                <i></i>
            </div>
        </div>

        <div class="wenzhang">
            <h3 class="f14 c6 lineH180 mgT5">一、什么是伊豆</h3>
            <p class="f12 c6 lineH180 mgT5">1.伊豆是仅限在来伊份APP使用，可用于APP内活动参与、兑换等。</p>
            <p class="f12 c6 lineH180 mgT5">2.伊豆可在“我的”中查看伊豆数量及伊豆明细。</p>
            <p class="f12 c6 lineH180 mgT5">4.来伊份积分可以按一定比例兑换成伊豆。</p>
            <h3 class="f14 c6 lineH180 mgT20">二、伊豆如何获得？</h3>
            <p class="f12 c6 lineH180 mgT5">1.用户成功注册来伊份APP均可获得伊豆。</p>
            <p class="f12 c6 lineH180 mgT5">2.用户登录来伊份APP签到可以获得伊豆。</p>
            <p class="f12 c6 lineH180 mgT5">3.用户分享来伊份APP商品、活动等行为可以获得伊豆。</p>
            <p class="f12 c6 lineH180 mgT5">4.用户完成订单好评并晒图可以获得伊豆。</p>
            <p class="f12 c6 lineH180 mgT5">6.每天伊豆发放数量有限，送完为止。</p>
            <h3 class="f14 c6 lineH180 mgT20">三、伊豆如何使用？</h3>
            <p class="f12 c6 lineH180 mgT5">1.伊豆可以在APP内参与抽奖等活动时使用。</p>
            <p class="f12 c6 lineH180 mgT5">2.伊豆可以用于兑换优惠券，按券额进行相应消耗。</p>
            <p class="f12 c6 lineH180 mgT5">3.来伊份APP社区内用户之间的打赏可以使用伊豆。</p>
            <p class="f12 c6 lineH180 mgT5">4.来伊份APP其他线上活动时可以使用伊豆。</p>
            <h3 class="f14 c6 lineH180 mgT20">四、其他说明</h3>
            <p class="f12 c6 lineH180 mgT5">伊豆规则最终解释权归来伊份所有。</p>
        </div>

    </div>

</template>


<script>
    export default{

    }

</script>


<style scopde>
.nav{
    display:none;
}
/* 头部 */
.yidou{
    background-color:#f0f0f0;
    width:100%;

    height:100%;
    /* position:absolute; */
    z-index:20;
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
/* 文章 */
.wenzhang{
    color:#716F6F;
}
.wenzhang p{
    height:.4rem;
    line-height:.4rem;
}
.wenzhang h3{
    height:.4rem;
    line-height:.4rem;
}
</style>
