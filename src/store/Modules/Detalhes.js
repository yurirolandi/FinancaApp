import { requestAxios } from "../../server/axios";

export default {
  state: {
    valorTotal: [],
    headerEfooter: true,
  },
  getters: {
    getValorTotal(state) {
      return state.valorTotal;
    },
    getTotal(state) {
      let newState = state.valorTotal;
      const reducer = (accumulator, currentValue) => accumulator + currentValue;
      let valor = [];
      newState.forEach(v => valor.push(parseInt(v.total)))

      let total;

      if(valor.length !== 0) {
        total  = valor.reduce(reducer)
      }
      return total;
    },
    getHeaderEfooter(state) {
      return state.headerEfooter;
    },
  },
  mutations: {
    setValorTotal(state, payload) {
      state.valorTotal = payload;
      state.headerEfooter = false;
    },
  },
  actions: {
    async getValorTotalApi({ commit }) {
      try {
        return await requestAxios
          .get("Janeiro")
          .then((response) => {
            commit("setValorTotal", response.data);
          })
          .catch((error) => console.log("houve um erro na requisição", error));
      } catch (error) {
        console.log(
          error,
          "houve um erro ao tentar obter dados de getValorTotalApi"
        );
      }
    },
  },
};
