<template>
  <div>
    <div class="carousel-wrap">
      <transition-group tag="ul" name="list" class="scroll-ul" :style="{height: imgHeight+'px'}">
        <li v-for="(img,index) in imgs" v-show="index === mark" :key="index">
          <a :href="img.url">
            <img :src="img.imageUrl" ref="img">
          </a>
        </li>
      </transition-group>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      mark: 1,
      imgs: [],
      imgHeight: 0,
      timer: ""
    };
  },
  beforeCreate() {
    // this.getImgs();
    axios.get("http://localhost:3000/banner").then(res => {
        this.imgs = res.data.banners;
        let realWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        let img = new Image();
        img.src = res.data.banners[0].imageUrl;
        let that = this;
        img.onload = function() {
          that.imgHeight = (img.naturalHeight * realWidth) / img.naturalWidth;
        };
      });
  },
  created() {
    // this.getImgs();
  },
  mounted() {
    this.$nextTick(() => {
      this.timer = setInterval(this.autoplay, 3000);
    });
  },
  methods: {
    getImgs() {
      axios.get("http://localhost:3000/banner").then(res => {
        this.imgs = res.data.banners;
        let realWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        let img = new Image();
        img.src = res.data.banners[0].imageUrl;
        let that = this;
        img.onload = function() {
          that.imgHeight = (img.naturalHeight * realWidth) / img.naturalWidth;
        };
      });
    },
    autoplay() {
      this.mark++;
      if (this.mark === this.imgs.length) {
        this.mark = 0;
      }
    },
    play() {
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
  transition: all 0.5s ease;
  transform: translateX(0);
}
.list-leave-active {
  transition: all 0.5s ease;
  transform: translateX(-100%);
}
.list-enter {
  transform: translateX(100%);
}
.list-leave {
  transform: translateX(0);
}
</style>


