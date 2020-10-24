<template>
<div class="header center">
    <div class="header__left">
        <router-link :to="{name: 'Home'}">
            <a class="logo" href="#">
            <img class="logo__img" src="../assets/logo copy.png">BRAN
            <span class="logo__color">D</span>
            </a>
        </router-link>
        <div class="browse">Browse <i class="fa fa-caret-down" aria-hidden="true"></i>
                    <div class="drop drop_browse">
                        <div class="drop_flex drop_flex_browse">
                            <div class="drop__h3">Women</div>
                            <ul class="drop_ul">
                                <li><a href="#" class="drop__link">Dresses</a></li>
                                <li><a href="#" class="drop__link">Tops</a></li>
                                <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                                <li><a href="#" class="drop__link">Blazers</a></li>
                                <li><a href="#" class="drop__link">Denim</a></li>
                                <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                                <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                <li><a href="#" class="drop__link">Accessories </a></li>
                            </ul>
                            <div class="drop__h3">Men</div>
                            <ul class="drop_ul">
                                <li><a href="#" class="drop__link">Shirts/Polos</a></li>
                                <li><a href="#" class="drop__link">Sweaters</a></li>
                                <li><a href="#" class="drop__link">Sweatshirts/Hoodies</a></li>
                                <li><a href="#" class="drop__link">Blazers</a></li>
                                <li><a href="#" class="drop__link">Jackets/vests</a></li>

                            </ul>
                        </div>
                    </div>
                </div>
        <div class="header__form" action="#">
        <input class="input_text" type="text" required placeholder="Search for Item"
        v-model="searchValue">
        <button @click="filter(searchValue)">
            <i class="fa fa-search" aria-hidden="true"></i>
        </button>
        </div>
    </div>
    <div class="header__right">
            <button class="cart">
                <router-link :to="{name: 'cartPage', params: {cart_data: CART}}">
                    <img class="header__cart" src="../assets/cart.png" alt="cart">
                    </router-link>
                <cart :cart_data="CART"/>
            </button>
        <a class="button" href="#">My account
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        </a>
    </div>
</div>
</template>

<script>
// import search from '@/components/search.vue';
import cart from '@/components/cart.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Header',
  components: {
    // search,
    cart,
  },
  data() {
    return {
      searchValue: '',
    };
  },
  computed: {
    ...mapGetters(['CART', 'SEARCH_VALUE']),
  },
  methods: {
    ...mapActions(['GET_SEARCH_VALUE']),
    filter(value) {
      this.GET_SEARCH_VALUE(value);
      this.$router.push('/catalog_page');
    },
  },
};
</script>

<style>
</style>
