<template>
    <div>
        <div class='recommend-list-header'>推荐歌单</div>
        <ul class='songlist-ul'>
          <li v-for="(songlist,index) in songLists" :key="index">
              <div class = 'list-li-div'>
                <img :src="songlist.picUrl" alt="">
              </div>
          </li>
        </ul>
    </div>
</template>
<script>
import axios from "axios";
export default {
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
    width: 33%;
    img {
      width: 100%;
    }
  }
}
</style>
