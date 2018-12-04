<template>
  <div>
    <Header></Header>
    <Tab></Tab>
  </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import Tab from "../../components/Tab/Tab.vue";
import axios from "axios";
export default {
  components: {
    Header,
    Tab
  },
  data() {
    return {
      songLists: [],
      imgs: [],
      imgHeight: 0
    };
  },
  methods: {
    getSonglist() {
      axios.get("http://localhost:3000/personalized").then(res => {
        this.songLists = res.data.result;
        console.log(this.songLists);
      });
    },
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
          that.imgHeight =
            (img.naturalHeight * realWidth * 0.95) / img.naturalWidth;
        };
      });
    }
  },
  mounted() {
    this.getSonglist();
    this.getImgs();
  }
};
</script>

<style lang="scss" scoped>
</style>



