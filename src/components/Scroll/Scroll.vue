<template>
  <div>
    <div class="carousel-wrap">
      <transition-group tag="ul" name="list" class="scroll-ul">
        <li v-for="(img,index) in imgs" v-show="index === mark" :key="index">
          <a :href="img.url">
            <img :src="img.imageUrl" @load="loadHandle" :height="imgHeight+'px'" ref="img">
          </a>
        </li>
      </transition-group>
    </div>
    <button @click="getHeight">1241241243</button>
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
      name: "",
      imgHeight: 0
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
      setInterval(this.autoplay, 3000);
    },
    getHeight() {
      console.log(this.$refs.img[0].naturalHeight);
      this.imgHeight = this.$refs.img[0].naturalHeight;
    },
    loadHandle(){
      console.log('加载完毕');
    }
  }
};
// 由于无法获取到图片的高度，放弃这个方法
</script>
<style lang="scss" scoped>
.carousel-wrap {
  position: relative;
  width: 100%;
  overflow: hidden;
  background-color: black;
  .scroll-ul {
    width: 100%;
    li {
      position: absolute;
      width: 100%;
      img {
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


