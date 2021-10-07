import { AnoService } from "../../services/Ano";

export default {
  state: {
    currentAno: [],
  },
  getters: {
    getCurrentAno(state) {
      let meses = [];
      state.currentAno.meses.forEach((mes) => meses.push(mes.mes));
      return meses.length ? meses : state.currentAno;
    },
  },
  mutations: {
    setCurrentAno(state, payload) {
      console.log((state.currentAno = payload));
      return (state.currentAno = payload);
    },
  },
  actions: {
    async getAno({ commit, dispatch }, payload) {
      try {
        commit("setLoadingFullScreen", true);
        const ano = await AnoService.get(payload);
        commit("setCurrentAno", ano);
        commit("setLoadingFullScreen", false);
      } catch (error) {
        commit("setLoadingFullScreen", false);
        dispatch("showSnackBar", ["Erro ao buscar o ano", "error"]);
      }
    },
  },
};
