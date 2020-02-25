<template>

<div class="goodDetail-header">
    <div class="icon-return" @click="goBack()"><</div>
    <ul class="tab-menu">
        <li class="tab-menu-item current">商品</li>
        <li class="tab-menu-item">详情</li>
        <li class="tab-menu-item">评价</li>
    </ul>
   
</div>

</template>

<script>
export default {
 	name: 'GoodDetailHeader',
 	data() {
        return {

        }
 	},
    methods: {
        goBack() {
            history.back()
        }
    }
}
   
</script>


<style lang="less" scoped>
.goodDetail-header{
    width:100%;
    background-color: #fff;
    position: relative;
    .icon-return{
        color: #ff6900!important;
        position: absolute;
        z-index: 10;
        top: 0;
        left: .05rem;
        font-size: .33rem;
        width: .32rem;
        height: .44rem;
        line-height: .44rem;
        text-align: center;
    }
    .tab-menu{
        margin: 0 auto;
        height: .45rem;
        text-align: center;
        .tab-menu-item{
            display: inline-block;
            color: #777;
            height: .45rem;
            line-height: .44rem;
            font-weight: 700;
            font-size: .16rem;
            margin: 0 .20rem;
            border-bottom: .03rem solid transparent;
        }
        .tab-menu-item.current{
            color: #ff6900;
            border-color: #ff6900;
        }
    }
    .tab-menu:after{
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        content: '';
        width: 100%;
        height: 1px;
        background-color: #e0e0e0;
    }
    
}
</style>
