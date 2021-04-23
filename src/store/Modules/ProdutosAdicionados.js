export default {
  state: {
    produtosAdicionados: [],
  },
  getters: {
    getProdutosAdicionados(state) {
      console.log("get", state.produtosAdicionados);
      return state.produtosAdicionados;
    },
  },
  mutations: {
    setProdutosAdicionados(state, payload) {
      console.log("payload", payload);
      state.produtosAdicionados.push(payload);
    },
  },
};
