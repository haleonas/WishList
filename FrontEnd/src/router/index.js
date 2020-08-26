import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateList from '@/views/CreateList'
import myWishinglists from '@/views/myWishinglists'
import myAssignedLists from '@/views/myAssignedLists'
import LandingPage from "@/views/LandingPage";
import RegisterFromLandingPage from "@/views/RegisterFromLandingPage";

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
        path: '/createlist',
        name: 'EmptyList',
        component: CreateList
    },
    {
        path: '/createlist/:list',
        name: 'ContinueList',
        component: CreateList
    },
    {
        path: '/my-wishinglist',
        name: 'myWishinglists',
        component: myWishinglists
    },
    {
        path: '/myAssignedLists',
        name: 'myAssignedLists',
        component: myAssignedLists
    },
    {
        path: '/landingpage',
        name: 'Landingpage',
        component: LandingPage
    },
    {
        path: '/register',
        name: 'RegisterFromLandingPage',
        component: RegisterFromLandingPage
    }
]

const router = new VueRouter({
    routes
})

export default router
