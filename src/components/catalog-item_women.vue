<template>
    <div class="like_product">
                    <div class="like_item_img"
                      :style="{'background-image': `url(${require('../assets/' + product.img)}`}">
                    </div>
                    <div class="item__content">
                       <a class="like_item_name">{{product.product_name}}</a>
                       <p class="item_price">${{product.price}}</p>
                    </div>
            </div>
</template>

<script>
export default {
  name: 'catalogItemWomen',
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>

<style>
</style>
