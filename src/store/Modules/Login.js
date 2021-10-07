import axios from "axios";
import { tokenService } from "@/services/Token.js";

export default {
  state: {
    isLoggedIn: false,
    User: localStorage.getItem("Use") || {},
    Token: localStorage.getItem("Token") || false,
  },
  getters: {
    getToken(state) {
      return state.Token;
    },
    getUser(state) {
      return JSON.parse(state.User);
    },
  },
  mutations: {
    setUser(state, payload) {
      state.User = payload;
      if (payload) {
        axios.defaults.headers.common.Authorization = `Bearer ${state.token}`;
      } else {
        delete axios.defaults.headers.common["Authorization"];
      }
    },
    setToken(state, payload) {
      return (state.Token = payload);
    },
  },
  actions: {
    async Token({ commit, dispatch }, payload) {
      try {
        commit("setLoadingFullScreen", true);
        const data = await tokenService.post(payload);
        const { token, user } = data;
        commit("setUser", user);
        commit("setToken", token);
        localStorage.setItem("Use", JSON.stringify(user));
        localStorage.setItem("Token", JSON.stringify(token));
        commit("setLoadingFullScreen", false);
      } catch (error) {
        commit("setLoadingFullScreen", false);
        dispatch("showSnackBar", ["Erro ao pegar o Token", "error"]);
      }
    },
  },
};
