<template>
  <div class="wrapper">
    <div class="top">
        <Header></Header>
        <navigation/>
        <div class="promo center">
             <div class="promo__content">
                 <h2 class="promo__h2">THE BRAND</h2>
                 <h3 class="promo__h3">OF LUXERIOUS <span class="promo__color">FASHION</span></h3>
             </div>
         </div>
        <div class="catalog center">
             <div class="catalog__left">
                 <div class="catalog__men">
                    <a class="men" href="catalog.html">
                        <img class="men__img" src='../assets/men.jpg' alt="men">
                    </a>
                     <div class="catalog__content">
                         <p class="content">Hot deal
                             <br><span class="content_color">for men</span></p>
                     </div>
                 </div>
                 <div class="catalog__accesories">
                    <a class="accesories" href="catalog.html">
                        <img class="accesories__img" src="../assets/acces.jpg" alt="accesories">
                    </a>
                     <div class="catalog__content">
                         <p class="content">LUXIROUS & trendy
                             <br><span class="content_color">accesories</span></p>
                     </div>
                 </div>
             </div>
             <div class="catalog__right">
                 <div class="catalog__women">
                     <a class="women" href="catalog.html">
                        <img class="women__img" src="../assets/women.jpg" alt="women">
                        </a>
                     <div class="catalog__content">
                         <p class="content">30% offer
                             <br><span class="content_color">women</span></p>
                     </div>
                 </div>
                 <div class="catalog__kids">
                    <a class="kids" href="catalog.html">
                        <img class="kids__img" src="../assets/kids.jpg" alt="kids">
                    </a>
                     <div class="catalog__content">
                         <p class="content">new arrivals
                             <br><span class="content_color">FOR kids</span></p>
                     </div>
                 </div>
             </div>
         </div>
        <div class="fetured center">
            <div class="fetured__content">
                 <h2 class="fetured__h2">Featured Items</h2>
                 <h3 class="fetured__h3"> Shop for items based on what we featured in this week</h3>
            </div>
            <catalog />
            <div class="fetured__button">
                <router-link :to="{name: 'catalog_page'}">
                 <button class="all_product">Browse All Product
                    <i class="fas fa-long-arrow-alt-right"></i>
                </button>
                 </router-link>
            </div>
        </div>
        <div class="sale center">
        <div class="banner">
            <div class="sale_content">
                <p class="discount">30% <span class="discount_color">OFFER</span></p>
                <p class="for_women">FOR WOMEN</p>
            </div>
        </div>
        <div class="feature-box">
            <div class="box">
                <div class="img"> <img src="../assets/car.png" alt="delivery"> </div>
                <div class="feature_content">
                    <h3 class="content_h3">Free Delivery</h3>
                    <p class="content_p">Worldwide delivery on all.
                        Authorit tively morph next-generation innov tion with extensive models.
                    </p>
                </div>
            </div>
            <div class="box">
                <div class="img"> <img src="../assets/disc.png" alt="discounts"> </div>
                <div class="feature_content">
                    <h3 class="content_h3">Sales & discounts</h3>
                    <p class="content_p">Worldwide delivery on all.
                        Authorit tively morph next-generation innov tion with extensive models.
                    </p>
                </div>
            </div>
            <div class="box">
                <div class="img"> <img src="../assets/vip.png" alt="Quality assurance"> </div>
                <div class="feature_content">
                    <h3 class="content_h3">Quality assurance</h3>
                    <p class="content_p">Worldwide delivery on all.
                        Authorit tively morph next-generation innov tion with extensive models.
                    </p>
                </div>
            </div>
        </div>
        </div>
        <feedback />
        <footerBlock />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue';
import navigation from '@/components/navigation.vue';
import catalog from '@/components/catalog.vue';
import feedback from '@/components/feedback.vue';
import footerBlock from '@/components/footerBlock.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Home',
  components: {
    Header,
    navigation,
    catalog,
    feedback,
    footerBlock,
  },
  methods: {
    ...mapActions(['GET_SEARCH_VALUE']),
  },
  mounted() {
    this.GET_SEARCH_VALUE('');
  },
};
</script>
