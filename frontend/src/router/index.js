import { createRouter, createWebHistory } from "vue-router";

// user pages
import Home from "@/pages/home.vue";
import Categories from "@/pages/categories.vue"
import Store from "@/pages/store.vue";
import Contact from "@/pages/contact.vue";
import ProductDetail from "@/pages/productDetail.vue";

// authentification
import Login from "@/user/login.vue";
import Register from "@/user/register.vue";

// admin dashboard
import Statistique from "@/admin/statistique.vue"
import Orders from "@/admin/orders.vue"
import Products from "@/admin/products.vue"
import Customers from "@/admin/customers.vue"
import Category from "@/admin/category.vue"

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
        path: '/contact',
        name: "contact",
        component: Contact
    },
    {
        path: '/productDetail',
        name: "productDetail",
        component: ProductDetail
    },
    {
        path: '/admin/statistique',
        name: "statistique",
        component: Statistique
    },
    {
        path: '/admin/orders',
        name: "orders",
        component: Orders
    },
    {
        path: '/admin/products',
        name: "products",
        component: Products
    },
    {
        path: '/admin/category',
        name: "category",
        component: Category
    },
    {
        path: '/admin/customers',
        name: "customers",
        component: Customers
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
