
import { defineStore } from "pinia";

export const userCounterStore = defineStore("userCounterStore",{
    state: () => {
        return {
            hidePwd : false,
        }
    },
    getters: {},
    actions: {
        showPwd() {
            this.hidePwd = !this.hidePwd;
            // console.log(this.hidePwd);
        },
        login() {
            console.log('loged');
        }
    },
    mutations: {},
});
