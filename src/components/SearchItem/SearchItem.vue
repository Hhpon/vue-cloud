<template>
  <span class="item">
      {{content}}
  </span>
</template>
<script>
export default {
  data() {
    return {
      content: this.itemContent
    };
  },
  props: {
    itemContent: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.item{
    background: #f4f4f4;
    padding: 3px 5px;
    box-sizing: border-box;
    display: inline-block;
    cursor: pointer;
}
</style>


