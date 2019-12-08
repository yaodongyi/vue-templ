/*
 * @Author: yaodongyi
 * @Date: 2019-12-08 16:12:31
 * @Description:路由文件，命名加前缀uPin_ 。 同demo
 */
import axios from '../../assets/utils/axios';
const BaseUrl = process.env.VUE_APP_UPIN;

/**
 * demo
 * @param {Object} params
 * @api {post} host
 * @desc 命名加前缀uPin_apiName
 * export const uPin_login = params => {
 *   return axios.post(`${BaseUrl}/host`, params);
 * };
 */
