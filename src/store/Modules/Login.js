import axios from "axios";
import { tokenService } from "@/services/Token.js";

export default {
  state: {
    isLoggedIn: false,
    User: null,
    Token: false,
  },
  getters: {
    getToken(state) {
      let local = localStorage.getItem("Token");
      return local ? JSON.parse(local) : state.state.Token;
    },
    getUser(state) {
      let local = localStorage.getItem("Use");
      return local ? JSON.parse(local) : state.User;
    },
  },
  mutations: {
    setUser(state, payload) {
      state.User = payload;
      // else {
      //   delete axios.defaults.headers.common["Authorization"];
      // }
    },
    setToken(state, payload) {
      state.Token = payload;
      axios.defaults.headers.common.Authorization = `Bearer ${payload}`;
    },
  },
  actions: {
    async Token({ commit, dispatch }, payload) {
      try {
        commit("setLoadingFullScreen", true);
        const data = await tokenService.post(payload);
        const { token, user } = data;
        commit("setToken", token);
        commit("setUser", user);
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
