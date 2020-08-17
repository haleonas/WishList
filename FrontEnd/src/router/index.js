import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateList from "@/views/CreateList";
import CheckList from "@/views/CheckList";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path:'/checklist/:list',
        name: 'ListParam',
        component: CheckList
    },
    {
        path:'/createlist',
        name: 'List',
        component: CreateList
    },
    {
        path:'/list/:list',
        name: 'List',
        component: CreateList
    },
]

const router = new VueRouter({
    routes
})

export default router
