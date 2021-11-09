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
          data: [],
        },
      ],
    },
  },
  getters: {
    getCurrentAno(state) {
      state.currentAno.meses.forEach((mes) => {
        state.chartData.labels.push(mes.mes);
        state.chartData.datasets[0].data.push(mes.total_mes);
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
        commit("setLoadingSkeleton", true);
        commit("setLoadedData", false);
        const ano = await AnoService.get(payload);
        commit("setCurrentAno", ano);
        commit("setLoadedData", true);
        commit("setLoadingSkeleton", false);
      } catch (error) {
        commit("setLoadingSkeleton", false);
        commit("setLoadedData", false);
        dispatch("showSnackBar", ["Erro ao buscar o ano", "error"]);
      }
    },
  },
};
