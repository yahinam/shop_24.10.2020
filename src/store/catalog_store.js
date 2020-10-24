import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default ({
  state: {
    featuredProducts: [],
    productsMen: [],
    productsWomen: [],
    searchValue: '',
  },
  mutations: {
    SET_PRODUCTS: (state, products) => {
      state.featuredProducts = products.data.filter((product) => product.featured);
      state.productsMen = products.data.filter((product) => product.gender === 'man');
      state.productsWomen = products.data.filter((product) => product.gender === 'woman');
    },
    SET_SEARCH_VALUE: (state, value) => {
      state.searchValue = value;
    },
  },
  actions: {
    GET_PRODUCTS({ commit }) {
      return axios('http://localhost:3004/products', { method: 'GET' })
        .then((products) => {
          commit('SET_PRODUCTS', products);
          return products;
        })
        .catch((error) => {
          // eslint-disable-next-line
          console.log(error);
          return error;
        });
    },
    GET_SEARCH_VALUE({ commit }, value) {
      commit('SET_SEARCH_VALUE', value);
    },
  },
  getters: {
    FEATURED_PRODUCTS(state) {
      return state.featuredProducts;
    },
    PRODUCTS_MEN(state) {
      return state.productsMen;
    },
    PRODUCTS_WOMEN(state) {
      return state.productsWomen;
    },
    SEARCH_VALUE(state) {
      return state.searchValue;
    },
  },
});
