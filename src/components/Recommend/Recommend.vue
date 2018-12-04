<template>
  <div>
    <div class="scroll-container">
      <div class="scroll-item"></div>
      <Scroll class="scroll-self"></Scroll>
    </div>
    <div class="recommend-list-header">推荐歌单</div>
    <ul class="songlist-ul">
      <li v-for="(songlist,index) in songLists" :key="index" class="songList-item">
        <img :src="songlist.picUrl">
        <div>{{songlist.name}}</div>
      </li>
    </ul>
  </div>
</template>
<script>
import Scroll from "../Scroll/Scroll.vue";
import axios from "axios";
export default {
  components: {
    Scroll
  },
  data() {
    return {
      songLists: []
    };
  },
  methods: {
    getSonglist() {
      axios.get("http://localhost:3000/personalized").then(res => {
        this.songLists = res.data.result;
        console.log(this.songLists);
      });
    }
  },
  mounted() {
    this.getSonglist();
  }
};
</script>


<style lang="scss" scoped>
.scroll-container {
  position: relative;
  .scroll-item {
    position: absolute;
    background-color: #D44439;
  }
  .scroll-self {
    width: 96%;
    margin: 0 auto;
  }
}
.recommend-list-header {
  height: 65px;
  font-size: 14px;
  font-weight: 700;
  color: #2e3030;
  line-height: 65px;
  padding-left: 1.5%;
}
.songlist-ul {
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-around;
  li {
    width: 31%;
    img {
      width: 100%;
    }
  }
}
</style>
