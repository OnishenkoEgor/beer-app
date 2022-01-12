<template>
  <div class="beer-page">
    <div class="container">
      <h1>{{ $store.state.beerStore.beer.name }}</h1>
      <hr />
      <h1>{{ $store.state.userStore.user.first_name }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "BeerPage",
  components: {},
  computed: {},
  methods: {
    updateBeer() {
      this.$store.dispatch("beerStore/loadBeer");
    },
    updateUser() {
      this.$store.dispatch("userStore/loadUser");
    },
  },
  mounted() {
    if (Object.keys(this.$store.state.beerStore.beer).length === 0) {
      this.updateBeer();
    }
    if (Object.keys(this.$store.state.userStore.user).length === 0) {
      this.updateUser();
    }
  },
};
</script>
