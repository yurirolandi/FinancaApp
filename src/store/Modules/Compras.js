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
    async adicionarCompras({ commit, dispatch }, payload) {
      try {
        commit("setLoadingFullScreen", true);
        const { conta, valor, data, id, parcelas, total_parcela } = payload;
        const novaCompra = {
          nome: conta,
          valor: valor,
          dia: data,
          parcela: parcelas,
          total_parcela: total_parcela,
        };
        const compras = await ComprasService.create(novaCompra, id);
        commit("setCompras", compras);
        dispatch("refreshMonth", id);
        commit("setLoadingFullScreen", false);
      } catch (error) {
        commit("setLoadingFullScreen", false);
        dispatch("showSnackBar", ["Erro ao criar lista de compra", "error"]);
      }
    },
    async editCompra({ commit, dispatch }, payload) {
      try {
        commit("setLoadingFullScreen", true);
        const { nome, valor, dia, id, parcela, total_parcela } = payload;
        const compraEditada = {
          nome: nome,
          valor: valor,
          dia: dia,
          parcela: parcela,
          total_parcela: total_parcela,
        };
        const compra = await ComprasService.update(compraEditada, id);
        commit("setCompras", compra);
        dispatch("refreshMonth", id);
        commit("setLoadingFullScreen", false);
      } catch (error) {
        commit("setLoadingFullScreen", false);
        dispatch("showSnackBar", ["Erro ao editar compra", "error"]);
      }
    },
    async deleteCompra({ commit, dispatch }, payload) {
      try {
        let { id, itemId } = payload;
        commit("setLoadingFullScreen", true);
        const compraDeletada = await ComprasService.delete(itemId);
        commit("setCompras", compraDeletada);
        dispatch("refreshMonth", id);
        commit("setLoadingFullScreen", false);
      } catch (error) {
        commit("setLoadingFullScreen", false);
        dispatch("showSnackBar", ["Erro ao excluir compra", "error"]);
      }
    },
  },
};
