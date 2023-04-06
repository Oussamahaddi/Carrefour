
import { defineStore } from "pinia";

export const userCounterStore = defineStore("userCounterStore",{
    state: () => {
        return {
            hidePwd : false,
            navVisibility : false,
            haha : true,
        }
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
        }
    },
    mutations: {},
});
