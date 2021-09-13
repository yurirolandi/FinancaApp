import Vue from "vue";
import Vuex from "vuex";
import TableMonth from "./Modules/TableMonth";
import SnackBarStatus from "./Modules/SnackBarStatus";
import Loading from "./Modules/Loading";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    SnackBarStatus,
    Loading,
    TableMonth,
  },
});
