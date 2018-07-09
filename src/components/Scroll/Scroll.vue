<template>
    <div>
      <transition-group tag='ul' :name="name" class="scroll-ul">
        <li v-for="(img,index) in imgs" v-show="index === mark" :key="index">
          <a :href='img.url'>
            <img :src="img.picUrl">
          </a>
        </li>
      </transition-group>
      <div>1324</div>
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
  methods: {
    getImgs() {
      return new Promise((resolve, reject) => {
        axios.get("http://localhost:3000/banner").then(res => {
          console.log(res.data.banners);
          console.log("getImgs");
          this.imgs = res.data.banners;
          resolve("ok");
        });
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
  },
  async created() {
    await this.getImgs();
    this.name = "image";
  },
  mounted() {
    this.play();
  }
};
</script>

<style lang="scss" scoped>
.scroll-ul {
  width: 100%;
  position: relative;
  overflow: hidden;
  li {
    width: 100%;
    float: left;
    img {
      display: block;
      width: 100%;
    }
  }
  .image-enter-to {
    transition: all 1s ease;
    transform: translateX(0);
  }
  .image-leave-active {
    transition: all 1s ease;
    transform: translateX(-100%);
  }
  .image-enter {
    transform: translateX(100%);
  }
  .image-leave {
    transform: translateX(0);
  }
}
</style>


