<template>
  <div class="detail">
    <c-header></c-header>
    <scroll :data="HomeBanner">
      <slider v-if="this.HomeBanner.length>0">
        <div v-for="(item,index) in HomeBanner"
             :key="index">
          <a href="#">
            <img :src="item.imgUrl">
          </a>
        </div>
      </slider>
    </scroll>
  </div>
</template>

<script>
import cHeader from "components/CommonHeader/CommonHeader"
import Slider from "base/slider/slider"
import Scroll from "base/scroll/Scroll"
import { getHomeBanner, getHomeNav, getHomeRecommend } from "api/home"
export default {
  data () {
    return {
      HomeBanner: []
    };
  },
  components: {
    cHeader,
    Slider,
    Scroll
  },
  created () {
    this._getHomeBanner();
  },
  methods: {
    _getHomeBanner () {
      getHomeBanner().then(res => {
        this.HomeBanner = res.data.message
      })
    }
  }
};
</script>

<style scoped lang="scss">
.detail {
  height: 100%;
  overflow: hidden;
}
</style>
