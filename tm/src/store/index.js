import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        logged: false,
        userInfo: null
    },
    mutations: {
        toggleLogged(state) {
            state.logged = !state.logged;
        },
        setUserInfo(state, user) {
            state.userInfo = user;
        }
    },
    actions: {
        // toggleLogged(context) {
        //     context.commit("toggleLogged")
        // },
        // setUserInfo(context, user) {
        //     context.commit("setUserInfo", user)
        // }
    }
});


export default store;