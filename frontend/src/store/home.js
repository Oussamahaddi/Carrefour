
import { defineStore } from "pinia";
import { useStorage } from '@vueuse/core'
import router from "@/router";
import axios from "axios";
import { toast } from "vue3-toastify";


export const userCounterStore = defineStore("userCounterStore",{
    state: () => {
        return {
            hidePwd: false,
            navVisibility: false,
            cartVisibility : false,
            haha: true,
            addProductFormVisibility : false,
            currentLink : 1,
            isLogged : useStorage('isLogged' , () => false),
            isAdmin : useStorage('isAdmin' , () => false),
            isUser : useStorage('isUser' , () => null),
            links: [
                { id: 1, url: "/", text: "Why Carrefour" },
                { id: 2, url: "/categories", text: "Categories" },
                { id: 3, url: "/store", text: "Our Store" },
                { id: 4, url: "/contact", text: "Contact" },
            ],
            cartItems : [],
            checkCartItemLength : false,
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
        showForm() {
            this.addProductFormVisibility = !this.addProductFormVisibility;
        },
        hideForm() {
            this.addProductFormVisibility = false;
        },
        async logout() {
            this.isLogged = false;
            this.isAdmin = false;
            this.isUser = null;
            await axios.get('/sanctum/csrf-cookie');
            try {
                const response = await axios.post('/logout', {});
                router.push('/');
            } catch(error){
                console.log(error);
            }
        },
        async getAllCart() {
            if (this.isLogged) {
                const id = useStorage('isUser').value;
                try {
                    const {data:response} = await axios.get('/api/cart/' + id);
                    this.cartItems = response;
                    // console.log(this.cartItems.length);
                    if (this.cartItems.length > 0) {
                        this.checkCartItemLength = true;
                    }
                } catch(error){
                    console.log(error);
                }
            }
        },
        totalPrice() {
            let total = 0;
            for (const item of this.cartItems) {
                total += item.prixAchat * item.product_qte;
            }
            return total;
        },
        async deleteItemCart(id) {
            try {
                const {data:response} = axios.delete(`/api/cart/${id}`);
                this.getAllCart();
                toast.success('Item delete successfuly');
            } catch(err) {
                console.log(err.response);
            }
        },
        async plus(newQte, id, productQte) {
            // console.log(newQte++, id);
            if (newQte < productQte) {
                newQte++
                try {
                    const response = await axios.put(`/api/cart/${id}`, {
                        product_qte : newQte,
                    });
                    this.getAllCart();
                } catch(err) {
                    console.log(err.response);
                }
            } else {
                toast.error('full stock');
            }
        },
        async minus(newQte, id) {
            if (newQte > 1) {
                newQte--;
                try {
                    const response = await axios.put(`/api/cart/${id}`, {
                        product_qte : newQte,
                    });
                    this.getAllCart();
                } catch(err) {
                    console.log(err.response);
                }
            }
        },
        async orderNow() {
            try {
                const {data:response} = await axios.post('/api/order', {
                    fields : this.cartItems,
                    total_price_order : this.totalPrice(),
                    user_id : this.isUser,
                });
                this.getAllCart();
                router.push('/myorder');
                toast.success('Order Succe');
            } catch(err) {
                console.log(err.response);
            }
        },
    },
    mutations: {},
});
