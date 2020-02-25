<template>
    <div class="order1">
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