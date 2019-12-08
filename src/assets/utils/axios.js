/*
 * @Author: yaodongyi
 * @Date: 2019-07-26 16:12:05
 * @Description:
 */
/*
  AXIOS请求相应拦截器
*/
import axios from 'axios';
import qs from 'qs';
import { Toast } from 'vant';

axios.interceptors.request.use(
  request => {
    //设置跨域头部
    request.headers = {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      // "Content-Type": "application/json; charset=UTF-8",//json
      Accept: 'application/json',
    };
    console.log(`%c 发送 ${request.url.replace(process.env.VUE_APP_API, '')} `, 'background:#00CC6E;color:#ffffff', request);
    return request;
  },
  err => {
    return Promise.reject(err);
  },
);

axios.interceptors.response.use(
  response => {
    console.log(`%c 接收 ${response.config.url.replace(process.env.VUE_APP_API, '')} `, 'background:#1E1E1E;color:#bada55', response.data);
    if (response.data.code === 0) {
      return response.data;
    } else {
      Toast(response.data.msg);
    }
  },
  error => {
    console.error(error);
    return Promise.reject(error);
  },
);

export default axios;
