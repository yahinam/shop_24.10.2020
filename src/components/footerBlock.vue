<template>
    <div>
    <div class="footer center">
        <div class="footer__content">
            <div class="about_us">
                <a class="logo" href="#">
                    <img class="logo__img" src="../assets/logo copy.png">
                    BRAN<span class="logo__color">D</span>
                </a>
                <p class="text">
                    Objectively transition extensive data rather than cross functional solutions.
                    Monotonectally syndicate multidisciplinary materials before go forward benefits.
                    Intrinsicly syndicate an expanded array of
                    processes and cross-unit partnerships.
                    <br>
                    Efficiently plagiarize 24/365 action items and focused infomediaries.
                    Distinctively seize superior initiatives for wireless technologies.
                    Dynamically optimize.
                </p>
            </div>
            <div class="company">
                <h3 class="footer_name">COMPANY</h3>
                <ul class="footer_menu">
                    <router-link :to="{name: 'Home'}">
            <li class="footer__list"> <a href="#" class="footer__link">Home</a></li>
        </router-link>
                    <li class="footer__list"> <a href="#" class="footer__link">Shop</a></li>
                    <li class="footer__list"> <a href="#" class="footer__link">About</a></li>
                    <li class="footer__list"> <a href="#" class="footer__link">How It Works</a></li>
                    <li class="footer__list"> <a href="#" class="footer__link">Contact</a></li>
                </ul>
            </div>
            <div class="information">
                <h3 class="footer_name">INFORMATION</h3>
                <ul class="footer_menu">
                    <li class="footer__list">
                        <a href="#" class="footer__link">Tearms & Condition</a></li>
                    <li class="footer__list">
                        <a href="#" class="footer__link">Privacy Policy</a></li>
                    <li class="footer__list">
                        <a href="#" class="footer__link">How to Buy</a></li>
                    <li class="footer__list">
                        <a href="#" class="footer__link">How to Sell</a></li>
                    <li class="footer__list">
                        <a href="#" class="footer__link">Promotion</a></li>
                </ul>
            </div>
            <div class="shop_category">
                <h3 class="footer_name">SHOP CATEGORY</h3>
                <ul class="footer_menu">
                    <router-link :to="{name: 'catalog_page'}">
                 <li class="footer__list">
                        <a href="catalog.html" class="footer__link">Men</a></li>
                 </router-link>
                    <li class="footer__list">
                        <a href="catalog.html" class="footer__link">Women</a></li>
                    <li class="footer__list">
                        <a href="catalog.html" class="footer__link">Child</a></li>
                    <li class="footer__list">
                        <a href="catalog.html" class="footer__link">Apparel</a></li>
                    <li class="footer__list">
                        <a href="catalog.html" class="footer__link">Brows All</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer__copy center">
        <div class="footer__copy_left">
            <p class="footer_p">&copy; 2017 Brand All Rights Reserved.</p>
        </div>
        <div class="footer__copy_right">
            <a class="social_network" href="#"><i class="fab fa-facebook-f"></i></a>
            <a class="social_network" href="#"><i class="fab fa-twitter"></i></a>
            <a class="social_network" href="#"><i class="fab fa-linkedin-in"></i></a>
            <a class="social_network" href="#"><i class="fab fa-pinterest-p"></i></a>
            <a class="social_network" href="#"><i class="fab fa-google-plus-g"></i></a>
        </div>
    </div>
    </div>
</template>

<script>
export default {
  name: 'footerBlock',
};
</script>

<style>
</style>
