<template>
  <div class="beer-page page">
    <div class="page__wrapper container">
      <h1 class="page__title">Personal Area</h1>
      <block :error="userError" :loading="userLoading">
        <user-info
          :image="userImage"
          :firstName="userFirstName"
          :lastName="userLastName"
          :nickName="userNickName"
          :birthday="userBirthDay"
          :email="userMail"
          :phone="userPhone"
        ></user-info>
      </block>
      <div class="beer-page__boards">
        <board
          :error="userError"
          :loading="userLoading"
          :name="'Additional info'"
          :info="getAdditional"
        ></board>
        <board
          :error="userError"
          :loading="userLoading"
          :name="'Job'"
          :info="getJob"
        ></board>
        <board
          :error="userError"
          :loading="userLoading"
          :name="'Address'"
          :info="getAddress"
        ></board>
        <board
          :error="userError"
          :loading="userLoading"
          :name="'Card Info'"
          :info="getCard"
        ></board>
      </div>
      <div class="beer-page__content">
        <beer></beer>
        <board
          :error="userError"
          :loading="userLoading"
          :name="'Subscription info'"
          :info="getSubscription"
        >
        </board>
      </div>
    </div>
  </div>
</template>

<script>
import Block from "../components/Block.vue";
import Name from "../components/Name.vue";
import UserInfo from "../components/UserInfo.vue";
import Board from "../components/Board.vue";
import Beer from "../components/Beer.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "BeerPage",
  components: { Block, Name, UserInfo, Board, Beer },
  computed: {
    ...mapState({
      userLoading: (state) => state.userStore.loading,
      userError: (state) => state.userStore.error,
      userImage: (state) => state.userStore.user.avatar,
      userFirstName: (state) => state.userStore.user.first_name,
      userLastName: (state) => state.userStore.user.last_name,
      userNickName: (state) => state.userStore.user.username,
      userBirthDay: (state) => state.userStore.user.date_of_birth,
      userMail: (state) => state.userStore.user.email,
      userPhone: (state) => state.userStore.user.phone_number,
    }),
    ...mapGetters({
      getAddress: "userStore/getAddress",
      getJob: "userStore/getJob",
      getAdditional: "userStore/getAdditional",
      getCard: "userStore/getCard",
      getSubscription: "userStore/getSubscription",
    }),
  },
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
<style lang="scss">
.page {
  &__wrapper {
  }
  &__title {
    font-size: 28px;
    font-weight: normal;
    font-style: normal;
    color: #665;
    margin: 0;
    margin-bottom: 40px;
  }
}
.beer-page { 
  padding: 40px 0; 
  min-height: 100vh;
  &__boards {
    padding-top: 40px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 16px;
  }
  &__content {
    padding-top: 20px;
    display: grid;
    column-gap: 16px;
    grid-template-columns: calc(60% + 32px) 1fr;
  }
}
</style>
