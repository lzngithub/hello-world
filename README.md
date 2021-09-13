# hello-world

## 新建项目,选择默认安装就可以

网址参考：
<https://cli.vuejs.org/zh/guide/creating-a-project.html#vue-create>

```js
vue create hello-world
```

## 安装依赖，运行项目

```shell
yarn install
```

```shell
yarn serve
```

## 使用less

less是css预处理语言，使用less我们能更方便的写样式，使用参考以下网址

<https://less.bootcss.com/#%E6%A6%82%E8%A7%88>

安装less，不要安装最新版本的，因为会报错，最新版本跟vue2不兼容

```shell
yarn add less@3.0.0 less-loader@5.0.0 -D
```

在main.js中添加以下代码

```js
import less from 'less'
Vue.use(less)
```

在vue中组件使用

```js
<template>
  <div class="container">
    <div class="content">less</div>
  </div>
</template>

<script>
export default {
  name: 'Less'
}
</script>

<style lang="less" scoped>
.container {
  .content {
    color: red;
  }
}
</style>
```

## 使用路由（vue-router）

vue-router是vue官方的路由管理工具，使用参考网址：  

<https://router.vuejs.org/zh/installation.html>

安装

```shell
yarn add vue-router@3.1.3 -S
```

使用方法:  
生成一个路由实例，挂在到vue上,具体可以看项目中怎么用

```js
import Router from "vue-router";
Vue.use(Router);
const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/user",
      name: "user",
      component: User,
      children: [...userRouter],
    },
  ],
});
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
```

## 引入组件库（element-ui）

参考网址：
<https://element.eleme.cn/#/zh-CN/component/installation>

安装

```js
yarn add element-ui -S
```

在main.js中全局引入,然后在项目中直接使用就可以了

```js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
```
