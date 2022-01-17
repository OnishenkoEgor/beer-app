<template>
  <ul>
    <li v-for="element in elements">
      {{ element }}
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    elements: Array,
  },
  updated() {
    console.log(this.props);
  },
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0;
  list-style-type: none;
}
li {
  font-size: 16px;
  line-height: 19px;
  color: #665;
  margin-bottom: 10px;
}
</style>