<template>
      <div class="shop_container">
        <ul class="shop_list" v-if="shops.length">
            <li class="shop_li border-1px" v-for="(item, index) in shops" :key="index" >
            <a>
              <div class="shop_left">
                <img class="shop_img" :src="item.image_path"/>
              </div>
              <div class="shop_right">
                <section class="shop_detail_header">
                  <h4 class="shop_title">{{item.name}}</h4>
                  <ul class="shop_detail_ul">
                    <li class="supports" v-for="item in item.supports" :key="item.id"></li>
                  </ul>
                </section>


                <section class="shop_raring_order">
                  <section class="shop_rating_order_left">
                    <!-- <div class="star star-36">
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item on"></span>
                      <span class="star-item half"></span>
                    </div> -->
                    <Star :score="item.rating" :size="24"/>

                    <div class="rating_section">{{item.rating}}</div>
                    <div class="order_section">月售{{item.recent_order_num}}单</div>
                  </section>
                  <section class="shop_rating_order_right">
                    <span class="delivery_style delivery_left">{{item.delivery_mode.text}}</span>
                    <!-- <span class="delivery_style delivery_right">准时到达</span> -->
                  </section>
                </section>
                <section class="shop_distance">
                  <p class="shop_delivery_msg">
                    <span>¥{{item.float_minimum_order_amount}}元起送</span>
                    <span class="segmentation">/</span>
                    <span>{{item.piecewise_agent_fee.tips}}</span>
                  </p>
                </section>
              </div>
            </a>
          </li>
        </ul>
      </div>
</template>

<script>
import{mapState} from 'vuex'
import Star from '../star/star.vue'
export default{
  components:{ 
    Star 
  },
  data(){
    return{
      imgBaseUrl:'http://cangdu.org:8001/img/'
    }
  },
  computed:{
      ...mapState(['shops'])
  }
}
</script>