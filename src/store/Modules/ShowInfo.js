export default {
  state: {
    showInfo: true,
  },
  getters: {
    getShowInfo(state) {
      return state.showInfo;
    },
  },
  mutations: {
    setShowInfo(state, payload) {
      state.showInfo = payload;
    },
  },
};
