import Vue from 'vue';
import Vuex from 'vuex';
import cartStore from './cart_store';
import catalogStore from './catalog_store';

Vue.use(Vuex);

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    cartStore,
    catalogStore,
  },
});
