import Vue from 'vue';
import Router from 'vue-router';
import Home from '../views/Home.vue';
import Product from '../views/Product.vue';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products/:id',
      name: 'product',
      component: Product,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
  ],
});