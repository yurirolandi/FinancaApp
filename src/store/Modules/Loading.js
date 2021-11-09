export default {
  state: {
    loadingFullScreen: false,
    loadingCrud: false,
    loadingSkeleton: false,
  },
  getters: {
    getLoadingFullScreen(state) {
      return state.loadingFullScreen;
    },
    getLoadingSkeleton(state) {
      return state.loadingSkeleton;
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
    setLoadingSkeleton(state, payload) {
      state.loadingSkeleton = payload;
    },
  },
};
