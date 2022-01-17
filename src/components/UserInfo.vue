<template>
  <div class="user-info">
    <div class="user-info__wrapper">
      <div class="user-info__main">
        <div class="user-info__image">
          <img :src="imgLoading ? image : logo" alt="" @load="onImgLoaded" />
        </div>
        <div class="user-info__main-content">
          <p>{{ fullName }}</p>
          <span>{{ nickName }}</span>
        </div>
      </div>
      <div class="user-info__list">
        <div class="user-info__bday">
          <p>{{ birthday }}</p>
        </div>
        <div class="user-info__mail">
          <a :href="'mailto:' + email">{{ email }}</a>
        </div>
        <div class="user-info__phone">
          <a :href="'tel:' + phone">{{ phone }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from "@/assets/img/user-tie-solid.svg";
export default {
  props: {
    image: String,
    firstName: String,
    lastName: String,
    nickName: String,
    birthday: String,
    email: String,
    phone: String,
  },
  data() {
    return {
      imgLoading: false,
      logo,
    };
  },
  computed: {
    fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
  },
  methods: {
    onImgLoaded() {
      this.imgLoading = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.user-info {
  color: #665;
  &__wrapper {
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 20px;
  }
  &__main {
    display: grid;
    grid-template-columns: 60px max-content;
    column-gap: 30px;
  }
  &__image {
    position: relative;
    border-radius: 50%;
    overflow: hidden;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      min-width: 100%;
      min-height: 100%;
    }
  }
  &__list {
    display: grid;
    grid-template-columns: max-content max-content max-content;
    justify-content: space-evenly;
    align-items: center;
  }
}
</style>