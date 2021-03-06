export const beerStore = {
    state: () => ({
        loading: false,
        error: false,
        beer: {}
    }),
    mutations: {
        setLoading(state, loading) {
            state.loading = loading
        },
        setError(state, error) {
            state.error = error
        },
        setBeer(state, beer) {
            state.beer = beer
        }
    },
    getters: {
        getBeerInfo({ beer: { brand, name, style, hop, yeast, malts } }) {
            return [
                brand, name, style, hop, yeast, malts
            ]
        },
        getAdditional({ beer: { ibu, alcohol, blg } }) {
            return [
                ibu, alcohol, blg
            ]
        }
    },
    actions: {
        loadBeer({ commit }) {
            try {
                commit('setLoading', true)
                fetch('https://random-data-api.com/api/beer/random_beer')
                    .then(res => res.json())
                    .then(res => {
                        commit('setBeer', res)
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