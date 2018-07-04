<template>
    <div>
      <div class="scroll-div">
        <ul>
          <li>
            <img :src="img.picUrl" v-for="(img,index) in imgs" v-show="index === mark" :key="index" alt="">
          </li>
        </ul>
      </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      imgs: [],
      mark: 1
    };
  },
  methods: {
    getImgs() {
      axios.get("http://localhost:3000/banner").then(res => {
        console.log(res.data.banners);
        this.imgs = res.data.banners;
      });
    }
  },
  mounted() {
    this.getImgs();
  }
};
</script>

<style lang="scss" scoped>
.scroll-div {
  padding-left: 1px;
  width: 412 * 8px;
  overflow: hidden;
  img {
    width: 412px;
  }
}
</style>


