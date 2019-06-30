<template>
  <div class="login">
    <button @click="login">登录</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    login() {
      console.log(1);
      this.$Alert({
        content: "666",
        duration: 1,
        type: "success"
      });
    }
  }
};
</script>

<style scoped lang="scss">
</style>
