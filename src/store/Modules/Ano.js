import { AnoService } from "../../services/Ano";

export default {
  state: {
    currentAno: [],
    loadedData: false,
    chartData: {
      labels: [],
      datasets: [
        {
          label: "",
          // backgroundColor: ["red", "blue", "green"],
          data: [200, 180, 300, 500, 900, 600, 550, 320, 150, 850, 866, 200],
        },
      ],
    },
  },
  getters: {
    getCurrentAno(state) {
      state.currentAno.meses.forEach((mes) => {
        state.chartData.labels.push(mes.mes);
        state.chartData.datasets[0].label = state.currentAno.ano;
      });
      return state.chartData;
    },
    getLoadedData(state) {
      return state.loadedData;
    },
  },
  mutations: {
    setCurrentAno(state, payload) {
      return (state.currentAno = payload);
    },
    setLoadedData(state, payload) {
      return (state.loadedData = payload);
    },
  },
  actions: {
    async getAno({ commit, dispatch }, payload) {
      try {
        commit("setLoadingFullScreen", true);
        commit("setLoadedData", false);
        const ano = await AnoService.get(payload);
        commit("setCurrentAno", ano);
        commit("setLoadedData", true);
        commit("setLoadingFullScreen", false);
      } catch (error) {
        commit("setLoadingFullScreen", false);
        commit("setLoadedData", false);
        dispatch("showSnackBar", ["Erro ao buscar o ano", "error"]);
      }
    },
  },
};
