import Vue from "vue";
import Router from "vue-router";
import User from "../pages/user/index.vue";
import Login from "../pages/login/index.vue";
import Home from "../pages/home/index.vue";
import userRouter from "./data/userRouter";
Vue.use(Router);

const router = new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
	{
		// 根路径重定向到登录页
		path: "/",
		redirect: "/login"
	},
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/home",
      name: "home",
      component: Home,
    },
    {
      path: "/user",
      name: "user",
      component: User,
      children: [...userRouter],
    },
  ],
});

export default router;
