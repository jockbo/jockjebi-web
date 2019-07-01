import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home')
    },
    {
        path: '/jockbolist',
        name: 'jockbolist',
        component: () => import('../views/jockboList')
    },
    {
        path: '/createjockbo',
        name: 'createJockbo',
        component: () => import('../views/createJockbo')
    },
    {
        path: '/detail',
        name: 'detail',
        component: () => import('../views/detail')
    },
];

export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})