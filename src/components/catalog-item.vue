<template>
    <div class="fetured__item">
        <a class="item">
            <img class="img_item" :src="require('../assets/' + product.img)" @click="productClick">
        </a>
        <div class="item__content" @click="productClick">
          <a href="item%201.html" class="item_name">{{product.product_name}}</a>
            <p class="item_price">${{product.price}}</p>
        </div>
        <a class="item_add" href="#" @click="addToCart" >
          <img class="cart_white" src="../assets/Forma.png" alt="cart_white">Add to Cart
        </a>
    </div>
</template>

<script>
export default {
  name: 'catalogItem',
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product);
    },
    productClick() {
      this.$emit('productClick', this.product.id_product);
    },
  },
};
</script>

<style>
</style>
