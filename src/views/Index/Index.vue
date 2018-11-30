<template>
    <div>
        <Header></Header>
        <Tab></Tab>
        <Scroll></Scroll>
    </div>
</template>
<script>
import Header from "../../components/Header/Header.vue";
import Tab from "../../components/Tab/Tab.vue";
import axios from 'axios';
export default {
  components: {
    Header,
    Tab,
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


