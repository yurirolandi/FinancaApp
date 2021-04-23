import { requestAxios } from "../../server/axios";

export default {
    state: {
        valorTotal: [],
        headerEfooter: true
    },
    getters: {
        getValorTotal(state) {
            return state.valorTotal
        },
        getHeaderEfooter(state) {
            return state.headerEfooter
        }
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
                return await requestAxios.get('meses').then(response => {
                    commit("setValorTotal", response.data)
                }).catch(error => console.log('houve um erro na requisição', error))

            } catch (error) {
                console.log(error, 'houve um erro ao tentar obter dados de getValorTotalApi')
            }
        }
    }
}