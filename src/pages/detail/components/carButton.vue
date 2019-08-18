<template>
  <button
    class="carBtn"
    :class="[bgcolor === 'default' ? 'btn-default' : `btn-${bgcolor}`]"
    @click="btnClick"
  >{{title}}</button>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    bgcolor: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    }
  },
  methods: {
    btnClick() {
      this.$emit("click");
    }
  }
};
</script>

<style scoped lang="scss">
.carBtn {
  width: 50%;
  height: 0.98rem;
  color: #fff;
  border: none;
  font-size: 0.34rem;
  &.btn-default {
    background: #ddd;
  }
  &.btn-darkyellow {
    background: #d9b765;
  }
  &.btn-darkorange {
    background: #ff6b38;
  }
}
</style>
