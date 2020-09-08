import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import CreateList from '@/views/CreateList'
import myWishinglists from '@/views/myWishinglists'
import myAssignedLists from '@/views/myAssignedLists'
import LandingPage from "@/views/LandingPage";
import RegisterFromLandingPage from "@/views/RegisterFromLandingPage";
import DetailedV from '../views/DetailedV.vue'
import Finalview from '../views/Finalview.vue'
import LoginFromLandingPage from '../views/LoginFromLandingPage.vue'


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
    },
    {
        path: '/list/:url',
        name:'list/:url',
        component: DetailedV
    },
    {
        path: '/details/:name',
        name:'details',
        component: Finalview
    },
    {
        path: '/login',
        name:'login',
        component: LoginFromLandingPage
    }
]

const router = new VueRouter({
    routes
})

export default router
