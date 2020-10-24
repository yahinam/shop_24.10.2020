import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
// // eslint-disable-next-line no-unused-vars
// import itemPage from '../views/item_page.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/catalog_page',
    name: 'catalog_page',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/catalog_page.vue'),
    props: true,
  },
  {
    path: '/item_page',
    name: 'itemPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/item_page.vue'),
    props: true,
  },
  {
    path: '/cart_page',
    name: 'cartPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/cart_page.vue'),
    props: true,
  },
  {
    path: '/check_page',
    name: 'checkPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/check_page.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
