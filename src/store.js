import { createStore } from 'vuex'

export default () => {
    return createStore({
        state: {
            userInfo: {
                name: "yd",
                address: "beijing"
            }
        },
        actions: {
            setData ({ commit }) {
                //    从接口请求
                const payload = {
                    name: "new data",
                    address: "new beijing"
                }
                commit('setData', payload);
            }
        },
        mutations: {
            setData (state, payload) {
                state.userInfo = payload;
            }
        },
        getters: {
            getData: (state) => {
                return state.userInfo;
            }
        }
    })
}