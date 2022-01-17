<template>
  <div class="block" :style="styleObject">
    <div v-if="error" class="block__error">
      <p>Error</p>
    </div>
    <div v-else-if="loading" class="block__loading">
      <img src="@/assets/gif/loader.gif" alt="" />
    </div>
    <div v-else class="block__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Boolean,
    },
    loading: {
      type: Boolean,
    },
    styleObject: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  &__content {
  }

  &__error {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 30px;
    color: #665;
    border-radius: 16px;
  }
  &__loading {
    position: relative;
    min-height: 100px;
    border-radius: 16px;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 90%;
      width: auto;
    }
  }
}
</style>