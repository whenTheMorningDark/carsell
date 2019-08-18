<template>
  <div class="detailDesc">
    <div class="detailDesc-title">
      <div class="title">
        <p class="type">{{data.product_name}}</p>
        <p class="desc">{{data.product_attr}}</p>
      </div>
      <div class="price">
        <span class="dprice">¥{{data.product_price}}/</span>
        <span class="day">天</span>
      </div>
    </div>
    <div class="detailDesc-remark">
      <div class="remark-item">
        <p class="itemL">
          <span>租期:</span>
          <span>{{data.product_time}}</span>
        </p>
        <p class="itemR">
          <span>押金:</span>
          <span>{{data.product_sprice}}</span>
        </p>
      </div>
      <div class="remark-item">
        <p class="itemL">
          <span>是否愿意送车上门:</span>
          <span>{{data.product_willing}}</span>
        </p>
        <p class="itemR">
          <span>车牌号:</span>
          <span>{{data.product_carnum}}</span>
        </p>
      </div>
      <div class="remark-item">
        <p class="itemL">
          <span>取车地点:</span>
          <span>{{data.product_caraddress}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style scoped lang="scss">
.detailDesc {
  width: 100%;
  height: 2.89rem;
  background: #fff;
  padding: 0 0.28rem;
  .detailDesc-title {
    display: flex;
    padding: 0.36rem 0.13rem 0.22rem 0.1rem;
    border-bottom: 1px solid #ddd;
    .title {
      flex: 2;
      .type {
        font-size: 0.32rem;
        color: #666;
        margin-bottom: 0.1rem;
      }
      .desc {
        font-size: 0.22rem;
        color: #999;
      }
    }
    .price {
      display: flex;
      color: #ff6b38;
      position: relative;
      .dprice {
        font-size: 0.34rem;
      }
      .day {
        font-size: 0.14rem;
        position: relative;
        top: 0.07rem;
      }
    }
  }
  .detailDesc-remark {
    padding: 0.23rem 0;
    color: #666;
    .remark-item {
      font-size: 0.24rem;
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.15rem;
    }
  }
}
</style>
