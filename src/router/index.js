import Vue from 'vue';
import VueRouter from 'vue-router';
import { component } from '../assets/tools/index';

import Upin from './Upin-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    meta: { title: '' },
    component: component('index.vue'),
  },
].concat(Upin);

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;
