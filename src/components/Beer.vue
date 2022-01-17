<template>
  <block :error="beerError" :loading="beerLoading" class="beer">
    <div class="beer__wrapper">
      <div class="beer__image">
        <img src="" alt="" />
      </div>
      <div class="beer__content">
        <name class="beer__title"> {{ name }}</name>
        <div class="beer__info">
          <list class="beer__info-list"></list>
        </div>
      </div>
    </div>
  </block>
</template>

<script>
import Block from "./Block.vue";
import { mapState, mapGetters } from "vuex";
import Name from "./Name.vue";
import List from "./List.vue";

export default {
  components: { Block, Name, List },
  computed: {
    ...mapState({
      beerLoading: (state) => state.beerStore.loading,
      beerError: (state) => state.beerStore.error,
      name: (state) => state.beerStore.beer.name,
    }),
    ...mapGetters({}),
  },
};
</script>

<style lang="scss">
.beer {
  margin-top: 20px;
  padding: 20px;
  border-radius: 16px;
  background: #ffeab3;
  &__info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: left;
    row-gap: 25px;
  }
}
</style>