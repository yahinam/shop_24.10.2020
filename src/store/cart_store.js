import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default ({
  state: {
    cart: [],
  },
  mutations: {
    SET_CART_DATA(state, product) {
      // eslint-disable-next-line
      let isProductExist = false;
      if (state.cart.length) {
        state.cart.forEach((item) => {
          if (item.id_product === product.id_product) {
            isProductExist = true;
            const find = state.cart.indexOf(item);
            state.cart[find].quantity += 1;
          }
        });
      }
      // eslint-disable-next-line
      if (!state.cart.length || !isProductExist) {
        state.cart.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_CART_ITEM(state, index) {
      state.cart.splice(index, 1);
    },
    REMOVE_ALL(state) {
      state.cart = [];
    },
  },
  actions: {
    ADD_TO_CART({ commit }, product) {
      commit('SET_CART_DATA', product);
    },
    DELETE_FROM_CART({ commit }, index) {
      commit('REMOVE_CART_ITEM', index);
    },
    DELETE_ALL({ commit }, state) {
      commit('REMOVE_ALL', state);
    },
  },
  getters: {
    CART(state) {
      return state.cart;
    },
  },
});
