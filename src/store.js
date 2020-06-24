import Vue from "vue";
import Vuex from "vuex";
import router from "./router";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [createPersistedState()],
  state: {
    isAdmin: false,
    user: {},
  },
  getters: {
    getUser: (state) => {
      return state.user;
    },
  },
  mutations: {
    changeIsAdmin(state, payload) {
      state.isAdmin = payload;
    },
    setUser(state, payload) {
      state.user = payload;
    },
  },
  actions: {
    fireSetUser(context, payload) {
      context.commit("setUser", payload);
    },
    changeIsAdminState(context, payload) {
      context.commit("changeIsAdmin", payload);
    },
  },
});
