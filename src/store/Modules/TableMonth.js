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
  actions: {},
};
