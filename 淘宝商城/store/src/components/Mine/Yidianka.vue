<template>
    <div class="yidianka">
         <!-- 头部 -->
        <div class="head">
            <div class="head-1">
                <span onclick="window.history.go(-1)"></span>
                <h1>伊点卡</h1>
               <i></i>
            </div>
        </div>


        <!-- 卡号  密码 -->
        <div class="kahaomima">
            <div>
                <div class="kahao">
                    <label>卡号</label>
                    <input type="tel"  placeholder="请输入卡号" >
                </div>
                <div class="mima">
                    <label>密码</label>
                    <input type="tel"  placeholder="请输入密码" >
                </div>
            </div>
        </div>

        <!-- 添加 -->
        <div>
            <div class="tianjia">
                <span class="tianjia-1">添加</span>
            </div>
            <div class="tianjia-3">
                <span class="tianjia-3-1">温馨提示：如非电子卡券，至门店消费请务必携带实物卡</span>
            </div>
        </div>

        <!-- 数据展示 -->
        <div class="shuju">

            <div class="shuju-1">
                <ul class="shuju-2">
                    <li>未使用</li>
                    <li>已使用</li>
                    <li>已赠送</li>
                    <li>已过期</li>
                </ul>
            </div>

            <div class="shuju-3">
                <i></i>
                <p>暂无数据...</p>
            </div>

        </div>



    </div>
</template>


<script>
export default{

     }


</script>

<style scoped>

 /* 头部 */
.yidianka{
    background-color:#f0f0f0;
    height:7.18rem;
    width: 100%;
    min-width:330px;
    overflow:hidden;
    position:absolute;
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
    margin-right:7%;
}


/* 卡号  密码   */
.kahaomima{
    /* display:flex; */
    width:100%;
    height:1rem;
    margin-top:-.15rem;
    /* background-color:#FFFFFF; */
}
.kahao{
    display:flex;
    align-items:center;
    width:100%;
    height:.5rem;
    margin-top:.3rem;
    background-color:#FFFFFF;
    font-size:.15rem;
/*     border:1px solid black; */
}
.kahao input,.mima input{
/* border: 1px solid black; */
width:80%;
height:.5rem;
margin-left:9%;
}
.kahao label,.mima label{
    margin-left: 3%;
}
.mima{
    display:flex;
    align-items:center;
    width:100%;
    height:.5rem;
    margin-top:.02rem;
    background-color:#FFFFFF;
    font-size:.15rem;
}

/* 添加 */

.tianjia{
    display:flex ;
    justify-content:center;
    align-items:center;
    width:96%;
     min-width:330px;
    height:.5rem;
    margin: 2%;
    margin-top:8%;
    background:-webkit-linear-gradient(top,#ff7c20,#ff7900);
    padding-left:.1rem;
    font-size:.2rem;
    color:#FFFFFF;
}
.tianjia-3{
    display:flex ;
    justify-content:center;
    align-items:center;
    width:96%;
    height:.5rem;
    margin: 2%;
    margin-top:-5%;
    /* color: #999; */
    font-size:.12rem;
}
.tianjia-3-1{
    /* margin-left: %; */
}

/* 数据 */
.shuju{
    width:100%;
    height:3.8rem;
    background-color:#FFFFFF;
    text-align:center;
}
.shuju-1{
     width:100%;
     height:.5rem;
     text-align:center;
}
.shuju-2{
    display:flex;
    height:.5rem;
    padding-top:.1rem;
    justify-content:space-around;
    font-size:.16rem;
}
.shuju-2 li:hover{
    border-bottom:.02rem solid #ff6900;
}
.shuju-3{
    margin-top: 20%;
}
.shuju-3 i{
    width: 140px;
    height: 110px;
    background-position: -60px -123px;
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://m.static.laiyifen.com/images/icons4.png?v=1498042871535);
    background-repeat: no-repeat;
    background-size: 335px auto;
}
</style>