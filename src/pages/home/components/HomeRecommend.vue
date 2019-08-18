<template>
  <div class="homeRecommend">
    <div class="recommend-title">
      <span>汽车推荐</span>
    </div>
    <div class="recommend-wrap">
      <router-link
        class="recommend-item"
        v-for="(item,index) in HomeRecommend"
        :key="index"
        tag="div"
        :to="'/detail/'+item.pid"
      >
        <div class="car-img">
          <img :src="item.imgUrl" />
        </div>
        <div class="car-detail">
          <p class="car-title">{{item.title}}</p>
          <p class="car-desc">{{item.desc}}</p>
          <p class="count">
            已租用
            <span>{{item.count}}</span>人
          </p>
          <p class="car-price">
            <span class="price">{{item.price}}</span>
            <span class="day">/天</span>
          </p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    HomeRecommend: {
      type: Array,
      default: []
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.homeRecommend {
  background: #fcfcfc;
  margin-top: 0.2rem;
  .recommend-title {
    height: 0.82rem;
    line-height: 0.82rem;
    font-size: 0.28rem;
    color: #666666;
    padding-left: 0.28rem;
  }
  .recommend-wrap {
    // border-top: 1px solid #ddd;
  }
  .recommend-item {
    display: flex;
    // border-bottom: 1px solid #ddd;
    padding: 0.15rem 0.28rem;
    position: relative;
    .car-img {
      width: 1.69rem;
      height: 1.21rem;
      margin-right: 0.25rem;
      img {
        width: 100%;
      }
    }
    .car-detail {
      flex: 1;
      position: relative;
      .car-title {
        font-size: 0.28rem;
        color: #666666;
        margin-bottom: 0.18rem;
      }
      .car-desc {
        font-size: 0.2rem;
        color: #999;
        margin-bottom: 0.32rem;
      }
      .count {
        font-size: 0.2rem;
        color: #999;
        span {
          color: #ff784d;
        }
      }
      .car-price {
        position: absolute;
        bottom: 0.54rem;
        color: #ff6b38;
        right: 0.28rem;
        font-size: 0;
        .price {
          font-size: 0.34rem;
          font-weight: bold;
        }
        .day {
          font-size: 0.24rem;
        }
      }
    }
  }
}
</style>
