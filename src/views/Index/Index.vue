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
      imgs: []
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
        console.log(res.data.banners);
      });
    }
  },
  mounted() {
    this.getSonglist();
    this.getImgs();
  }
};
</script>


