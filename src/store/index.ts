// store.ts
// import { Module, MutationTree, ActionTree, GetterTree } from "vuex";
import { createStore } from "vuex";

// Create a new store instance.
const store = createStore({
  state() {
    return {
      theme: "light",
    };
  },
  getters: {
    currentTheme: (state) => state.theme,
  },
  mutations: {
    setTheme(state, newTheme: string) {
      state.theme = newTheme;
    },
  },
});

export default store;
