<template>
  <div class="bottomBtn">
    <button class="carBtn btn-darkyellow" @click="btnClick">联系客服</button>
    <button class="carBtn btn-darkorange" @click="btnClick">立即租用</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped lang="scss">
.carBtn {
  width: 50%;
  height: 0.98rem;
  color: #fff;
  border: none;
  font-size: 0.34rem;
  &.btn-darkyellow {
    background: #d9b765;
  }
  &.btn-darkorange {
    background: #ff6b38;
  }
}
</style>
