import Vue from "vue";
import Vuex from "vuex";
import TableMonth from "./Modules/TableMonth";
import SnackBarStatus from "./Modules/SnackBarStatus";
import Loading from "./Modules/Loading";
import Compras from "./Modules/Compras";
import Login from "./Modules/Login";
import CreateUsers from "./Modules/CreateUsers";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},

  mutations: {},

  actions: {},

  modules: {
    SnackBarStatus,
    Loading,
    TableMonth,
    Compras,
    Login,
    CreateUsers,
  },
});
