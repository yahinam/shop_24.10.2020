<template>
    <div class="cart_item">
        <div class="cart_img" @click="productClick">
            <a href="#">
                <img class="cart_item__img" :src="require('../assets/' + cart_item.img)">
            </a>
        </div>
        <div class="cart_text" @click="productClick">
            <a href="item%201.html" class="cart_item_name">{{cart_item.product_name}}</a>
            <p class="cart_price">{{cart_item.quantity}} x ${{cart_item.price}}</p>
        </div>
        <div class="close" @click="delete_from_cart">
            <i class="fa fa-times-circle"></i>
        </div>
    </div>

</template>

<script>

export default {
  name: 'cartItem',
  props: {
    cart_item: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    delete_from_cart() {
      this.$emit('delete_from_cart');
    },
    productClick() {
      this.$emit('productClick', this.cart_item.id_product);
    },
  },
};
</script>

<style>
.cart_item__img{
    height: 85px;
    width: 70px;
};
</style>
