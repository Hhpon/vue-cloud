<template>
  <div></div>
</template>
<script>
import axios from "axios";
import pinyin from "pinyin";
export default {
  data() {
    return {
      singerList: []
    };
  },
  mounted() {
    this.getSongerList();
  },
  methods: {
    getSongerList() {
      axios
        .get("http://localhost:3000/top/artists?offset=0&limit=100")
        .then(res => {
          let artists = res.data.artists;
          let artists_arr = [];
          artists.forEach(element => {
            artists_arr.push(element.name);
          });
          artists_arr.sort(pinyin.compare);
          console.log(artists_arr);
        });
    }
  }
};
</script>

