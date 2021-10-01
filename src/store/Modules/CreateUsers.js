import { usersService } from "../../services/Users";

export default {
  state: {
    newUser: null,
  },
  getters: {},
  mutations: {
    setNewuser(state, payload) {
      return (state.newUser = payload);
    },
  },
  actions: {
    async createUsers({ commit }, payload) {
      try {
        const newUser = await usersService(payload);
        commit("setNewuser", newUser);
      } catch (e) {
        console.log("e", e);
      }
    },
  },
};
