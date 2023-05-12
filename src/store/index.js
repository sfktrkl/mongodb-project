import { createStore } from "vuex";

const store = createStore({
  state: {
    isLoggedIn: false,
  },
  mutations: {
    setLoggedIn(state, isLoggedIn) {
      state.isLoggedIn = isLoggedIn;
    },
  },
  actions: {
    login({ commit }) {
      commit("setLoggedIn", true);
    },
    logout({ commit }) {
      commit("setLoggedIn", false);
    },
  },
});

export default store;
