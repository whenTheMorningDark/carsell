<template>
  <div class="detail">
    <c-header></c-header>
    <scroll
      class="scroll-wrap"
      ref="wrap"
      :data="detail.HomeBanner"
      @scrollEnd="scrollEnd"
      :probeType="2"
    >
      <div>
        <slider :sliderData="detail.HomeBanner"></slider>
        <detaildesc :data="detail.detaildescData"></detaildesc>
        <!-- 车友评价 -->
        <carrate :data="detail.carRate"></carrate>
        <!-- 车主留言 -->
        <carrate :data="detail.carMessage"></carrate>
        <carmessage></carmessage>
        <div class="bottomBtn">
          <carButton bgcolor="darkyellow" title="联系客服" @click="tel"></carButton>
          <carButton bgcolor="darkorange" title="立即租用"></carButton>
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
import { mapMutations, mapGetters } from "vuex";
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
      // firstLoad: true
    };
  },
  computed: {
    ...mapGetters("detail", ["detail", "localDetail"])
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
  // created() {
  //   this.firstLoad = false;
  //   const id = this.$route.params.id;
  //   console.log(id);
  //   let filterData = this.localDetail.filter(v => {
  //     return v.id === id;
  //   });
  //   console.log(filterData);
  //   this._getDetail(id);
  // },
  methods: {
    _getDetail(id) {
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
            let detail = {
              id: id,
              HomeBanner: this.HomeBanner,
              detaildescData: this.detaildescData,
              carRate: this.carRate,
              carMessage: this.carMessage
            };
            console.log(detail);
            this.setLocalDetail(detail);
          }
        }
      });
    },
    ...mapMutations("detail", ["setLocalDetail"]),
    tel() {
      console.log("tel");
    },
    scrollEnd() {}
  },
  activated() {
    const id = this.$route.params.id;
    // console.log(this.localDetail[0]);
    if (this.localDetail.length === 0) {
      // 说明没有缓存数据，发起请求
      if (!id) {
        return;
      }
      this._getDetail(id);
    } else {
      // 有缓存的数据，这个数组可能有也可能没有缓存数组
      let isHaveId = this.localDetail.some(v => {
        return v.id * 1 === id * 1;
      });
      console.log(isHaveId);
      if (isHaveId) {
        console.log(this.localDetail);
        let haveIndex = this.localDetail.findIndex(v => v.id * 1 === id * 1);
        this.setLocalDetail(this.localDetail[haveIndex]);
      } else {
        this._getDetail(id);
      }
    }
  }
};
</script>

<style scoped lang="scss">
.detail {
  height: 100%;
  overflow: hidden;
  padding-bottom: 0.6rem;
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
