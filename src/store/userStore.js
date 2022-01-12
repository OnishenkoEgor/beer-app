export const userStore = {
    state: () => ({
        loading: false,
        error: false,
        user: {}
    }),
    mutations: {
        setLoading(state, loading) {
            state.loading = loading
        },
        setError(state, error) {
            state.error = error
        },
        setUser(state, user) {
            state.user = user
        }
    },
    getters: {
        getUser() {

        }
    },
    actions: {
        loadUser({ commit }) {
            try {
                commit('setLoading', true)
                fetch('https://random-data-api.com/api/users/random_user')
                    .then(res => res.json())
                    .then(res => {
                        commit('setUser', res)
                    })
            } catch (e) {
                console.error(e)
                commit('setError', true)
            } finally {
                commit('setLoading', false)
            }
        }
    },
    namespaced: true
}