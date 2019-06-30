<template>
  <div class="tab">
    <router-link class="item" v-for="(item,index) in tabData" :key="index" tag="div" :to="item.url">
      <ka-icon :name="item.icon"></ka-icon>
      <span class="icon-text">{{item.iconText}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabData: [
        { url: "/home", icon: "icon-shouye", iconText: "首页" },
        { url: "/tel", icon: "icon-kefu", iconText: "客服" },
        { url: "/order", icon: "icon-dingdan", iconText: "订单" },
        { url: "/my", icon: "icon-wode", iconText: "我的" }
      ]
    };
  },
  computed: {}
};
</script>

<style scoped lang="scss">
.tab {
  width: 100%;
  height: 0.98rem;
  position: absolute;
  bottom: 0;
  right: 0;
  left: 0;
  font-size: 0.2rem;
  background: #fcfcfc;
  border-top: 1px solid #ddd;
  display: flex;
  .item {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #8c8c8c;
    .iconfont {
      font-size: 0.45rem;
      margin-bottom: 0.12rem;
    }
    &.router-link-active {
      color: $active-color;
    }
  }
}
</style>
