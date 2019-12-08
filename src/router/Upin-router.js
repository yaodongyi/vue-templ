/*
 * @Author: yaodongyi
 * @Date: 2019-12-06 17:06:51
 * @Description: 
 */
import { component } from '../assets/tools/index';
export default [
  {
    path: '/home',
    name: 'home',
    meta: { title: '' },
    component: component('Upin/Home.vue'),
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: '' },
    component: component('Upin/About.vue'),
  },
  {
    path: '/tplDemo',
    name: 'tplDemo',
    meta: { title: '' },
    component: component('Upin/tplDemo/tplDemo.vue'),
  },
];
