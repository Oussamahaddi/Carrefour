import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/home.vue";
import Login from "@/user/login.vue";
import Register from "@/user/register.vue";

const routes = [
    {
        path: "/",
        name: "home",
        component: Home,
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
