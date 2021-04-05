# 一次关于vue的ssr体验

[vue ssr 官网](https://ssr.vuejs.org/zh/#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F)

## ssr的优缺点

- 优点
  - 利用SEO（搜索引擎）
  - 页面渲染时间短
- 缺点
  - 服务器压力大
  - 会造成可见不可操作

## 目标

> 从0开始完成一次ssr体验，加深ssr的理解，主要实现切页走SPA 刷新的时候走MPA

## 技术清单(主要)

- vue3.0
- vue-router4.0
- vuex4.0
- webapck5
- koa

## 项目目录

```javascript
├── src
│   ├── App.vue						// 根组件
│   ├── app.js						// 项目主入口
│   ├── entry-client.js		// 客户端入口
│   ├── entry-server.js	// 服务端入口
│   ├── pages
│   │   ├── Home.vue  // 首页
│   │   └── Item.vue	// item页
│   ├── router.js			// 路由
│   ├── server.js		// 服务端
│   └── store.js    // 数据仓库
├── webpack.base.config.js			// 打包公共配置
├── webpack.client.config.js		//打包客户端配置
├── webpack.server.config.js   //打包server端配置
├── index.template.html
├── package-lock.json
├── package.json
├── yarn-error.log
└── yarn.lock
```

## 项目相关包及版本

``` json
{
  "@koa/router": "^10.0.0",
  "@vue/server-renderer": "^3.0.4",
  "axios": "^0.21.1",
  "koa": "^2.13.0",
  "koa-static": "^5.0.0",
  "vue": "^3.0.4",
  "vue-router": "^4.0.2",
  "vuex": "^4.0.0-rc.2",
  "@babel/core": "^7.12.10",
  "@babel/plugin-transform-runtime": "^7.12.10",
  "@babel/preset-env": "^7.12.11",
  "@vue/compiler-sfc": "^3.0.4",
  "babel-loader": "^8.2.2",
  "css-loader": "^5.0.1",
  "html-webpack-plugin": "^4.5.0",
  "ignore-loader": "^0.1.2",
  "mini-css-extract-plugin": "^1.3.3",
  "nodemon": "^2.0.6",
  "vue-loader": "^16.1.2",
  "webpack": "^5.11.1",
  "webpack-cli": "^4.3.0",
  "webpack-dev-server": "^3.11.1",
  "webpack-merge": "^5.7.3",
  "webpack-node-externals": "^2.5.2"
}
```

## Q&A

- Q: 项目的起源和整体架构?
- A: 因为技术的更新个迭代，对新鲜的东西总有份热情，所以一切采用最新的技术来实现一次完美的体验。项目主要以vue3.0+vue-router4.0+vuex4.0+webpack5为主，配合Koa实现了服务端渲染，达到了预期的目标。
- Q: 在webpack中使用到了哪些loader和插件，作用是什么？
- A：vue-loader(对.vue结尾的文件处理)、babel-loader(.js文件处理)、(MiniCssExtractPlugin.loader，css-loader)(.css文件的处理)、ignore-loader(对服务端没有css样式css代码打包的忽略)、html-webpack-plugin(根据模版文件生成对应的html文件)、webpack-merge(合并webpack配置文件)。
- Q：vue的SSR是怎么做的？
- A：通过不同的entry来区分运行在客户端和服务端，在vue3.0中主要通过createApp, createSSRApp这两个方法创建运行于在不同的端，在vue2.0则要借用```vue vue-server-renderer```这个npm包。
- Q：vue的SSR的router是怎么处理的？
- A：在vue4.0中也是通过createMemoryHistory, createWebHistory创建不同的路由，来处理不同端的。
- Q: vue的SSR的vuex是怎么工作的？
- A：store的创建跟spa的创建方式是一样的，只是在走MPA时需要把store里面的数据挂载到window上，假如是异步请求，在MPA是只需要在vuessr提供好的钩子函数(serverPrefetch)请求数据挂载,而SPA则只需要判断store上的初始值有没有更改，在发送ajax。



## TODO

- 后期优化计划
  -  缓存
  -  流的方式进行优化



