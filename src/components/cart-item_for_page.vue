<template>
  <tr>
    <td class="table_img">
      <a>
        <!-- <router-link :to="{name: 'itemPage'}"> -->
        <img class="img_for_cart_page"
             :src="require('../assets/' + cart_item.img)"
             alt="product_1"
             @click="productClick">
        <!-- </router-link> -->
      </a>
    </td>
    <td>
      <div class="product__text">
        <a><h3 class="product__text_h3">{{cart_item.product_name}}</h3></a>
        <p class="product__text_p">Color: <span class="product__text_color">Red</span></p>
        <p class="product__text_p">Size: <span class="product__text_color">Xll</span></p>
      </div>
    </td>
    <td>${{cart_item.price}}</td>
    <td>
      <div class="quantity">{{cart_item.quantity}}</div>
    </td>
    <td>free</td>
    <td>${{cart_item.price * cart_item.quantity}}</td>
    <td @click="delete_from_cart">
      <i class="fa fa-times-circle"></i>
    </td>
  </tr>
</template>

<script>

export default {
  name: 'cartItemForPage',
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
