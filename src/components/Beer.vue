<template>
  <block :error="beerError" :loading="beerLoading" class="beer">
    <div class="beer__wrapper">
      <div class="beer__image">
        <img src="" alt="" />
      </div>
      <div class="beer__content">
        <name class="beer__title"> {{ name }}</name>
        <list class="beer__info" :elements="getBeerInfo"></list>
        <div class="beer__additional">
          <div v-for="addItem in getAdditional" class="beer__additional-item">
            <p>{{ addItem }}</p>
          </div>
        </div>
        <Button @click="updateBeer">Randomize</Button>
      </div>
    </div>
  </block>
</template>

<script>
import Block from "./Block.vue";
import { mapState, mapGetters, mapActions } from "vuex";
import Name from "./Name.vue";
import List from "./List.vue";
import Button from "./Button.vue";

export default {
  components: { Block, Name, List, Button },
  computed: {
    ...mapState({
      beerLoading: (state) => state.beerStore.loading,
      beerError: (state) => state.beerStore.error,
      name: (state) => state.beerStore.beer.name,
    }),
    ...mapGetters({
      getBeerInfo: "beerStore/getBeerInfo",
      getAdditional: "beerStore/getAdditional",
    }),
  },
  methods: {
    ...mapActions({
      loadBeer: "beerStore/loadBeer",
    }),
    updateBeer() {
      this.loadBeer();
    },
  },
};
</script>

<style lang="scss">
.beer {
  padding: 20px;
  border-radius: 16px;
  background: #ffeab3;
  &__wrapper {
    display: grid;
    grid-template-columns: 30% 1fr;
    column-gap: 25px;
  }
  &__image {
    background-color: rgba(#fff, 0.5);
    border-radius: 8px;
  }
  &__info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: left;
    row-gap: 25px;
  }
  &__additional {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 20px;
    margin-bottom: 20px;
    &-item {
      border-radius: 8px;
      background: #f7f7f7;
      padding: 12px 15px;
      p {
        text-transform: uppercase;
        font-size: 20px;
        line-height: 24px;
        color: #665;
      }
    }
  }
}
</style>