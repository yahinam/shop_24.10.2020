<template>
    <div class="fetured__items">
      <catalogItem v-for="product in FEATURED_PRODUCTS"
                :key="product.id_product"
                :product="product"
                @addToCart="addToCart"
                @productClick="productClick">
      </catalogItem>
    </div>
</template>

<script>
import catalogItem from '@/components/catalog-item.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'catalog',
  components: {
    catalogItem,
  },
  props: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['FEATURED_PRODUCTS']),
  },
  methods: {
    ...mapActions(['GET_PRODUCTS', 'ADD_TO_CART']),
    addToCart(product) {
      this.ADD_TO_CART(product);
    },
    productClick(idProduct) {
      this.$router.push({ name: 'itemPage', query: { idProduct } });
    },
  },
  mounted() {
    this.GET_PRODUCTS();
  },
};
</script>

<style>
</style>
