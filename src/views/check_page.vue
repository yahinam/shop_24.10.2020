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
        <router-link :to="{name: 'catalog_page'}">
                <li class="breadcrumb_list">
                    <a class="breadcrumb_link" href="#">Men</a></li>
        </router-link>
                <li class="breadcrumb_list">
                    <a class="breadcrumb_link" href="#">New Arrivals</a></li>
            </ul>
            </div>
        </div>
        <div class="register center">
        <details class="register__details">
            <summary class="register__summary">01. Shipping Adress</summary>
            <div class="register_block">
                <div class="register_block__left">
                    <h3 class="register_h3">Check as a guest or register</h3>
                    <p class="register_p">Register with us for future convenience</p>
                    <div class="checkbox_block">
                        <input id="radio" type="radio" class="register_checkbox" name="switcher"/>
<label for="radio" class="label">checkout as guest</label>
                    </div>
                    <div class="checkbox_block">
                      <input id="checkbox" type="radio" class="register_checkbox" name="switcher" />
<label for="checkbox" class="label" >register</label>
                    </div>
                    <h3 class="register_h3">register and save time!</h3>
                    <p class="register_p">Register with us for future convenience</p>
                    <p class="register_p margin">
                      <i class="fa fa-chevron-double-right"></i> Fast and easy checkout</p>
                    <p class="register_p">
                      <i class="fa fa-chevron-double-right"></i>
                      Easy access to your order history and status</p>
                    <button class="continue">Continue</button>
                </div>
                <div class="register_block__right">
                    <h3 class="register_h3">Already registed?</h3>
                    <p class="register_p">Please log in below</p>
                    <p class="register__text">EMAIL ADDRESS
                      <span class="register__text_color">*</span></p>
                    <form action="#">
                        <input class="register_email" type="email">
                        <p class="register__text">PASSWORD
                          <span class="register__text_color">*</span></p>
                        <input class="register_email" type="password">
                        <p class="register_p register__p_margin">*Required Fileds</p>
                        <button class="continue">Log in</button>
                        <a class="question" href="#">Forgot Password?</a>
                    </form>
                </div>
            </div>
        </details>
        <details class="register__details">
            <summary class="register__summary">02. BILLING INFORMATION</summary>
        </details>
        <details class="register__details">
            <summary class="register__summary">03. SHIPPING INFORMATION</summary>
        </details>
        <details class="register__details">
            <summary class="register__summary">04. SHIPPING METHOD</summary>
        </details>
        <details class="register__details">
            <summary class="register__summary">05. PAYMENT METHOD</summary>
        </details>
        <details class="register__details">
            <summary class="register__summary">06. ORDER REVIEW</summary>
        </details>
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
import feedback from '@/components/feedback.vue';
import footerBlock from '@/components/footerBlock.vue';

export default {
  name: 'checkPage',
  components: {
    Header,
    navigation,
    feedback,
    footerBlock,
  },
};
</script>
