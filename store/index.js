import Vue from "vue";
import Vuex from "vuex"

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        isLogin: uni.getStorageSync('token')
    },
    mutations: {
        SET_LOGIN(state, isLogin) {
            state.isLogin = isLogin
        }
    },
    actions: {
        setLogin(context, isLogin) {
            context.commit('SET_LOGIN', isLogin)
        }
    }
})

export default store