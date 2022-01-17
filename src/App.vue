<template>
  <router-view />
</template>
<script>
import normalize from "@/assets/styles/normalize.css";
export default {};
</script>
<style lang="scss">
html {
  font-family: "Roboto", sans-serif;
}
img {
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: auto;
  object-fit: cover;
}
a {
  text-decoration: none;
  color: inherit;
}
</style>
