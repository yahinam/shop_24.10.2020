<template>
  <div class="item_promo">
    <img :src="require('../assets/' + product.img)">
          <div class="arrow"><a href="#"><i class="fa fa-angle-left white"></i></a></div>
          <div class="arrow"><a href="#"><i class="fa fa-angle-right white"></i></a></div>
          <div class="product_discription">
          <h3 class="product_discription_h3">WOMEN COLLECTION</h3>
          <div class="line">
              <div class="block"></div>
              <div class="block_color"></div>
              <div class="block"></div>
          </div>
          <h1 class="product_discription_h1">Moschino Cheap And Chic</h1>
          <p class="product_discription_p">
            Compellingly actualize fully researched processes before proactive outsourcing.
            Progressively syndicate collaborative architectures before cutting-edge services.
            Completely visualize parallel core competencies rather than exceptional portals.</p>
          <div class="parameter">
              <div class="parameter_right">
                  <p class="parameter_text">MATERIAL:
                    <span class="parameter_color">COTTON</span></p>
              </div>
              <div class="parameter_left">
                  <p class="parameter_text">DESIGNER:
                    <span class="parameter_color">BINBURHAN</span></p>
              </div>
          </div>
          <p class="price_color">$561</p>
          <div class="border"></div>
          <div class="choose">
              <div class="choose_color">
                  <lable class="choose_text">CHOOSE COLOR</lable>
                    <input class="choose_button" id="choose" list="dl_choose" placeholder="Red">
                    <datalist id="dl_choose">
                        <option class="choose_list">
                          <img src="img/color.png" alt="color">Red</option>
                        <option class="choose_list">
                          <img src="img/color.png" alt="color">Blue</option>
                        <option class="choose_list">
                          <img src="img/color.png" alt="color">White</option>
                    </datalist>
              </div>
              <div class="choose_color">
                     <lable class="choose_text">CHOOSE SIZE</lable>
                    <input class="choose_button" id="size" list="dl_size" placeholder="XXS">
                    <datalist id="dl_size">
                        <option class="choose_list">XXS</option>
                        <option class="choose_list">XS</option>
                        <option class="choose_list">S</option>
                        <option class="choose_list">M</option>
                        <option class="choose_list">L</option>
                        <option class="choose_list">XL</option>
                        <option class="choose_list">XXL</option>
                    </datalist>
              </div>
              <div class="choose_color">
                     <lable class="choose_text">QUANTITY</lable>
                    <input class="choose_button" id="quantity" list="dl_quantity" placeholder="1">
                    <datalist id="dl_quantity">
                        <option class="choose_list">1</option>
                        <option class="choose_list">2</option>
                        <option class="choose_list">3</option>
                    </datalist>
              </div>
          </div>
          <button class="add_to_card">
             <img class="card_color" src="../assets/card_color.png" alt="cart"> Add to Cart
          </button>
  </div>
        </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'item',
  props: {
    // product: {
    //   type: Object,
    //   default() {
    //     return {};
    //   },
    // },
  },
  computed: {
    ...mapGetters(['PRODUCTS_MEN']),
    product() {
      let result = {};
      const vm = this;
      // eslint-disable-next-line
      this.PRODUCTS_MEN.find(function (item) {
        if (item.id_product === vm.$route.query.idProduct) {
          result = item;
          console.log(result);
          console.log(this.idProduct);
        }
        // console.log(result);
        return result;
      });
      return result;
    },
  },
  methods: {
    addToCart() {
      this.$emit('addToCart', this.product);
    },
  },
  mounted() {
    // this.product();
    // console.log(this.product);
  },
};
</script>

<style>
</style>
