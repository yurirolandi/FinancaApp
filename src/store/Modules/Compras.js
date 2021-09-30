import { ComprasService } from "../../services/Compras";

export default {
  state: {},
  getters: {},
  mutations: {},
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
  },
};
