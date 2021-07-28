export default {
  state: {
    loadingFullScreen: false,
    loadingCrud: false,
  },
  getters: {
    getLoadingFullScreen(state) {
      return state.loadingFullScreen;
    },
    getLoadingCrud(state) {
      return state.loadingCrud;
    },
  },
  mutations: {
    setLoadingFullScreen(state, payload) {
      state.loadingFullScreen = payload;
    },
    setLoadingCrud(state, payload) {
      state.loadingCrud = payload;
    },
  },
};
