<template>
  <div class="wrapper">
    <div class="top">
      <Header></Header>
      <navigation></navigation>
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
      <div class="item_promo">
          <div class="arrow"><a href="#"><i class="fa fa-angle-left white"></i></a></div>
          <img class="item_page_img" v-if="item.img" :src="require('../assets/' + item.img)">
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
          <p class="price_color">${{item.price}}</p>
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
          <button class="add_to_card" @click="addToCart(item)">
             <img class="card_color" src="../assets/card_color.png" alt="cart"> Add to Cart
          </button>
        </div>
      </div>
      <div class="like_products">
        <h3 class="like_products_h3">you may like also</h3>
        <div class="like_products_img">
      <catalogItemWomen v-for="product in PRODUCTS_WOMEN"
                :key="product.id_product"
                :product="product">
      </catalogItemWomen>
      </div>
      </div>
    </div>
    <feedback />
    <footerBlock />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import navigation from '@/components/navigation.vue';
import feedback from '@/components/feedback.vue';
import footerBlock from '@/components/footerBlock.vue';
import catalogItemWomen from '@/components/catalog-item_women.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'itemPage',
  components: {
    Header,
    navigation,
    catalogItemWomen,
    feedback,
    footerBlock,
  },
  computed: {
    ...mapGetters(['PRODUCTS_MEN', 'PRODUCTS_WOMEN', 'CART', 'FEATURED_PRODUCTS']),
    item() {
      let result = {};
      const vm = this;
      const productsAll = this.PRODUCTS_MEN.concat(this.CART, this.FEATURED_PRODUCTS);
      // eslint-disable-next-line
      productsAll.find(function (item) {
        if (item.id_product === vm.$route.query.idProduct) {
          result = item;
        }
      });
      return result;
    },
  },
  methods: {
    ...mapActions(['GET_PRODUCTS', 'ADD_TO_CART', 'GET_SEARCH_VALUE']),
    addToCart(item) {
      this.ADD_TO_CART(item);
    },
  },
  mounted() {
    this.GET_PRODUCTS();
    this.GET_SEARCH_VALUE('');
  },
};
</script >

<style scoped>
</style>
