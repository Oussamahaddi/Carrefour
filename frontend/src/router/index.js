import { createRouter, createWebHistory, useRoute } from "vue-router";
import { useStorage } from "@vueuse/core";

// user pages
import Home from "@/pages/home.vue";
import Categories from "@/pages/categories.vue"
import Store from "@/pages/store.vue";
import Contact from "@/pages/contact.vue";
import ProductDetail from "@/pages/productDetail.vue";
import Checkout from "@/pages/Checkout.vue";

// authentification
import Login from "@/user/login.vue";
import Register from "@/user/register.vue";

// admin dashboard
import Statistique from "@/admin/statistique.vue"
import Orders from "@/admin/orders.vue"
import Products from "@/admin/products.vue"
import Customers from "@/admin/customers.vue"
import Category from "@/admin/category.vue"

const isAdmin = useStorage("isAdmin");
const isLogged = useStorage("isLogged");

// console.log(isAdmin.value);

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
        path: '/checkout',
        name: "checkout",
        component: Checkout,
        meta: {
            isLogged : true
        }
    },
    {
        path: '/productDetail/:id',
        name: "productDetail",
        component: ProductDetail
    },
    {
        path: '/admin/statistique',
        name: "statistique",
        component: Statistique,
        meta : {
            isAdmin : true
        }
    },
    {
        path: '/admin/orders',
        name: "orders",
        component: Orders,
        meta : {
            isAdmin : true
        }
    },
    {
        path: '/admin/products',
        name: "products",
        component: Products,
        meta : {
            isAdmin : true
        }
    },
    {
        path: '/admin/category',
        name: "category",
        component: Category,
        meta : {
            isAdmin : true
        }
    },
    {
        path: '/admin/customers',
        name: "customers",
        component: Customers,
        meta : {
            isAdmin : true
        }
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

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.isAdmin)) {
        if (isAdmin.value == 'false') {
            next('/login');
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.isLogged)) {
        if (isLogged.value == 'false') {
            next('/login');
        } else {
            next();
        }
    } else {
        next();
    }
})

export default router;
