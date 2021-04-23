import Vue from "vue";
import Vuex from "vuex";
import headerEfooter from './Modules/HeaderFooter';
import Meses from './Modules/Meses';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    headerEfooter,
    Meses
  },
});
