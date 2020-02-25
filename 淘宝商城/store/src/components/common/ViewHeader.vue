<template>

<div class="view-header">
    <div class="icon-return" @click="goBack()"></div>
    <div class="view-title tc">{{alldata.categoryTreeResult[0].name}}</div>
    <i class="icons dots-icon" :class="{'clicked':vc.clicked}" @click="toggleClass()"></i>
</div>

</template>

<script>
import vc from './view.js'
export default {
 	name: 'ViewHeader',
    props: ['alldata'],
 	data() {
        return {
            vc: vc.getVc(),
        }
 	},
    methods: {
        goBack() {
            history.back();
        },
        toggleClass() {
            vc.showNav();
            // this.clicked = !this.clicked;
            // console.log(vc.getVc().clicked);
        }
        
    }
}
   
</script>


<style lang="less" scoped>
.view-header{
    width:100%;
    background-color: #fff;
    position: relative;
    .icon-return{
         background: no-repeat center center;
        background-image: url(../../assets/左箭头.png);
       
        background-size: auto 60%;

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
    .view-title{
        margin: 0 auto;
        height: .45rem;
        line-height: .44rem;
        font-size: .18rem;
    }
    
    .dots-icon{
        position: absolute;
        z-index: 10;
        top: 0;
        right: .07rem;
        width: .44rem;
        height: .44rem;
        background-size: 3.75rem;
        background-position: -.3rem -1.8rem;
        transition: transform .3s;
    }
    .dots-icon.clicked{
        transform: rotateZ(90deg);
    }
   
}
.view-header:after{
    position: absolute;
    z-index:110;
    bottom: 0;
    left: 0;
    right: 0;
    content: '';
    width: 100%;
    height: 1px;
    background-color: #e0e0e0;
}
</style>
