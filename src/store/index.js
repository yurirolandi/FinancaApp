import Vue from "vue";
import Vuex from "vuex";
import headerEfooter from "./Modules/HeaderFooter";
import Meses from "./Modules/Meses";
import ShowInfo from "./Modules/ShowInfo";
import ProdutosAdicionados from "./Modules/ProdutosAdicionados.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    headerEfooter,
    Meses,
    ShowInfo,
    ProdutosAdicionados,
  },
});
