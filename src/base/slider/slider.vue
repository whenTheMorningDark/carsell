<template>
  <div class="slider" ref="slider">
    <div class="slider-group" ref="sliderGroup" v-if="cSliderData.length>0">
      <div v-for="item in cSliderData" :key="item.imgUrl">
        <a href="#">
          <img :src="item.imgUrl" />
        </a>
      </div>
    </div>
    <div class="dots" v-if="cSliderData.length > 1">
      <span
        class="dot"
        v-for="(item,index) in cSliderData"
        :key="index"
        :class="{active:currentPageIndex === index}"
      ></span>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { addClass } from "common/js/dom";
export default {
  props: {
    loop: {
      type: Boolean,
      default: false
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    },
    sliderData: {
      type: Array,
      default: () => {
        return [];
      }
    }
  },
  data() {
    return {
      dots: [],
      currentPageIndex: 0
    };
  },
  computed: {
    cSliderData() {
      return this.sliderData.length > 0 ? this.sliderData : [];
    }
  },
  methods: {
    //设置宽度
    _setSliderWidth(isResize) {
      //设置宽度的思路
      /**
       * 1.首先获取sliderGroup下有多少个子元素div 并且下面的子元素div的宽度是等于slider的宽度
       * 2.内部中判断div元素是否含有slider-item 类名
       * 3.sliderGroup的总宽度等于slider-item的总和，即是slider-item.width+=
       *
       */
      if (!this.$refs.sliderGroup) {
        return;
      }
      this.children = this.$refs.sliderGroup.children;
      let width = 0;
      let sliderWidth = this.$refs.slider.clientWidth;
      for (let i = 0; i < this.children.length; i++) {
        let child = this.children[i];
        addClass(child, "slider-item");
        child.style.width = sliderWidth + "px";
        width += sliderWidth;
      }
      if (this.loop && !isResize && this.children.length > 1) {
        width += 2 * sliderWidth;
      }
      this.$refs.sliderGroup.style.width = width + "px";
    },
    //初始化
    _initSlider() {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        momentum: false,
        snap: {
          loop: this.loop,
          threshold: 0.3,
          speed: 400
        },
        snapSpeed: 400,
        bounce: false,
        stopPropagation: true,
        click: true,
        probeType: 2
      });
      //监听滚动结束事件
      this.slider.on("scrollEnd", () => {
        let pageIndex = this.slider.getCurrentPage().pageX; //获取当前的pageIndex
        this.currentPageIndex = pageIndex;
        if (this.autoPlay) {
          //监听滚动结束后 if autoplay 为true的时候，继续触发
          this._play();
        }
      });
      //监听滚动的过程清除定时器
      this.slider.on("scroll", () => {
        clearTimeout(this.timer);
      });
    },
    //自动播放
    _play() {
      clearTimeout(this.timer);
      this.timer = setTimeout(() => {
        this.slider.next();
      }, this.interval);
    }
  },
  components: {},
  mounted() {
    setTimeout(() => {
      this._setSliderWidth();
      this._initSlider();
      if (this.autoPlay) {
        this._play(); //自动播放
      }
    }, 20);
    window.addEventListener("resize", () => {
      if (!this.slider) {
        return;
      }
      this._setSliderWidth(true);
      this.slider.refresh();
    });
  },
  watch: {
    sliderData() {
      // 监听数据发生变化 改变banner的dom节点宽度
      this.$nextTick(() => {
        this._setSliderWidth(false);
      });
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  }
};
</script>

<style scoped lang="scss">
.slider {
  min-height: 1px;
  position: relative;
  .slider-group {
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    .slider-item {
      float: left;
      box-sizing: border-box;
      overflow: hidden;
      text-align: center;
      a {
        display: block;
        width: 100%;
        overflow: hidden;
        text-decoration: none;
      }
      img {
        display: block;
        width: 100%;
      }
    }
  }
  .dots {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 12px;
    text-align: center;
    font-size: 0;
    .dot {
      display: inline-block;
      margin: 0 4px;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: #fcfcfc;
    }
    .dot.active {
      background: #e8452d;
    }
  }
}
</style>
