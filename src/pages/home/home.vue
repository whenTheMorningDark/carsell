/* eslint-disable camelcase */
<template>
  <div class="home">
    <scroll
      class="scroll-wrap"
      ref="wrap"
      :data="HomeRecommend"
      @scrollEnd="scrollEnd"
      :probeType="2"
    >
      <div>
        <home-header></home-header>
        <slider v-if="this.HomeBanner.length>0" :sliderData="HomeBanner"></slider>
        <home-nav v-if="this.HomeNav.length>0" :HomeNav="HomeNav"></home-nav>
        <home-recommend v-if="this.HomeRecommend.length>0" :HomeRecommend="HomeRecommend"></home-recommend>
      </div>
    </scroll>
    <loading
      v-if="this.HomeRecommend.length===0 || this.HomeBanner.length === 0  || this.HomeNav.length === 0"
    ></loading>
  </div>
</template>

<script>
import HomeHeader from "./components/HomeHeader";
import HomeNav from "./components/HomeNav";
import HomeRecommend from "./components/HomeRecommend";
import Slider from "base/slider/slider";
import Scroll from "base/scroll/Scroll";
import { getHomeBanner, getHomeNav, getHomeRecommend } from "api/home";
import Loading from "base/loading";
import { mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      HomeBanner: [],
      HomeNav: [],
      HomeRecommend: [],
      top: 0
    };
  },
  created() {
    this._getHomeBanner();
    this._getHomeNav();
    this._getHomeRecommend();
  },
  computed: {
    ...mapGetters(["scrollTop"])
  },
  watch: {},
  methods: {
    _getHomeBanner() {
      getHomeBanner().then(res => {
        this.HomeBanner = res.data.message;
        // console.log(this.HomeBanner);
      });
    },
    _getHomeNav() {
      getHomeNav().then(res => {
        this.HomeNav = res.data.message;
      });
    },
    _getHomeRecommend() {
      getHomeRecommend().then(res => {
        this.HomeRecommend = res.data.message;
        // console.log(res.data);
      });
    },
    scrollEnd(pos) {
      this.top = pos.y;
    },
    ...mapMutations(
      // eslint-disable-next-line camelcase
      { set_scroll_top: "SET_SCROLL_TOP" }
    )
  },
  activated() {
    this.$nextTick(() => {
      this.$refs.wrap.refresh(); // 需要添加，要不然就出问题了
      this.$refs.wrap.scrollTo(this.scrollTop);
    });
  },
  beforeRouteLeave(to, from, next) {
    // 离开的时候存储scroll_top到vuex中
    this.set_scroll_top(this.top);
    next();
  },
  mounted() {
    // console.log(1);
  },
  components: {
    HomeHeader,
    Slider,
    HomeNav,
    HomeRecommend,
    Scroll,
    Loading
  }
};
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .scroll-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
