import axios from "axios";
export default {
  state: {
    isLoggedIn: false,
    User: localStorage.getItem("User") || {},
    Token: false,
  },
  getters: {
    getToken(state) {
      return state.Token;
    },
    getUser(state) {
      return state.User;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user = payload;
      if (payload) {
        axios.defaults.headers.common.Authorization = `bearer ${state.token}`;
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }
    },
    setLogout(state, payload) {
      return (state.token = payload);
    },
  },
  actions: {},
};
