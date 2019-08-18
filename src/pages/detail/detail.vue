<template>
  <div class="detail">
    <c-header></c-header>
    <scroll class="scroll-wrap" ref="wrap" :data="HomeBanner" @scrollEnd="scrollEnd" :probeType="2">
      <div>
        <slider v-if="HomeBanner.length>0" :sliderData="HomeBanner"></slider>
        <detaildesc :data="detaildescData"></detaildesc>
        <!-- 车友评价 -->
        <carrate :data="carRate" v-if="carRate.rate_avatarname"></carrate>
        <!-- 车主留言 -->
        <carrate :data="carMessage" v-if="carRate.rate_avatarname"></carrate>
        <carmessage></carmessage>
        <div class="bottomBtn">
          <carButton></carButton>
        </div>
      </div>
    </scroll>
  </div>
</template>

<script>
import cHeader from "components/CommonHeader/CommonHeader";
import detaildesc from "./components/detailDesc";
import carrate from "./components/carRate";
import carmessage from "./components/carMessage";
import carButton from "./components/carButton";
import Slider from "base/slider/slider";
import Scroll from "base/scroll/Scroll";
import { getHomeBanner, getHomeNav, getHomeRecommend } from "api/home";
import { getDetail } from "api/detail";
export default {
  data() {
    return {
      HomeBanner: [],
      detaildescData: {},
      carRate: {
        rate_desc:
          "很新的车，很智能，车主耐心指导使用，非常不错的租车体验！ 车主耐心指导使用，非常不错的租车体验！",
        tIcon: "icon-liuyan",
        tTitle: "车主评价",
        tRightShow: "查看全部评价",
        tManAvatar: true
      },
      carMessage: {
        rate_desc:
          "为了你我身体健康着想，车内禁止吸烟，不能携带动物上车。本车有行车记录仪，导航，雷达，非常方便。送车时间控制在早上9点到晚上7点，其他时间只能自取，地点在金星大厦附近都行。谢谢配合！",
        tIcon: "icon-che",
        tTitle: "车主留言",
        tRightShow: "",
        tManAvatar: false
      },
      cacheId: []
    };
  },

  components: {
    cHeader,
    Slider,
    Scroll,
    detaildesc,
    carrate,
    carmessage,
    carButton
  },
  created() {
    const id = this.$route.params.id;
    this._getDetail(id);
  },
  methods: {
    _getDetail(id) {
      // this.HomeBanner = [];
      getDetail(id).then(res => {
        if (res.status === 200) {
          if (res.data.errno === 0) {
            const {
              banner,
              message,
              product_attr,
              product_caraddress,
              product_carnum,
              product_name,
              product_price,
              product_sprice,
              product_time,
              product_willing,
              rate_avatar,
              rate_avatarname,
              rate_desc,
              rate_time
            } = res.data.data;
            this.HomeBanner = banner;
            // console.log(this.HomeBanner);
            this.detaildescData = {
              product_name,
              product_attr,
              product_caraddress,
              product_carnum,
              product_price,
              product_willing,
              product_time,
              product_sprice
            };
            this.carRate = Object.assign(this.carRate, {
              rate_desc,
              rate_avatar,
              rate_avatarname,
              rate_time
            });
            this.carMessage = Object.assign(this.carMessage, {
              rate_desc: message
            });
          }
        }
      });
    },
    scrollEnd() {}
  },
  beforeRouteEnter(to, from, next) {
    if (to.path.includes("/detail")) {
      next(vm => {
        if (vm.cacheId.length === 0) {
          vm.cacheId.push(to.params.id * 1);
        } else {
          let newCacheId = vm.cacheId.filter(v => {
            return v === to.params.id * 1;
          });
          if (newCacheId.length > 0) {
            return;
          }
          vm.cacheId.push(to.params.id * 1);
        }
      });
    }
  },
  activated() {
    const id = this.$route.params.id;
    if (!id) {
      return;
    }
    let loadId = this.cacheId.filter(v => {
      return v === id * 1;
    });
    if (loadId.length > 0) {
      return;
    }
    this._getDetail(id);
  }
};
</script>

<style scoped lang="scss">
.detail {
  height: 100%;
  overflow: hidden;
  .scroll-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .bottomBtn {
      display: flex;
      position: relative;
      width: 100%;
    }
  }
}
</style>
