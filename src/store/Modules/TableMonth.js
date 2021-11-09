import { MesesService } from "../../services/Month";
export default {
  state: {
    currentMonth: [],
    valueTotal: 0,
  },
  getters: {
    getCurrentMonth(state) {
      return state.currentMonth;
    },
    getFilterValue(state) {
      const reducer = (previousValue, currentValue) =>
        previousValue + currentValue;
      return state.valueTotal.length
        ? state.valueTotal.reduce(reducer)
        : state.valueTotal;
    },
  },
  mutations: {
    setCurrentMonth(state, payload) {
      return (state.currentMonth = payload);
    },
    setValueTotal(state, payload) {
      return (state.valueTotal = payload);
    },
  },
  actions: {
    async refreshMonth({ commit, dispatch }, payload) {
      try {
        commit("setLoadingSkeleton", true);
        const data = await MesesService.get(payload);
        let valorTotal = data.compras.map((compra) => compra.valor);
        commit("setCurrentMonth", data);
        commit("setValueTotal", valorTotal);
        commit("setLoadingSkeleton", false);
      } catch (error) {
        commit("setLoadingSkeleton", false);
        dispatch("showSnackBar", ["Erro ao buscar o ano", "error"]);
      }
    },
  },
};
