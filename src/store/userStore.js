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
        getAddress({ user: { address } }) {
            return address ? [
                address.country,
                address.state,
                address.city,
                address.street_name
            ] : [];
        },
        getJob({ user: { employment } }) {
            return employment ? [
                employment.title,
                employment.key_skill
            ] : []
        },
        getAdditional({ user: { gender, social_insurance_number } }) {
            return gender && social_insurance_number ? [
                gender, social_insurance_number
            ] : []
        }
    },
    actions: {
        loadUser({ commit }) {
            commit('setLoading', true)
            fetch('https://random-data-api.com/api/users/random_user')
                .then(res => res.json())
                .then(res => {
                    commit('setUser', res)
                }).catch(e => {
                    commit('setError', true)
                }).finally(() => {
                    commit('setLoading', false)
                })
        }
    },
    namespaced: true
}