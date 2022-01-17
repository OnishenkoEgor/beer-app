<template>
  <block :error="error" :loading="loading" :styleObject="blockStyleObject">
    <name>{{ name }}</name>
    <list :elements="info"></list>
  </block>
</template>

<script>
import Block from "./Block.vue";
import Name from "./Name.vue";
import List from "./List.vue";

export default {
  components: { Block, Name, List },
  props: {
    name: String,
    info: Array,
    loading: Boolean,
    error: Boolean,
  },
  data() {
    return {
      blockStyleObject: {
        borderRadius: "16px",
        backgroundColor: "#F7F7F7",
        padding: "15px 20px",
      },
    };
  },
};
</script>

<style>
</style>