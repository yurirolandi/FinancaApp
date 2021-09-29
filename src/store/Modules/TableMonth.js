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
    async getMonth({ commit }, payload) {
      try {
        const data = await MesesService.get(payload);
        console.log("data", data);
        commit("setCurrentMonth", data);
      } catch (error) {
        console.log("houve um erro");
      }
    },
  },
};
