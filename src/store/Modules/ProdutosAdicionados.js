import { requestAxios } from "../../server/axios";

export default {
  state: {
    produtosAdicionados: [],
    parcela: [],
    comercio: [],
  },
  getters: {
    getProdutosAdicionados(state) {          
      return state.produtosAdicionados;
    },
    getParcelas(state) {
      return state.parcela
    },
    getComercio(state) {
      return state.comercio
    },
  },
  mutations: {
    setProdutosAdicionados(state, payload) {
      state.produtosAdicionados.push(payload);
    },
    setParcelas(state, payload) {
      state.parcela = payload
    },
    setComercio(state, payload) {
      state.comercio = payload
    },
  },
  actions: {
    async getParcelasApi({ commit }) {
      try {
        return await requestAxios
          .get("parcela")
          .then((response) => {
            commit("setParcelas", response.data);
          })
          .catch((error) => console.log("houve um erro na requisição", error));
      } catch (error) {
        console.log(
          error,
          "houve um erro ao tentar obter dados de getMesesApi"
        );
      }
    },
    async getComercioApi({ commit }) {
      try {
        return await requestAxios
          .get("comercios")
          .then((response) => {
            commit("setComercio", response.data);
          })
          .catch((error) => console.log("houve um erro na requisição", error));
      } catch (error) {
        console.log(
          error,
          "houve um erro ao tentar obter dados de getComercioApi"
        );
      }
    },
  },
};
