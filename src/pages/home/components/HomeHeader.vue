<template>
  <div class="HomeHeader">
    <div class="LogoImg">
      <img :src="LogoImg"
           alt="">
    </div>
  </div>
</template>

<script>
import LogoImg from 'common/img/timelogo.png'
export default {
  data () {
    return {
      LogoImg: LogoImg
    };
  },
  computed: {

  },
  watch: {

  },
  methods: {

  },
  components: {

  }
};
</script>

<style scoped lang="scss">
.HomeHeader {
  width: 100%;
  height: 1.16rem;
  display: flex;
  align-content: center;
  justify-content: center;
  background: #fcfcfc;
  box-sizing: border-box;
  padding: 0.24rem 0 0.13rem 0;
  .LogoImg {
    width: 2.29rem;
    height: 0.79rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
