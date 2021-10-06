import { ComprasService } from "../../services/Compras";

export default {
  state: {
    compras: [],
  },
  getters: {
    getCompras(state) {
      return state.compras;
    },
  },
  mutations: {
    setCompras(state, payload) {
      return (state.compras = payload);
    },
  },
  actions: {
    async adicionarCompras({ commit }, payload) {
      try {
        const { conta, valor, data, id } = payload;
        const compras = await ComprasService.create(
          {
            conta,
            valor,
            data,
          },
          id
        );
        console.log("compras", compras);
        commit("setCurrentMonth", data);
      } catch (error) {
        console.log("houve um erro");
      }
    },
    async getListaDeCompras({ commit }, payload) {
      try {
        const compras = await ComprasService.get(payload);
        commit("setCompras", compras);
      } catch (error) {
        console.log("houve um erro");
      }
    },
  },
};
