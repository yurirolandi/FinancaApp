import { ComprasService } from "../../services/Compras";
import { MesesService } from "@/services/Month";

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
          nome: conta,
          valor: valor,
          dia: data,
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
    async getListaDeCompras({ commit, dispatch }, payload) {
      try {
        commit("setLoadingFullScreen", true);
        const data = await MesesService.get(payload);
        if (data) {
          dispatch("setCurrentMonth", data);
        }
        commit("setLoadingFullScreen", false);
      } catch (error) {
        commit("setLoadingFullScreen", false);
        dispatch("showSnackBar", [
          "Erro ao atualizar lista de compra",
          "error",
        ]);
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
        console.log("compraEditada", compraEditada);
        const compra = await ComprasService.update(compraEditada, id);
        console.log("compra", compra);
        commit("setCompras", compra);
        dispatch("getListaDeCompras", id);
        commit("setLoadingFullScreen", false);
      } catch (error) {
        commit("setLoadingFullScreen", false);
        dispatch("showSnackBar", ["Erro ao editar compra", "error"]);
      }
    },
    async deleteCompra({ commit, dispatch }, payload) {
      try {
        console.log("delete", payload);
        commit("setLoadingFullScreen", true);
        const compraDeletada = await ComprasService.delete(payload);
        commit("setCompras", compraDeletada);
        dispatch("getListaDeCompras", payload);
        commit("setLoadingFullScreen", false);
      } catch (error) {
        commit("setLoadingFullScreen", false);
        dispatch("showSnackBar", ["Erro ao excluir compra", "error"]);
      }
    },
  },
};
