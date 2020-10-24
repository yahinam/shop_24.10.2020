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
                <li class="breadcrumb_list">
                    <a class="breadcrumb_link" href="#">Men</a></li>
                <li class="breadcrumb_list">
                    <a class="breadcrumb_link" href="#">New Arrivals</a></li>
            </ul>
            </div>
        </div>
        <div class="no_result_search"
             v-if="!this.searchedProducts.length">
            No Results for "{{this.SEARCH_VALUE}}". <br>
            Try a new search...</div>
    <div class="main_content center" v-else>
        <div class="sidebar">
            <details class="sidebar__details">
                <summary class="sidebar__summary">Category</summary>
                <ul class="sidebar__ul">
                    <li class="sidebar__list"><a href="#" class="sidebar__link">Accessories</a></li>
                    <li class="sidebar__list"><a href="#" class="sidebar__link">Bags</a></li>
                    <li class="sidebar__list"><a href="#" class="sidebar__link">Denim</a></li>
                    <li class="sidebar__list">
                        <a href="#" class="sidebar__link">Hoodies & Sweatshirts</a></li>
                    <li class="sidebar__list">
                        <a href="#" class="sidebar__link">Jackets & Coats</a></li>
                    <li class="sidebar__list"><a href="#" class="sidebar__link">Pants</a></li>
                    <li class="sidebar__list"><a href="#" class="sidebar__link">Polos</a></li>
                    <li class="sidebar__list"><a href="#" class="sidebar__link">Shirts</a></li>
                    <li class="sidebar__list"><a href="#" class="sidebar__link">Shoes</a></li>
                    <li class="sidebar__list"><a href="#" class="sidebar__link">Shorts</a></li>
                    <li class="sidebar__list">
                        <a href="#" class="sidebar__link">Sweaters & Knits</a></li>
                    <li class="sidebar__list"><a href="#" class="sidebar__link">T-Shirts</a></li>
                    <li class="sidebar__list"><a href="#" class="sidebar__link">Tanks</a></li>
                </ul>
            </details>
            <details class="sidebar__details">
                <summary class="sidebar__summary">Brand</summary>
            </details>
            <details class="sidebar__details">
                <summary class="sidebar__summary">dESIGNER</summary>
            </details>
        </div>
        <div class="catalog_product">
            <div class="filter">
                <div class="trending">
                    <h3 class="filter_name">Trending now</h3>
                    <ul>
                        <a class="trend" href="#">Bohemian</a>
                        <a class="trend" href="#">Floral</a>
                        <a class="trend" href="#">Lace</a>
                    </ul>
                    <ul>
                        <a class="trend" href="#">Floral</a>
                        <a class="trend" href="#">Lace</a>
                        <a class="trend" href="#">Bohemian</a>
                    </ul>
                </div>
                <div class="size">
                    <h3 class="filter_name">size</h3>
                    <input name="cat" type="checkbox" class="checkbox" id="checkbox" />
                    <label class="filter_text" for="checkbox">XXS</label>
                    <input type="checkbox" class="checkbox" id="checkbox" />
                    <label class="filter_text" for="checkbox">XS</label>
                    <input type="checkbox" class="checkbox" id="checkbox" />
                    <label class="filter_text" for="checkbox">S</label>
                    <input type="checkbox" class="checkbox" id="checkbox" />
                    <label class="filter_text" for="checkbox">M</label>
                    <input type="checkbox" class="checkbox" id="checkbox" />
                    <label class="filter_text" for="checkbox">L</label>
                    <input type="checkbox" class="checkbox" id="checkbox" />
                    <label class="filter_text" for="checkbox">XL</label>
                    <input type="checkbox" class="checkbox" id="checkbox" />
                    <label class="filter_text" for="checkbox">XXL</label>
                </div>
                <div class="price">
                    <h3 class="filter_name">price</h3>
                    <input id="range" type="range" value="$52" step="1"> <br>
                    <lable for="range">$52</lable>
                </div>
            </div>
            <div class="sort">
                    <lable class="sort_text">Sort By</lable>
                    <input class="sort_button" id="sort" list="dl_sort" placeholder="Name">
                    <datalist id="dl_sort">
                        <option>Name</option>
                        <option>Price</option>
                    </datalist>
                     <lable class="sort_text">Show</lable>
                    <input class="show_button" id="show" list="dl_show" placeholder="09">
                    <datalist id="dl_show">
                        <option>03</option>
                        <option>09</option>
                        <option>12</option>
                    </datalist>
                </div>
            <!-- <catalog /> -->
            <div class="fetured__items">
            <catalogItem v-for="product in filteredProducts"
                :key="product.id_product"
                :product="product"
                @addToCart="addToCart"
                @productClick="productClick">
            </catalogItem>
            </div>
            <div class="page">
                <div class="page_left">
                    <ul class="page_list">
                   <li class="page_link">
                       <a class="to_page" href="#"><i class="fa fa-angle-left"></i></a></li>
                    <li class="page_link"><a class="to_page" href="index.html">1</a></li>
                    <li class="page_link"><a class="to_page" href="catalog.html">2</a></li>
                    <li class="page_link"><a class="to_page" href="#">3</a></li>
                    <li class="page_link"><a class="to_page" href="#">4</a></li>
                    <li class="page_link"><a class="to_page" href="#">5</a></li>
                    <li class="page_link"><a class="to_page" href="#">6</a></li>
                    <li class="page_link"><a class="to_page" href="#">...</a></li>
                    <li class="page_link"><a class="to_page" href="#">20</a></li>
                    <li class="page_link">
                        <a class="to_page " href="#"><i class="fa fa-angle-right"></i></a></li>
                </ul>
                </div>
                <div class="page_right">
                    <button class="View_All">View All</button>
                </div>
            </div>
        </div>
    </div>
    <div class="catalog_page center">
        <div class="box number_one">
            <div class="img"> <img src="../assets/car.png" alt="delivery"> </div>
            <div class="feature_content">
                <h3 class="content_h3">Free Delivery</h3>
                <p class="content_p">
                    Worldwide delivery on all.
                    Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </div>
        </div>
        <div class="box">
            <div class="img"> <img src="../assets/disc.png" alt="discounts"> </div>
            <div class="feature_content">
                <h3 class="content_h3">Sales & discounts</h3>
                <p class="content_p">
                    Worldwide delivery on all.
                    Authorit tively morph next-generation innov tion with extensive models.
                </p>
            </div>
        </div>
        <div class="box">
            <div class="img"> <img src="../assets/vip.png" alt="Quality assurance"> </div>
            <div class="feature_content">
                <h3 class="content_h3">Quality assurance</h3>
                <p class="content_p">
                    Worldwide delivery on all.
                    Authorit tively morph next-generation innov tion with extensive models.
                </p>
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
// import catalog from '@/components/catalog.vue';
import catalogItem from '@/components/catalog-item.vue';
import feedback from '@/components/feedback.vue';
import footerBlock from '@/components/footerBlock.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'catalogPage',
  components: {
    Header,
    navigation,
    catalogItem,
    feedback,
    footerBlock,
  },
  data() {
    return {
      searchedProducts: [],
    };
  },
  computed: {
    ...mapGetters(['PRODUCTS_MEN', 'SEARCH_VALUE']),
    filteredProducts() {
      if (this.searchedProducts.length) {
        return this.searchedProducts;
      } return this.PRODUCTS_MEN;
    },
  },
  methods: {
    ...mapActions(['GET_PRODUCTS', 'ADD_TO_CART']),
    addToCart(product) {
      this.ADD_TO_CART(product);
    },
    searchProducts(value) {
      this.searchedProducts = [...this.PRODUCTS_MEN];
      const regexp = new RegExp(value, 'i');
      this.searchedProducts = this.searchedProducts.filter((el) => regexp.test(el.product_name));
    },
    productClick(idProduct) {
      this.$router.push({ name: 'itemPage', query: { idProduct } });
    },
  },
  watch: {
    SEARCH_VALUE() {
      this.searchProducts(this.SEARCH_VALUE);
    },
  },
  mounted() {
    this.GET_PRODUCTS()
      .then((response) => {
        if (response.data) {
          this.searchProducts(this.SEARCH_VALUE);
        }
      });
  },
};
</script>
