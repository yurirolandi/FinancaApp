export default {
  state: {
    showFormDialog: false,
    showConfirmDialog: false,
    showDeleteDialog: false,
    currentElement: null,
  },
  getters: {
    getShowFormDialog(state) {
      return state.showFormDialog;
    },
    getShowConfirmDialog(state) {
      return state.showConfirmDialog;
    },
    getShowDeleteDialog(state) {
      return state.showDeleteDialog;
    },
    getCurrentElement(state) {
      return state.currentElement;
    },
  },
  mutations: {
    setShowFormDialog(state, payload) {
      return (state.showFormDialog = payload);
    },
    setShowConfirmDialog(state, payload) {
      return (state.showConfirmDialog = payload);
    },
    setShowDeleteDialog(state, payload) {
      return (state.showDeleteDialog = payload);
    },
    setCurrentElement(state, payload) {
      return (state.currentElement = payload);
    },
  },
  actions: {
    closeAllDialogs({ commit }) {
      commit("setShowFormDialog", false);
      commit("setShowDeleteDialog", false);
      commit("setShowConfirmDialog", false);
    },
  },
};
