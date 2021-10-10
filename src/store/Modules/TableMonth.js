import { MesesService } from "../../services/Month";
export default {
  state: {
    currentMonth: "",
    currentItems: [],
  },
  getters: {
    getCurrentMonth(state) {
      return state.currentMonth;
    },
    getCurrentItems(state) {
      return state.currentItems;
    },
  },
  mutations: {
    setCurrentMonth(state, payload) {
      return (state.currentMonth = payload);
    },
  },
  actions: {
    async getMonth({ commit, dispatch }, payload) {
      try {
        commit("setLoadingFullScreen", true);
        const data = await MesesService.get(payload);
        commit("setCurrentMonth", data);
        commit("setLoadingFullScreen", false);
      } catch (error) {
        commit("setLoadingFullScreen", false);
        dispatch("showSnackBar", ["Erro ao buscar o ano", "error"]);
      }
    },
  },
};
