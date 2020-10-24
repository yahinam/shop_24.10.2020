<template>
  <div class="wrapper">
    <div class="top">
      <Header></Header>
      <navigation />
      <div class="breadcrumb center">
        <div class="New">New Arrivals</div>
        <div class="breadcrumb_box">
          <ul class="breadcrumb_menu">
            <router-link :to="{name: 'Home'}">
            <li class="breadcrumb_list">
              <a class="breadcrumb_link" href="index.html">Home</a></li>
        </router-link>
        <router-link :to="{name: 'catalog_page'}">
                 <li class="breadcrumb_list">
              <a class="breadcrumb_link" href="#">Men</a></li>
                 </router-link>
            <li class="breadcrumb_list">
              <a class="breadcrumb_link" href="#">New Arrivals</a></li>
          </ul>
        </div>
      </div>
      <div class="show_cart" v-show="!cart_data.length">There are no products in your cart</div>
      <div class="shopping_cart center" v-show="cart_data.length">
        <table>
            <tr class="table_main">
                <th colspan="2">Product Details</th>
                <th>unite Price</th>
                <th>Quantity</th>
                <th>shipping</th>
                <th>Subtotal</th>
                <th>ACTION</th>
            </tr>
              <cartItemForPage v-for="(product, index) in cart_data"
                          :key="product.id_product"
                          :cart_item="product"
                          @delete_from_cart = "delete_from_cart(index)"
                          @productClick="productClick"
              />
        </table>
        <div class="cart__button">
            <div class="cart__button_left">
                <button class="continue cart__button_left"
                        @click="delete_all">CLEAR SHOPPING CART
                </button>
            </div>
            <div class="cart__button_right">
              <router-link :to="{name: 'catalog_page'}">
                <button class="continue cart__button_right">CONTINUE SHOPPING</button>
            </router-link>
            </div>
        </div>
        <div class="delivery">
            <div class="delivery__box">
               <h3 class="delivery_h3">Shipping Adress</h3>
               <form action="#">
                <input class="adress" id="adress" list="dl_adress" placeholder="Bangladesh">
                <datalist id="dl_adress">
                        <option>Bangladesh</option>
                        <option>Russia</option>
                        <option>Italy</option>
                    </datalist>
                 <input class="adress" placeholder="State">
                   <input class="adress" placeholder="Postcode / Zip">
                  <button class="delivery__button">get a quote</button>
            </form>
            </div>
           <div class="delivery__box">
               <h3 class="delivery_h3">coupon discount</h3>
               <p class="delivery_p">Enter your coupon code if you have one</p>
               <form action="#">
                 <input class="adress" placeholder="State">
                  <button class="delivery__button delivery__button_width">Apply coupon</button>
            </form>
            </div>
            <div class="delivery__box delivery__box_finish">
              <p class="delivery__p_finish">Sub total $900</p>
               <h3 class="delivery_h3 delivery_h3_finish">
                 GRAND TOTAL<span class="delivery_h3_color"> $900</span></h3>
                 <div class="outline"></div>
                  <button class="delivery__button_finish">proceed to checkout</button>
            </div>
        </div>
    </div>
    <feedback />
    </div>
    <footerBlock />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import navigation from '@/components/navigation.vue';
import feedback from '@/components/feedback.vue';
import footerBlock from '@/components/footerBlock.vue';
import cartItemForPage from '@/components/cart-item_for_page.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'cartPage',
  components: {
    Header,
    navigation,
    cartItemForPage,
    feedback,
    footerBlock,
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
  },
  methods: {
    ...mapActions(['DELETE_FROM_CART', 'DELETE_ALL', 'GET_SEARCH_VALUE']),
    delete_from_cart(index) {
      this.DELETE_FROM_CART(index);
    },
    delete_all() {
      this.DELETE_ALL();
      this.cart_data = [];
    },
    productClick(idProduct) {
      this.$router.push({ name: 'itemPage', query: { idProduct } });
    },
  },
  mounted() {
    this.GET_SEARCH_VALUE('');
  },
};
</script >

<style>
</style>
