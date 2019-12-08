/*
 * @Author: yaodongyi
 * @Date: 2019-07-22 11:27:53
 * @Description: vant按需引入
 */
import Vue from 'vue';
import { Cell, CellGroup, List, Field, Button, Tab, Tabs, DropdownMenu, DropdownItem, Toast, Dialog, Loading } from 'vant';

let vant_use = (...val) => {
  for (let i = 0; i < [...val].length; i++) Vue.use(val[i]);
};
vant_use(Cell, CellGroup, List, Field, Button, Tab, Tabs, DropdownMenu, DropdownItem, Toast, Dialog, Loading);
