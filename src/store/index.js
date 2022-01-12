import { createStore } from 'vuex'
import { beerStore } from './beerStore'
import { userStore } from './userStore'

export default createStore({
  modules: {
    beerStore,
    userStore
  }
})
