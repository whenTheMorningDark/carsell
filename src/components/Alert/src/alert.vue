<template>
  <transition name="fade">
    <div class="alert" v-if="notices.length>0">
      <div class="alert-main" v-for="item in notices" :key="item.name">
        <div class="alert-content" :class="[item.type ? item.type:'primary']">{{item.content}}</div>
      </div>
    </div>
  </transition>
</template>

<script>
let seed = 0;
function getUuid() {
  return "alert_" + seed++;
}
export default {
  data() {
    return {
      notices: []
    };
  },
  methods: {
    // alert添加方法
    add(notices) {
      const name = getUuid();
      let _notice = Object.assign(
        {
          name: name
        },
        notices
      );
      if (this.notices.length === 0) {
        this.notices.push(_notice);
        const duration = _notice.duration;

        setTimeout(() => {
          this.remove(name);
        }, duration * 1000);
      }
    },
    // 删除alert的方法
    remove(name) {
      const notices = this.notices;
      for (let i = 0; i < notices.length; i++) {
        if (notices[i].name === name) {
          this.notices.splice(i, 1);
          break;
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.alert {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  text-align: center;
  pointer-events: none;
}
.alert-main {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba($color: #000000, $alpha: 0.7);
}
.alert-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0.3rem;
  font-size: 0.14rem;
  background: $primary-color;
  color: $font-color;
  border-radius: 3px;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.2);
  &.success {
    background: $success-color;
  }
  &.warn {
    background: $warn-color;
  }
  &.info {
    background: $info-color;
  }
  &.error {
    background: $error-color;
  }
}

.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 0.2s;
}
.fade-leave-to {
  opacity: 0;
}
.fade-leave-active {
  transition: opacity 0.2s;
}
</style>
