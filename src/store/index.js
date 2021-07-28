import Vue from "vue";
import Vuex from "vuex";
import SnackBarStatus from "./Modules/SnackBarStatus";
import Loading from "./Modules/Loading";
import Crud from "./Modules/Crud";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    SnackBarStatus,
    Loading,
    Crud,
  },
});
