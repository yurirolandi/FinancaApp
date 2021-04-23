import { requestAxios } from "../../server/axios";

export default {
    state: {
        meses: [],
        mesSelecionado: ''
    },
    getters: {
        getMeses(state) {
            return state.meses
        },
        getMesSelecionado(state){
            return state.mesSelecionado
        }
    },
    mutations: {
        setMeses(state, payload) {
            state.meses = payload;
        },
        setMesSelecionado(state, payload){
            state.mesSelecionado = payload;
        }
    },
    actions: {
        async getMesesApi({ commit }) {
            try {
                return await requestAxios.get('meses').then(response => {
                    commit("setMeses", response.data)

                }).catch(error => console.log('houve um erro na requisição', error))

            } catch (error) {
                console.log(error, 'houve um erro ao tentar obter dados de getMesesApi')
            }
        }
    }
}