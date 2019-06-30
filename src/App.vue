<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive" class="child-view"></router-view>
      </keep-alive>
    </transition>
    <transition :name="transitionName">
      <router-view v-if="!$route.meta.keepAlive" class="child-view"></router-view>
    </transition>
    <tab v-if="isTabShow"></tab>
  </div>
</template>

<script>
import Tab from "components/Tab/tab";
export default {
  name: "App",
  data() {
    return {
      transitionName: "slide-left",
      isTabShow: true
    };
  },
  components: {
    Tab
  },
  beforeRouteUpdate(to, from, next) {
    // 判断是向左还是向右滑
    let isBack = this.$router.isBack;
    if (isBack) {
      this.transitionName = "slide-right";
    } else {
      this.transitionName = "slide-left";
    }
    this.$router.isBack = false;
    next();
  },
  watch: {
    $route(to, from) {
      // 判断是否出现底部tab
      if (to.meta.require) {
        this.isTabShow = false;
      } else {
        this.isTabShow = true;
      }
    }
  }
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
  background: #eeeeee;
}
.child-view {
  position: absolute;
  width: 100%;
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}
.slide-left-enter,
.slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(50px, 0);
  transform: translate(50px, 0);
}
.slide-left-leave-active,
.slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-50px, 0);
  transform: translate(-50px, 0);
}
</style>
