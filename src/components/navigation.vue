<template>
    <div class="nav center">
             <ul class="menu">
                 <router-link :to="{name: 'Home'}">
                 <li class="menu__list"> <a href="#" class="menu__link">Home </a></li>
                 </router-link>
                 <router-link :to="{name: 'catalog_page'}">
                 <li class="menu__list"> <a href="catalog.html" class="menu__link">Men </a></li>
                 </router-link>
                 <router-link :to="{name: 'catalog_page'}">
                 <li class="menu__list"> <a href="catalog.html" class="menu__link">Women </a>
                     <div class="drop">
                         <div class="drop_flex">
                             <div class="drop__h3">Women</div>
                             <ul class="drop_ul">
                                 <li><a href="#" class="drop__link">Dresses</a></li>
                                 <li><a href="#" class="drop__link">Tops</a></li>
                                 <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                 <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                                 <li><a href="#" class="drop__link">Blazers</a></li>
                                 <li><a href="#" class="drop__link">Denim</a></li>
                                 <li><a href="#" class="drop__link">Leggings/Pants</a></li>
                                 <li><a href="#" class="drop__link">Skirts/Shorts</a></li>
                                 <li><a href="#" class="drop__link">Accessories </a></li>
                             </ul>
                         </div>
                         <div class="drop_flex">
                             <div class="drop__h3">Women</div>
                             <ul class="drop_ul">
                                 <li><a href="#" class="drop__link">Dresses</a></li>
                                 <li><a href="#" class="drop__link">Tops</a></li>
                                 <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                 <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                             </ul>
                             <div class="drop__h3">Women</div>
                             <ul class="drop_ul">
                                 <li><a href="#" class="drop__link">Dresses</a></li>
                                 <li><a href="#" class="drop__link">Tops</a></li>
                                 <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                             </ul>
                         </div>
                         <div class="drop_flex">
                             <div class="drop__h3">Women</div>
                             <ul class="drop_ul">
                                 <li><a href="#" class="drop__link">Dresses</a></li>
                                 <li><a href="#" class="drop__link">Tops</a></li>
                                 <li><a href="#" class="drop__link">Sweaters/Knits</a></li>
                                 <li><a href="#" class="drop__link">Jackets/Coats</a></li>
                             </ul>
                             <div class="menu_sale">
                                <a href="#">
                                <img class="menu_sale__img" src="img/mega_menu.png">
                                </a>
                                 <div class="menu_sale_content">
                                     <p class="menu_sale_text">Super sale!</p>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </li>
                 </router-link>
                 <li class="menu__list">
                     <a href="catalog.html" class="menu__link">Kids </a></li>
                 <li class="menu__list">
                     <a href="catalog.html" class="menu__link">Accoseriese </a></li>
                 <li class="menu__list">
                     <a href="catalog.html" class="menu__link">Featured </a></li>
                 <li class="menu__list">
                     <a href="catalog.html" class="menu__link">Hot Deals</a></li>
             </ul>
    </div>
</template>

<script>
export default {
  name: 'navigation',
};
</script>

<style>
</style>
