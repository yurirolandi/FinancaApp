
export default {
    state: {
        produtosAdicionados: [],
    },
    getters: {
        getProdutosAdicionados(state) {
            return state.produtosAdicionados
        },
    },
    mutations: {
        setProdutosAdicionados(state, payload) {
            state.meses = payload;
        },
    }
}