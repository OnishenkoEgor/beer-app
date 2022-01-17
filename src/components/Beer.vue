<template>
  <block :error="beerError" :loading="beerLoading" class="beer">
    <div class="beer__wrapper">
      <div class="beer__image">
        <img :src="beerImage" alt="" />
      </div>
      <div class="beer__content">
        <name class="beer__title"> {{ name }}</name>
        <list class="beer__info" :elements="getBeerInfo"></list>
        <div class="beer__additional">
          <div v-for="addItem in getAdditional" class="beer__additional-item">
            <p>{{ addItem }}</p>
          </div>
        </div>
        <Button @click="updateBeer" class="beer__btn">Randomize</Button>
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

import beerImage from "@/assets/img/beer_image.png";

export default {
  components: { Block, Name, List, Button },
  data() {
    return {
      beerImage,
    };
  },
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
    position: relative;
    background-color: rgba(#fff, 0.5);
    border-radius: 8px;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      max-width: 90%;
      max-height: 90%;
      width: auto;
    }
  }
  &__info {
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: left;
    row-gap: 25px;
    column-gap: 15px;
    margin-bottom: 20px;
  }
  &__title {
    margin-bottom: 30px;
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
  &__btn {
    padding-left: 75px;
    padding-right: 75px;
  }
}
@media (max-width: 650px) {
  .beer {
    &__wrapper {
      grid-template-columns: 50% 1fr;
    }
    &__info {
      grid-template-columns: 1fr;
      row-gap: 5px;
    }
    &__additional {
      grid-template-columns: 1fr;
      row-gap: 5px;
    }
    &__btn {
      padding-left: 0;
      padding-right: 0;
      width: 100%;
    }
  }
}
@media (max-width: 500px) {
  .beer {
    &__wrapper {
      grid-template-columns: 1fr;
      row-gap: 40px;
    }
    &__image {
      height: 40vh;
    }
    &__info {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>