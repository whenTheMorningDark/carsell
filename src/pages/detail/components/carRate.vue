<template>
  <div class="car-rate">
    <div class="rate-title">
      <p class="rate-title-l">
        <ka-icon :name="data.tIcon"></ka-icon>
        <span class="rate">{{data.tTitle}}</span>
      </p>
      <p class="rate-title-r">
        <span>{{data.tRightShow}}</span>
      </p>
    </div>
    <div class="rate-man" v-show="data.tManAvatar">
      <div class="rate-man-l">
        <div class="rate-avatar"></div>
        <div class="man">
          <span>{{data.rate_avatarname}}</span>
        </div>
      </div>
      <div class="rate-man-r">
        <span>{{data.rate_time}}</span>
      </div>
    </div>
    <div class="rate-content">
      <p>{{data.rate_desc}}</p>
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
.car-rate {
  background: #fff;
  // height: 3.24rem;
  margin-top: 0.2rem;
  padding: 0 0.28rem 0.38rem 0.28rem;
  .rate-title {
    display: flex;
    justify-content: space-between;
    font-size: 0.24rem;
    color: #666;
    padding: 0.36rem 0 0.18rem 0;
    border-bottom: 1px solid #ddd;
    margin-bottom: 0.2rem;
    .rate-title-l {
      line-height: 0.28rem;
      .iconfont {
        position: relative;
        top: 0.06rem;
      }
      .rate {
        position: relative;
      }
    }
  }
  .rate-man {
    display: flex;
    justify-content: space-between;
    padding: 0 0 0.2rem 0;
    .rate-man-l {
      display: flex;
      flex: 1;
      .rate-avatar {
        width: 0.7rem;
        height: 0.7rem;
        border-radius: 50%;
        border: 1px solid #ddd;
        overflow: hidden;
      }
      .man {
        font-size: 0.28rem;
        color: #666;
        line-height: 0.7rem;
        margin-left: 0.1rem;
      }
    }
    .rate-man-r {
      font-size: 0.2rem;
      line-height: 0.7rem;
    }
  }
  .rate-content {
    overflow: hidden;
    p {
      font-size: 0.24rem;
      line-height: 0.35rem;
    }
  }
}
</style>
