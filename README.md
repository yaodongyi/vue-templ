<!--
 * @Author: yaodongyi
 * @Date: 2019-12-06 16:26:49
 * @Description: 
 -->
# integral_shop

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Created template
```
npm run tpl "name"
```


# 创建模版
> [学习nest创建模块方式，采用脚本生成统一模版](https://docs.nestjs.cn/6/controllers?id=%e8%b7%af%e7%94%b1)     

`npm run tpl "name"`  自动生成到Upin 目录      


# router
滑入滑出效果     
```javascript
// 向左滑入
router.push("/home"); 
// or
router.replace("/home");
// ... 

// 向右滑入
router.go(-n);
//or 
window.history.go(n);
```
使用`router.go(-n); or window.history.go(n);`将会记录上一个页面数据。


# postcss 
采用根节点 `375/16` 的方式进行界面响应式。**请将设计图像素比例设置宽为375px**


# @alias
```javascript
alias: {
    '@': path.resolve(__dirname, './src'),
    '@c': path.resolve(__dirname, './src/components'),
    '@api': path.resolve(__dirname, './src/api'),
    '@tools': path.resolve(__dirname, './src/assets/tools'),
    '@utils': path.resolve(__dirname, './src/assets/utils'),
},
```


# bug
## vue-router v3.2.1 报 catch 错误
`undefined` & 重复跳转同一个页面错误      
解决方案：回退版本 `vue-router `    
1. `npm i vue-router@3.0 -S`      
2. ` this.$router.push().catch(err=>console.log(err)); `     


### 目录结构

```javascript
├── webpack.config.js ---------------- webpack基础运行文件
│
├── src ------------------------------ 源码目录
│   ├── assets ----------------------- 资源目录
│   │    ├── style ------------------- 统一样式资源文件
│   │    ├── utils ------------------- 存放公用js组件
│   │    │   ├── axios --------- axios拦截器
│   │    │   ├── methods ------- 全局(methods-API)
│   │    │   ├── navigator ----- 判断终端及浏览器内核
│   │    │   └── rem ----------- 项目全局引入的rem转化器
│   │    │
│   │    ├── tools ------------------- 存放与业务逻辑相关的js轮子
│   │    │   └── vant ---------------- vant按需引入
│   │    └── ******
│   │
│   ├── api ------------------------ api目录
│   │    └── Upin ----------------- Upin-api
│   │
│   ├── views ------------------------ 页面目录
│   │    ├── index.vue --------------- html文件(默认首页)
│   │    └── Upin ----------------- Upin项目文件存放地址
│   │
│   ├── router --------------------- 路由文件目录
│   │    ├── index.js -------------- 路由入口文件
│   │    ├── permission ------------ 路由拦截器
│   │    └── uPin-router ----------- Upin路由 
│   │
│   ├── components --------------------- vue组件
│   │    └──Upin ----------------------- Upin组件
│   └── ******
│   
├── .env.development -------------------- 开发环境配置
├── .env.production --------------------- 生成环境配置
├── .babelrc ---------------------------- babel配置文件
├── prettier.config.js ------------------ prettier统一代码格式化规范
├── postcss.config.js ------------------- postcss配置文件
├── vue.config.js ----------------------- vue脚手架自定义配置
└── README.md 
```