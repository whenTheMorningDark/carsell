<template>
  <div class="car-message">
    <div class="car-man-avatar">
      <img :src="avatar" />
    </div>
    <div class="car-man-detail">
      <h4 class="man">车主周先生</h4>
      <div class="car-man-desc">
        <div class="item">
          <p class="num">100%</p>
          <p class="num-text">接单率</p>
        </div>
        <div class="item">
          <p class="num">100%</p>
          <p class="num-text">接单率</p>
        </div>
        <div class="item">
          <p class="num">100%</p>
          <p class="num-text">接单率</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatar from "common/img/avatar.png";
export default {
  data() {
    return {
      avatar
    };
  }
};
</script>

<style scoped lang="scss">
.car-message {
  height: 3.23rem;
  display: flex;
  background: #fff;
  padding: 0.13rem 0.28rem;
  justify-content: space-between;
  .car-man-avatar {
    width: 1.89rem;
    height: 2.11rem;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 1.64rem;
      height: 1.64rem;
    }
  }
  .car-man-detail {
    width: 4.52rem;
    // height: 1.64rem;
    padding-top: 0.24rem;
    .man {
      padding: 0.2rem 0;
      font-size: 0.32rem;
      color: #666;
      border-bottom: 1px solid #ddd;
    }
    .car-man-desc {
      display: flex;
      padding-top: 0.22rem;
      font-size: 0.2rem;
      color: #666;
      justify-content: space-between;
      .item {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
      }
    }
  }
}
</style>
