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
        const { conta, valor, data, id, parcelas, total_parcela } = payload;
        const novaCompra = {
          conta: conta,
          valor: valor,
          data: data,
          parcela: parcelas,
          total_parcela: total_parcela,
        };
        const compras = await ComprasService.create(novaCompra, id);
        console.log("compras", compras);
        commit("setCompras", data);
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
