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
*{
  margin: 0;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
}
@media (max-width: 1400px) {
  .container {
    max-width: 90vw;
  }
}
@media (max-width: 560px) {
  .container {
    max-width: 95vw;
  }
}
</style>
