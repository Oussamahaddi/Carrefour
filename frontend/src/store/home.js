
import { defineStore } from "pinia";


export const userCounterStore = defineStore("userCounterStore",{
    state: () => {
        return {
            hidePwd: false,
            navVisibility: false,
            cartVisibility : false,
            haha: true,
            currentLink : 1,
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
        login() {
            console.log('loged');
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
    },
    mutations: {},
});
