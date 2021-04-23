export default {
    state: {
        headerEfooter: true
    },
    getters: {
        getHeaderFooter(state) {
            return state.headerEfooter
        },
    },
    mutations: {
        setHeaderFooter(state, payload) {
            state.headerEfooter = payload;
        },
    },
    actions: {
        async ActionHeaderFooter({ commit }, valor) {
            commit("setHeaderFooter", valor)
        }
    }
}