<template>
  <div class="beer-page page">
    <div class="page__wrapper">
      <div class="page__content">
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
            :name="'Доп инфо'"
            :info="getAdditional"
          ></board>
          <board
            :error="userError"
            :loading="userLoading"
            :name="'Работа'"
            :info="getJob"
          ></board>
          <board
            :error="userError"
            :loading="userLoading"
            :name="'Адрес'"
            :info="getAddress"
          ></board>
        </div>
        <beer></beer>
      </div>
      <div class="page__sidebar">
        <sidebar></sidebar>
      </div>
    </div>
  </div>
</template>

<script>
import Block from "../components/Block.vue";
import Name from "../components/Name.vue";
import Sidebar from "../components/Sidebar.vue";
import UserInfo from "../components/UserInfo.vue";
import Board from "../components/Board.vue";
import Beer from "../components/Beer.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "BeerPage",
  components: { Block, Name, Sidebar, UserInfo, Board, Beer },
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
    display: grid;
    grid-template-columns: 1fr 350px;
    min-height: 100vh;
  }
  &__content {
    padding-left: 150px;
    padding-right: 30px;
    padding-top: 55px;
  }
  &__sidebar {
    background: #f0f0f0;
    height: 100%;
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
  &__boards {
    padding-top: 40px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    column-gap: 16px;
  }
}
</style>
