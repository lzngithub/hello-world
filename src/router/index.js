import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/index.vue'
import Register from '../pages/register/index.vue'
import Home from '../pages/home/index.vue'
Vue.use(Router)

const router = new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			// 根路径重定向到登录页
			path: '/',
			redirect: '/login'
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path: '/register',
			name: 'register',
			component: Register
		},
		{
			path: '/home',
			name: 'home',
			component: Home
		}
	]
})

export default router
