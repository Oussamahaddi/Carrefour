
import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
import router from "@/router";
import axios from "axios";


export const userCounterStore = defineStore("userCounterStore",{
    state: () => {
        return {
            hidePwd: false,
            navVisibility: false,
            cartVisibility : false,
            haha: true,
            currentLink : 1,
            isLogged : useStorage('isLogged' , () => false),
            isAdmin : useStorage('isAdmin' , () => false),
            links: [
                { id: 1, url: "/", text: "Why Carrefour" },
                { id: 2, url: "/categories", text: "Categories" },
                { id: 3, url: "/store", text: "Our Store" },
                { id: 4, url: "/contact", text: "Contact" },
            ],
        };
    },
    getters: {},
    actions: {
        showPwd() {
            this.hidePwd = !this.hidePwd;
        },
        showNavbar() {
            this.navVisibility = !this.navVisibility;
        },
        handleCart() {
            this.cartVisibility = !this.cartVisibility;
        },
        closeCart() {
            this.cartVisibility = !this.cartVisibility;
        },
        isActive(path) {
            return route.path === path
        },
        async logout() {
            this.isLogged = false;
            this.isAdmin = false;
            await axios.get('/sanctum/csrf-cookie');
            try {
                const response = await axios.post('/logout', {});
                router.push('/');
            } catch(error){
                console.log(error);
            }
        }
    },
    mutations: {},
});
