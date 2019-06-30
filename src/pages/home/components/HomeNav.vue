<template>
  <div class="homeNav">
    <div class="item"
         v-for="(item,index) in HomeNav"
         :key="index">
      <div class="img">
        <img :src="item.imgUrl">
      </div>
      <div class="detail">
        <p class="title">
          {{item.title}}
        </p>
        <p class="desc">
          {{item.desc}}
        </p>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'homeNav',
  props: {
    HomeNav: {
      type: Array,
      default: []
    }
  },
  data () {
    return {

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
.homeNav {
  width: 100%;
  height: 3.39rem;
  background: #fcfcfc;
  display: flex;
  text-align: center;
  box-sizing: border-box;
  padding: 0 0.17rem;
  .item {
    width: 2.33rem;
    height: 3.39rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    img {
      width: 1.59rem;
      height: 1.59rem;
      display: block;
    }
    .detail {
      margin-top: 0.19rem;
      .title {
        font-size: 0.32rem;
        color: #f68714;
        margin-bottom: 0.12rem;
      }
      .desc {
        font-size: 0.24rem;
        color: #999999;
      }
    }
  }
  .item:nth-child(2) {
    width: 2.49rem;
    border: none;
    border-right: 0.5px solid #dddddd;
    border-left: 0.5px solid #dddddd;
  }
}
</style>
