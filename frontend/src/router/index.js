import { createRouter, createWebHistory } from "vue-router";
// pages
import Home from "@/pages/home.vue";
import Categories from "@/pages/categories.vue"
import Store from "@/pages/store.vue";
// authentification
import Login from "@/user/login.vue";
import Register from "@/user/register.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
    },
    {
        path: '/categories',
        name: "categories",
        component: Categories
    },
    {
        path: '/store',
        name: "store",
        component: Store
    },
    {
        path: "/login",
        name: "login",
        component: Login,
    },
    {
        path: "/register",
        name: "register",
        component: Register,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
