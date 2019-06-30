<template>
  <i :class="'iconfont'+' '+ name"></i>
</template>

<script>
export default {
  name: "KaIcon",
  props: {
    name: String
  }
};
</script>

<style scoped lang="scss">
</style>
