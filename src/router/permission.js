import router from './router';
import { Toast } from 'vant';

router.beforeEach((to, from, next) => {
  console.log(to.path);
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
  // if ('token') {
  //   next();
  // } else {
  //   Toast('未携带登录信息');
  // }
});
