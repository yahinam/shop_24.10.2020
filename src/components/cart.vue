<template>
            <div class="drop_cart" v-show="cart_data.length">
                <cartItem v-for="(product, index) in cart_data"
                          :key="product.id_product"
                          :cart_item="product"
                          @delete_from_cart = "delete_from_cart(index)"
                          @productClick="productClick"
                 />
            <div>
                    <h3 class="sum">Total ${{totalSum}}</h3>
                    <router-link :to="{name: 'checkPage', params: {cart_data: CART}}">
                <div class="Checkout">
                    <a href="checkout.html" class="Checkout_button">Checkout</a>
                </div>
                </router-link>
                <router-link :to="{name: 'cartPage', params: {cart_data: CART}}">
                <div class="go_to_cart">
                    <a href="cart.html" class="to_cart_button">Go to cart</a>
                </div>
                </router-link>
                </div>
            </div>
</template>

<script>
import cartItem from '@/components/cart-item.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'cart',
  components: {
    cartItem,
  },
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['CART']),
    totalSum() {
      const sum = this.cart_data.map((el) => el.price * el.quantity);
      return sum.reduce((accumulator, item) => accumulator + item, 0);
    },
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART']),
    delete_from_cart(index) {
      this.DELETE_FROM_CART(index);
    },
    productClick(idProduct) {
      this.$router.push({ name: 'itemPage', query: { idProduct } });
    },
  },
};
</script>

<style>
</style>
