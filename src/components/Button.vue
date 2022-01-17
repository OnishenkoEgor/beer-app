<template>
  <button>
    <slot></slot>
  </button>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
button {
  padding: 15px 75px;
  font-size: 20px;
  line-height: 24px;
  color: #665;
  border-radius: 8px;
  background-color: #ffc226;
  outline: none;
  border: none;
  transition: .3s all;
  &:hover{
    background: #ffc83c;
  }
  &:active{
    background-color: #ffbc13;
  }
}
</style>