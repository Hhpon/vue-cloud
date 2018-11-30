<template>
  <div>
    <div class="carousel-wrap">
      <transition-group tag="ul" name="list" class="scroll-ul">
        <li v-for="(img,index) in imgs" v-show="index === mark" :key="index">
          <a :href="img.url">
            <img :src="img.imageUrl">
          </a>
        </li>
      </transition-group>
      <div>1324</div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { setInterval } from "timers";
export default {
  data() {
    return {
      mark: 0,
      imgs: [],
      name: ""
    };
  },
  created() {},
  mounted() {
    this.getImgs();
    this.name = "image";
    this.play();
  },
  methods: {
    getImgs() {
      axios.get("http://localhost:3000/banner").then(res => {
        this.imgs = res.data.banners;
        console.log(res.data.banners);
      });
    },
    autoplay() {
      this.mark++;
      var imgsLength = this.imgs.length;
      if (this.mark === imgsLength) {
        this.mark = 0;
      }
    },
    play() {
      console.log("play");
      setInterval(this.autoplay, 3000);
    }
  }
};
// 由于无法获取到图片的高度，放弃这个方法
</script>
<style lang="scss" scoped>
.carousel-wrap {
  position: relative;
  width: 100%;
  height: 200px;
  overflow: hidden;
  background-color: black;
  .scroll-ul {
    width: 100%;
    height: 100%;
    li {
      position: absolute;
      width: 100%;
      height: 100%;
      img {
        height: 100%;
        width: 100%;
      }
    }
  }
}

.list-enter-to {
  transition: all 3s ease;
  transform: translateX(0);
}
.list-leave-active {
  transition: all 3s ease;
  transform: translateX(-100%);
}
.list-enter {
  transform: translateX(100%);
}
.list-leave {
  transform: translateX(0);
}
</style>


