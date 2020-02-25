<template>
    <div class="address">
       <!-- 头部 -->
       <div v-show="show">
            <div class="head">
                <div class="head-1">
                    <span onclick="window.history.go(-1)"></span>
                    <h1>地址管理</h1>
                    <i></i>
                </div>
            </div>
            <!-- 中部 -->
            <div class="zhongbu" v-show="show">
                <div class="zhongbu-1">
                    <i></i>
                    <p class="zhongbu-2">还没有收货地址哦...</p>
                    <p class="zhongbu-3" @click="qidong()">
                        <button type="button">添加收货地址</button>
                    </p>
                </div>
            </div>
        </div>
        <!-- 新增地址 -->
        <div v-show="!show">

        <div class="head">
                <div class="head-1">
                    <span onclick="window.history.go(-1)"></span>
                    <h1>新增收货地址</h1>
                    <i></i>
                </div>
        </div>

        <div class="shxx">
            <div class="shxx-1">
                    <div class="shxx-2">
                        <input type="text" placeholder="收货人姓名" maxlength="20">
                    </div>

                    <div class="shxx-2">
                        <input type="tel" placeholder="联系方式" maxlength="20">
                    </div>

                    <div class="shxx-4 shxx-2">
                        <span class="cb">所在地区</span>
                        <span class="shxx-5">
                            <i class="shxx-6"></i>
                        </span>
                    </div>

                    <div class="shxx-2">
                        <input type="text" placeholder="详细地址" maxlength="40">
                    </div>

                    <div class="shxx-8">
                        <p>设为默认地址<span class="shxx-9">注：每次下单时会使用该地址</span></p>
                        <label class="shxx-10"><input type="checkbox"></label>
                    </div>

            </div>




            <div class="denglu" v-on:click="qidong">
                <span class="denglu-1" >保存</span>
            </div>


        </div>
    </div>


    </div>
</template>


<script>
    export default{
        nane:"adderss",
        data(){
            return{
                show:true
            }
        },
        methods:{

        qidong(){
            this.show=!this.show
        }


    }


    }

</script>


<style scoped>
.address{
    background-color:#f0f0f0;
    height:100%;
    width:100%;
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
    width:100%;
    height:100%;
    margin-top: .5rem;
}
.zhongbu-1{

    margin-left:35%;
}
.zhongbu-1 i{
    width: 1.42rem;
    height: 1.29rem;
    background: url(http://m.static.laiyifen.com/images/no-address.png?v=1498042871535) center;
    display: inline-block;
    background-size: 100%;
}
.zhongbu-2{
    margin-left: 8%;
    margin-top:5%;
}
.zhongbu-3{
    margin-left: 8%;
    margin-top:5%;
}
.zhongbu-3 button{
    height: .25rem;
    width:1rem;
    border:none;
    border-radius:.03rem;
    background-color:#ff6900;
    color:#FFFFFF;
    font-size:.12rem;
}

/* 新增地址 */
.shxx-2{
    width:100%;
    height:.5rem;
    line-height:.5rem;
    background-color:#FFFFFF;
    border-top:.01rem solid #EAEAEA;
    padding:0 .2rem;
}
.shxx-2 input{
    width:100%;
    height:.4rem;
}
.shxx-4{
    display:flex;
    justify-content:space-between;
    color: #757575;
}
.shxx-6{
    width: .10rem;
    height: .15rem;
    background-position: -.36rem -2.48rem;
    display: inline-block;
    vertical-align: middle;
    background-image: url(http://m.static.laiyifen.com/images/icons2.png?v=1498042871535);
    background-repeat: no-repeat;
    background-size: 3.75rem auto;
}
.shxx-8{
    display:flex;
    justify-content:space-between;
    width:100%;
    min-width:3rem;
    overflow: hidden;
    height:.5rem;
    line-height:.5rem;
    background-color:#FFFFFF;
    border-top:.01rem solid #EAEAEA;
    padding:0 .2rem;
    color: #757575;
}
.shxx-10{
    margin-right:  .3rem;
}
.shxx-10 input{
    width: .52rem;
    height: .32rem;
    position: absolute;
    border: none;
    margin-top:.1rem;
}
/* 登录 */

.denglu{
    display:flex ;
    justify-content:center;
    align-items:center;
    width:100%;
    min-width:330px;
    height:.5rem;
    margin-top:8%;
    background:-webkit-linear-gradient(top,#ff7c20,#ff7900);
    padding-left:.1rem;
    font-size:.2rem;
    color:#FFFFFF;
}


</style>