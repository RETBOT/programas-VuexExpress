import Vue from 'vue';
import Vuex from 'vuex';
/* eslint-disable import/prefer-default-export */
Vue.use(Vuex);

const state = {
  /* eslint no-shadow: ["error", { "allow": ["state"] }] */
  conteo: 0,
};

const getters = {
  obtenerConteo: state => state.conteo,
};
// <!-- by: R E T B O T  -->
const mutations = {
  /* eslint no-plusplus: "error" */
  /* eslint-disable */
  incrementar: state => state.conteo++,
  decrementar: state => state.conteo--,
};

const actions = {
  incrementar: ({ commit }) => commit('incrementar'),
  decrementar: ({ commit }) => commit('decrementar'),
};
// <!-- by: R E T B O T  -->
export const store = new Vuex.Store({
  // eslint-disable import/prefer-default-export
  state,
  getters,
  mutations,
  actions,
});
