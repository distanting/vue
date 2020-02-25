 <template>
    <div class="register">
         <!-- 头部 -->
        <div class="head">
            <div class="head-1">
                <span onclick="window.history.go(-1)"></span>
                <h1>注册</h1>
               <i></i>
            </div>
        </div>


    <!-- 手机号 -->
        <div class="iphone">
            <div class="iphone-1">
                <label>手机号</label>
               <input type="tel" maxlength="11" placeholder="请输入手机号" v-verify="username" v-model="username">
                <label class="iponeyyanzheng" v-verified="verifyError.username"></label>
            </div>
        </div>

    <!-- 验证码 -->
        <div class="Verification">
            <div class="Verification-1">
                <label>验证码</label>
                <input type="tel" v-verify="pwd" v-model="pwd" maxlength="11" placeholder="请输入短信验证码">
                <label class="iponeyyanzheng" v-verified="verifyError.pwd"></label>
            </div>
            <div class="Verification-2">
                <span>|</span>
                <button type="button"><span>获取验证码</span></button>
            </div>
        </div>
    <!-- 下一步 -->
        <div class="denglu" v-on:click="submit">
            <span class="denglu-1">下一步</span>
        </div>
        <div class="denglu-3">
            <span class="denglu-3-1">注册则代表同意<i>来伊份用户协议</i></span>
            <span class="denglu-3-2">联系客服</span>
        </div>


     </div>
 </template>



 <script >
     export default{
                data(){
            return {
                username:"",
                pwd:""
            }
        },
        methods:{
            submit:function(){
            if(this.$verify.check()){
                //通过验证
                location.href ="/#/mine";
            }
        }
    },
    verify:{
        username:[
            "required",
            {
                test:function(val){
                    if(val.length<11){
                        return false;
                    }
                    return true;
                },
                message:"手机号为11位数字"
            }
        ],
        pwd:[
            "required",
            {
                test:function(val){
                    if(val.length<6||val.length>6){
                        return false;
                    }
                    return true;
                },
                message:"验证码为6位数字"
            }

        ]



    },
    computed:{
        verifyError:function(){
            return this.$verify.$errors;
        }
    }

     }
 </script>



 <style scoped>
    /* 头部 */
.register{
    background-color:#f0f0f0;
    height:7.18rem;
    min-width:330px;
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
    margin-right:7%;
}

/* 手机号 */
.iphone{
    display:flex;
    align-items:center;
    width:90%;
     min-width:330px;
    height:.5rem;
    margin-top:.3rem;
    margin-left:5%;
    background-color:#FFFFFF;
    padding-left:.1rem;
    font-size:.15rem;
}
.iphone-1 input{
/* border: 1px solid black; */
width:3.13rem;
height:.5rem;
}
/* 验证码 */
.Verification{
    display:flex ;
    align-items:center;
    width:90%;
    min-width:330px;
    height:.5rem;
    margin-top:.3rem;
    margin-left:5%;
    background-color:#FFFFFF;
    padding-left:.1rem;
    font-size:.15rem;
}
.Verification-1 input{
    /* border:1px solid black; */
    width:2.1rem;
    height:.5rem;
}
.Verification-2 span:first-child{
    color:#BCBCBC;
    width:.01rem;
    height:.02rem;
}
.Verification-2 button{
    top: .155rem;
    right: .06rem;
    width: .9rem;
    line-height: 1;
    background-color:#FFFFFF;
    font-size: .14rem;
    text-align: center;
    padding-bottom: .03rem;
    padding-top: .03rem;
    display: inline-block;
    border:none;
}
.Verification-2 span:last-child{
color: #ff6900;
}
/* 下一步 */

.denglu{
    display:flex ;
    justify-content:center;
    align-items:center;
    width:90%;
     min-width:330px;
    height:.5rem;
    margin: 5%;
    margin-top:8%;
    background:-webkit-linear-gradient(top,#ff7c20,#ff7900);
    padding-left:.1rem;
    font-size:.2rem;
    color:#FFFFFF;
}
.denglu-3{
    display:flex ;
    justify-content:space-between;
    align-items:center;
    width:90%;
    height:.5rem;
    margin: 5%;
    margin-top:-7%;
    color: #999;
    font-size:.14rem;
}
.denglu-3-1{
    margin-left: 3%;
}
.denglu-3-1 i{
    color:#ff6900;
}
.denglu-3-2{
    margin-right: 3%;
}

.iponeyyanzheng{
    position:absolute;
    color:red;
    margin: 0 auto;
}


 </style>
